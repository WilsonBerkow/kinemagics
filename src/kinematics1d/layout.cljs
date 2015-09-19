(ns kinematics1d.layout
  (:require [kinematics1d.runloop :as runloop]
            [kinematics1d.canvas-util :as c]
            [kinematics1d.velgraphs :as velgraphs]
            [kinematics1d.config :as config]))

(enable-console-print!)

(def fps 40)

(def framelength (/ 1000 fps))

(def init-state
  {:d 0
   :t 0
   :vel 0
   :dv 0
   :prev {:d 0 :t 0 :dv 0 :vel 0}})

(defn step-state [dt state]
  (let [t (:t state)
        d (:d state)
        new-vel (velgraphs/vel-from-time t)
        dv (- new-vel (:vel state))
        prev {:d d :t t :dv (:dv state) :vel (:vel state)}]
    (if (nil? new-vel)
      {:d 0 ;; If vel-from-time returns nil,
       :t 0 ;; it means the intervals have run,
       :vel new-vel ;; so start from beginning.
       :dv 0
       :prev prev}
      {:d (+ d (velgraphs/vel-from-time t))
       :t (+ t 30) ;; If I added `dt`, the graphs would get screwed up from the variation
       :vel new-vel
       :dv dv
       :prev prev})))

(def ctx (c/get-ctx c/canvas))

(defn render-ball! [state]
  (c/begin! ctx)
  (c/circle! ctx
             (* (:t state) config/main-graph-t-scale)
             (:d state)
             10)
  (c/fill! ctx))

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
   (c/draw-graph-point! c/d-graph-mid c/d-graph-front t d prev-t prev-d)
   (c/draw-graph-point! c/v-graph-mid c/v-graph-front t vel prev-t prev-vel)
   (c/draw-graph-point! c/a-graph-mid c/a-graph-front t dv prev-t prev-dv)))

(def paused-checkbox (c/by-id "paused"))
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