(require 'cljs.build.api)
(cljs.build.api/build "src"
  {:main 'kinemagics.core
   :output-to "out/main.js"})