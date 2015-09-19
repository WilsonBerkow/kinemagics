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
        new-picked-graph (c/get-picked-graph)
        prev {:d d :t t :dv (:dv state) :vel (:vel state) :graph-used cur-used-graph}]
    (if (or (nil? new-vel) (not (= new-picked-graph cur-used-graph)))
      ;; If vel-from-time returns nil, it means the intervals have run.
      ;; If the current picked graph is different from the one before,
      ;; the path has been switched. In either case, start from beginning.
      {:d 0
       :t 0
       :vel new-vel
       :dv 0
       :prev init-state
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
    (c/begin! ctx)
    (c/circle! ctx x y 10)
    (c/fill! ctx)
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