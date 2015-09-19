(require 'cljs.build.api)
(cljs.build.api/watch "src"
  {:main 'kinematics1d.core
   :output-to "out/main.js"})