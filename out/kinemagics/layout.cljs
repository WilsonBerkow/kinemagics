(ns kinemagics.layout
  (:require [kinemagics.runloop :as runloop]
            [kinemagics.canvas-util :as c]
            [kinemagics.velgraphs :as velgraphs]
            [kinemagics.config :as config]))

(def fps 40)

(def framelength (/ 1000 fps))

(def init-state
  {:d 0
   :t 0
   :vel 0
   :dv 0
   :prev {:d 0 :t 0 :dv 0 :vel 0 :graph-used "15"}
   :graph-used "15"})

(defn step-state [dt state]
  (let [cur-used-graph (:graph-used state)
        t (:t state)
        d (:d state)
        new-vel (velgraphs/vel-from-time t cur-used-graph) ;; As all will be reset on graph change, no point in using new-picked-graph here
        dv (- new-vel (:vel state))
        new-picked-graph (if velgraphs/diy-graph-active velgraphs/diy-graph (c/get-picked-graph))
        prev {:d d :t t :dv (:dv state) :vel (:vel state) :graph-used cur-used-graph}]
    (if (or (nil? new-vel) (not (= new-picked-graph cur-used-graph)))
      ;; If vel-from-time returns nil, it means the intervals have run.
      ;; If the current picked graph is different from the one before,
      ;; the path has been switched. In either case, start from beginning.
      {:d 0
       :t 0
       :vel new-vel
       :dv 0
       :prev {:d 0 :t 0 :vel 0 :dv 0 :graph-used cur-used-graph}
       :graph-used new-picked-graph}
      ;; Otherwise, update state
      {:d (+ d (velgraphs/vel-from-time t new-picked-graph))
       :t (+ t 30) ;; If `dt` were added, the graphs would get screwed up from the variation
       :vel new-vel
       :dv dv
       :prev prev
       :graph-used new-picked-graph})))

(def ctx (c/get-ctx c/canvas))
(def ctx-back (c/get-ctx c/canvas-back))
(c/fill-style! ctx-back "gray")

(defn render-ball! [state]
  (let [x (* (:t state) config/main-graph-t-scale)
        y (:d state)]
    (if (and (< y 0) (= (:graph-used state) "15"))
      (do
       (c/save! ctx)
       (c/translate! ctx x y)
       (c/scale! ctx (max 1 (/ (- y) 6)) 1)
       (c/begin! ctx)
       (c/circle! ctx (/ y 2) 0 10)
       (c/fill! ctx)
       (c/restore! ctx))
      (do
        (c/begin! ctx)
        (c/circle! ctx x y 10)
        (c/fill! ctx)))
    (c/begin! ctx-back)
    (c/circle! ctx-back x y 1)
    (c/fill! ctx-back)))

(defn render-canvas! [state]
 (c/clear-all! ctx)
 (render-ball! state)
 (let [t (:t state)
       prev-t (:t (:prev state))
       d (:d state)
       prev-d (:d (:prev state))
       vel (* 50 (:vel state))
       prev-vel (* 50 (:vel (:prev state)))
       dv (* 500 (:dv state))
       prev-dv (* 500 (:dv (:prev state)))]
   (if (not (= (:graph-used state) (:graph-used (:prev state))))
     (do (c/clear-all-graph-points!)
         (c/clear-ball-back-canvas!)))
   (c/draw-graph-point! c/d-graph-mid c/d-graph-front t d prev-t prev-d)
   (c/draw-graph-point! c/v-graph-mid c/v-graph-front t vel prev-t prev-vel)
   (c/draw-graph-point! c/a-graph-mid c/a-graph-front t dv prev-t prev-dv)))

(def paused-checkbox (c/by-id "paused"))
(set! (.-checked paused-checkbox) false)
(defn is-paused? []
  (.-checked paused-checkbox))

(defn init []
  (def state init-state)
  (runloop/start! framelength
    (fn [dt]
      (render-canvas! state)
      (if (not (is-paused?))
          (set! state (step-state dt state))))))

(c/setup-all-graphs!)

;; HANDLING CUSTOM-DRAWN GRAPHS:
;; I use a really ugly, naive approach here, because
;; time constraints have made it impractical to spend
;; the time necessary to learn core.async and the CLJS
;; conventions before writing this
(def user-drawing false)
(def diy-btn (c/by-id "diy-btn"))
(def diy-canvas (c/by-id "diy-canvas"))
(def diy-ctx (c/get-ctx diy-canvas))

(defn get-diy-canv-x []
  (.-left (.getBoundingClientRect diy-canvas)))
(defn get-diy-canv-y []
  (.-top (.getBoundingClientRect diy-canvas)))

(defn event-to-point-x [event]
  (let [relx (- (.-clientX event) (get-diy-canv-x))]
    (- relx 15)))
(defn event-to-point-y [event]
  (let [rely (- (.-clientY event) (get-diy-canv-y))]
    (- c/gheight rely -15)))

(defn vect-to-list-with-order [vect]
  (conj (rest vect) (first vect)))

(defn activate-created-graph [graph]
  (set! velgraphs/diy-graph (vect-to-list-with-order graph))
  (set! velgraphs/diy-graph-active true))

(defn mk-drawing-click-handler []
  (def last-click 0)
  (def graph [])
  (fn [event]
    (let [user-x (event-to-point-x event)
          user-y (event-to-point-y event)
          x (if (empty? graph)
              0 ;; First point must start at x=0
              (max (+ 3 (first last-click)) user-x))
          y user-y]
      (if (not (empty? graph))
        (do
          (c/begin! diy-ctx)
          (c/move-to! diy-ctx (first last-click) (second last-click))
          (c/line-to! diy-ctx x y)
          (c/stroke! diy-ctx)))
      (c/begin! diy-ctx)
      (c/circle! diy-ctx x y 3)
      (c/fill! diy-ctx)
      (set! last-click [x y])
      (set! graph
        (conj graph
              [(* 40 x)
               (/ y 17)]))
      (if (and (not (empty? (rest graph))) (empty? (rest (rest graph))))
        ;; When the second point is added, add the chrome to let the
        ;; user use the graph:
        (do
          (set! (.-innerHTML (c/by-id "diy-activate-container"))
            "<button id='activate-diy-graph'>Use this graph</button>")
          (set! (.-onclick (c/by-id "activate-diy-graph"))
            (fn []
              (activate-created-graph graph))))))))
(def dummy-ctx (c/get-ctx (js/document.createElement "canvas")))
(set! (.-onclick diy-btn)
  (fn []
    (set! user-drawing true)
    (set! (.-width diy-canvas) c/graphs-width)
    (set! (.-height diy-canvas) c/graphs-height)
    (c/setup-graph! diy-ctx dummy-ctx dummy-ctx "v" "Velocity")
    (set! (.-onclick diy-canvas) (mk-drawing-click-handler))))

(set! (.-onclick (c/by-id "presets-pulldown"))
  (fn []
    (set! velgraphs/diy-graph-active false)))





