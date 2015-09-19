(require 'cljs.build.api)
(cljs.build.api/watch "src"
  {:main 'kinemagics.core
   :output-to "out/main.js"})