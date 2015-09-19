(ns kinemagics.canvas-util
  (:require [kinemagics.config :as config]))

(def deg360 (* 2 js/Math.PI))

(defn by-id [id] (.getElementById js/document id))
(defn get-ctx [canvas] (.getContext canvas "2d"))
(defn get-canv-width [canvas] (.getAttribute canvas "width"))
(defn get-canv-height [canvas] (.getAttribute canvas "height"))
(defn get-ctx-width [ctx] (get-canv-width (.-canvas ctx)))
(defn get-ctx-height [ctx] (get-canv-height (.-canvas ctx)))

(def canvas (by-id "canvas"))
(def width (get-canv-width canvas))
(def height (get-canv-height canvas))

(defn x-pos [ctx x]
  (+ x 10))
(defn y-pos [ctx y]
  (- (get-ctx-height ctx) y 10))


;; Single-call painting functions:
(defn fill-rect! [ctx x y w h]
  (.fillRect ctx (x-pos ctx x) (y-pos ctx y) w h))

(defn stroke-rect! [ctx x y w h]
  (.strokeRect ctx (x-pos ctx x) (y-pos ctx y) w h))

(defn clear-rect! [ctx x y w h]
  (.clearRect ctx (x-pos ctx x) (y-pos ctx y) w h))

(defn clear-all! [ctx]
  (.clearRect ctx 0 0 (get-ctx-width ctx) (get-ctx-height ctx)))

(defn fill-text! [ctx x y text]
  (.fillText ctx text (x-pos ctx x) (y-pos ctx y)))

;;(defn fill-all-clr! [ctx clr]
;;  (save!)
;;  (fill-style! clr)
;;  (.fillRect ctx 0 0 width height)
;;  (restore!))

;; Path closers:
(defn begin! [ctx] (.beginPath ctx))

(defn fill! [ctx] (.fill ctx))

(defn stroke! [ctx] (.stroke ctx))

;; Path drawing functions:
(defn move-to! [ctx x y]
  (.moveTo ctx (x-pos ctx x) (y-pos ctx y)))

(defn line-to! [ctx x y]
  (.lineTo ctx (x-pos ctx x) (y-pos ctx y)))

(defn arc! [ctx x y radius ang0 ang1 anticlock]
  (.arc ctx (x-pos ctx x) (y-pos ctx y) radius ang0 ang1 anticlock))

(defn circle! [ctx x y radius]
  (arc! ctx x y radius 0 deg360 nil))

(defn close-path! [ctx]
  (.closePath ctx))

(defn triangle! [ctx x0 y0 x1 y1 x2 y2]
  (move-to! ctx x0 y0)
  (line-to! ctx x1 y1)
  (line-to! ctx x2 y2)
  (close-path! ctx))

;; State manipulation:
(defn save! [ctx] (.save ctx))

(defn restore! [ctx] (.restore ctx))

(defn fill-style! [ctx val]
  (set! (.-fillStyle ctx) val))

(defn stroke-style [ctx val]
  (set! (.-strokeStyle ctx) val))

(defn line-width! [ctx val]
  (set! (.-lineWidth ctx) val))

(defn font! [ctx val]
  (set! (.-font ctx) val))

(defn translate! [ctx x y]
  (.translate ctx x (- y)))

(defn scale! [ctx xscale yscale]
  (.scale ctx xscale yscale))

;; GRAPH DRAWING HELPERS:

(def d-graph-canvas (by-id "d-graph"))
(def v-graph-canvas (by-id "v-graph"))
(def a-graph-canvas (by-id "a-graph"))

(def d-graph (get-ctx d-graph-canvas))
(def v-graph (get-ctx v-graph-canvas))
(def a-graph (get-ctx a-graph-canvas))

(def d-graph-mid (get-ctx (by-id "d-graph-mid")))
(def v-graph-mid (get-ctx (by-id "v-graph-mid")))
(def a-graph-mid (get-ctx (by-id "a-graph-mid")))

(def d-graph-front (get-ctx (by-id "d-graph-front")))
(def v-graph-front (get-ctx (by-id "v-graph-front")))
(def a-graph-front (get-ctx (by-id "a-graph-front")))

(def graphs-width (get-canv-width d-graph-canvas))
(def graphs-height (get-canv-height d-graph-canvas))

(def gwidth (- graphs-width 20)) ;; Account for built-in margin
(def gheight (/ (- graphs-height 20) 2))

(defn setup-graph! [ctx ctx-mid ctx-front y-label title]
  (translate! ctx 0 gheight)
  (translate! ctx-mid 0 gheight)
  (fill-style! ctx-front "red")
  (translate! ctx-front 0 gheight)
  (begin! ctx)
  (triangle! ctx
             0 gheight
             2 (- gheight 5)
             -2 (- gheight 5))
  (move-to! ctx 0 (- gheight 5))
  (line-to! ctx 0 (- (- gheight) 5))
  (triangle! ctx
             0 (- gheight)
             -2 (- (- gheight) 5)
             2 (- (- gheight) 5))
  (move-to! ctx 0 0)
  (line-to! ctx gwidth 0)
  (triangle! ctx
             gwidth 0
             (- gwidth 5) 2
             (- gwidth 5) -2)
  (stroke! ctx)
  (font! ctx "italic 15px Times New Roman")
  (fill-text! ctx 6 (- gheight 3) y-label)
  (fill-text! ctx (+ gwidth 2) -4 "t")
  (font! ctx "italic 18px Times New Roman")
  (fill-text! ctx 30 (- gheight 15) title))

(defn setup-all-graphs! []
  (setup-graph! d-graph d-graph-mid d-graph-front "d" "Displacement")
  (setup-graph! v-graph v-graph-mid v-graph-front "v" "Velocity")
  (setup-graph! a-graph a-graph-mid a-graph-front "a" "Acceleration"))

(defn point! [ctx x y r]
  (begin! ctx)
  (circle! ctx x y r)
  (fill! ctx))

(defn draw-graph-point! [ctx-mid ctx-front time mag prev-time prev-mag]
  (let [x (* time (/ gwidth (/ width config/main-graph-t-scale)))
        y (* mag (/ gheight height))
        prev-x (* prev-time (/ gwidth (/ width config/main-graph-t-scale)))
        prev-y (* prev-mag (/ gheight height))]
    (clear-rect! ctx-front -10 gheight (* 2 graphs-width) (* 2 graphs-height))
    (point! ctx-front x y 3)
    (point! ctx-mid prev-x prev-y 1)
    ))
;;



