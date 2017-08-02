(ns api.server
  (:gen-class) ; for -main method in uberjar
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [io.pedestal.http :as server]
            [io.pedestal.http.route :as route]
            [com.walmartlabs.lacinia.pedestal :as lacinia]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.util :as util]))

(defn ^:private resolve-hello
  [context args value]
  "Hello, Clojurians!")

(def hello-schema
  (schema/compile
    {:queries
      {:hello
        {:type 'String
         :resolve resolve-hello}}}))


; (defn ^:private hello-schema
;   (-> "resources/hello-world-schema.edn"
;       io/resource
;       slurp
;       edn/read-string
;       (util/attach-resolvers {:resolve-hello resolve-hello})
;       schema/compile))

(def ^:private hello-schema-two
  (schema/compile
    (util/attach-resolvers
      (edn/read-string (slurp (io/resource "hello-world-schema.edn")))
      {:resolve-hello resolve-hello})))

(def service (lacinia/pedestal-service hello-schema-two {:graphiql true}))

;; This is an adapted service map, that can be started and stopped
;; From the REPL you can call server/start and server/stop on this service
(defonce runnable-service (server/create-server service))

; (defn run-dev
;   "The entry-point for 'lein run-dev'"
;   [& args]
;   (println "\nCreating your [DEV] server...")
;   (-> service/service ;; start with production configuration
;       (merge {:env :dev
;               ;; do not block thread that starts web server
;               ::server/join? false
;               ;; Routes can be a function that resolve routes,
;               ;;  we can use this to set the routes to be reloadable
;               ::server/routes #(route/expand-routes (deref #'service/routes))
;               ;; all origins are allowed in dev mode
;               ::server/allowed-origins {:creds true :allowed-origins (constantly true)}})
;       ;; Wire up interceptor chains
;       server/default-interceptors
;       server/dev-interceptors
;       server/create-server
;       server/start))

(defn -main
  "The entry-point for 'lein run'"
  [& args]
  (println "\nCreating your server...")
  (server/start runnable-service))

;; If you package the service up as a WAR,
;; some form of the following function sections is required (for io.pedestal.servlet.ClojureVarServlet).

;;(defonce servlet  (atom nil))
;;
;;(defn servlet-init
;;  [_ config]
;;  ;; Initialize your app here.
;;  (reset! servlet  (server/servlet-init service/service nil)))
;;
;;(defn servlet-service
;;  [_ request response]
;;  (server/servlet-service @servlet request response))
;;
;;(defn servlet-destroy
;;  [_]
;;  (server/servlet-destroy @servlet)
;;  (reset! servlet nil))
