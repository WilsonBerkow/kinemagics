(ns kinemagics.velgraphs
  (:require [kinemagics.canvas-util :as c]))

(def wkst-graph-13
 (list [0 3] [5000 3]))

(def wkst-graph-14
  (list [0 4]
        [5000 -4]))

(def wkst-graph-15
  (list [0 5]
        [3000 -5]
        [(+ 250 3000) 4]
        [(+ 2400 250 3000) -4]
        [(+ 250 2400 250 3000) 3]
        [(+ 1800 250 2400 250 3000) -3]
        ))

(def wkst-graph-16
  (let [vel0 0.7
        vel1 1.4
        vel2 2.1
        vel3 2.8]
    (list [0 0]
          [1000 vel0]
          [2250 vel0]
          
          [3250 vel1]
          [4500 vel1]
          
          [5500 vel2]
          [6750 vel2])))

(defn singleton? [L]
  (and (not (empty? L)) (empty? (rest L))))

(defn has-two? [L]
  (and (not (empty? L))
       (not (singleton? L))))


(defn t-fits-between [t interval0 interval1]
  (let [t-min (first interval0) t-max (first interval1)]
    (<= t-min t t-max)))

(defn vel-from-two-intervals [t interval0 interval1]
  (let [t-min (first interval0)
        t-max (first interval1)
        v0 (second interval0)
        v1 (second interval1)
        time-into-interval (- t t-min)
        interval-length (- t-max t-min)
        progress-thru-interval (/ time-into-interval interval-length)
        slope (/ (- v1 v0) interval-length)]
    (+ (* slope time-into-interval) v0)))
    ;;(* progress-thru-interval (+ v0 v1))))

(defn vel-from-intervals [t intervals]
  (if (has-two? intervals)
    (if (t-fits-between t (first intervals) (second intervals))
      (vel-from-two-intervals t (first intervals) (second intervals))
      (vel-from-intervals t (rest intervals)))
    nil ;; In this case, the graph has run to its end, and the animation should restart
    ))

(def diy-graph nil) ;; Set from layout.cljs

(def diy-graph-active false)

(defn vel-from-time [t graph-to-use]
  (vel-from-intervals t
    (if diy-graph-active
      diy-graph
      (if (= graph-to-use "13")
        wkst-graph-13
        (if (= graph-to-use "14")
          wkst-graph-14
          (if (= graph-to-use "15")
            wkst-graph-15
            wkst-graph-16))))))







