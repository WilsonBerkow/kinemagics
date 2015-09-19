(ns kinemagics.runloop)

(defn now []
  (.now js/Date))

(def id nil)

(defn start! [dt func]
  (if (not id)
    (set! id
      (js/setInterval
        (do
          (def prev-time (now))
      (fn []
        (def cur-time (now))
            (func (- cur-time prev-time))
            (set! prev-time cur-time)))
        dt))))

(defn end! []
  (if id (js/clearInterval id)))
  