(require 'cljs.build.api)
(cljs.build.api/build "src"
  {:main 'kinematics1d.core
   :output-to "out/main.js"})