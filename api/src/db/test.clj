(use 'korma.db)
(defdb db (postgres {:db "gamell"
                     :user "gamell"
                     :password ""}))

(use 'korma.core)
(defentity users)

(select users)
;; executes: SELECT * FROM users

(select users
  (fields :username :id))
;; executes: SELECT users.username, users.id FROM users

(select users
  (where {:username "chris"}))
;; executes: SELECT * FROM users WHERE (users.username = 'chris')

(select users
  (where {:active true})
  (order :created)
  (limit 5)
  (offset 3))
;; executes: SELECT * FROM users WHERE (users.active = TRUE) ORDER BY users.created DESC LIMIT 5 OFFSET 3

(select users
  (where (or (= :username "chris")
             (= :email "chris@chris.com"))))
;; executes: SELECT * FROM users WHERE (users.username = 'chris' OR users.email = 'chris@chris.com')

(select users
  (where {:username [like "chris"]
          :status "active"
          :location [not= nil]}))
;; executes SELECT * FROM users WHERE (users.username LIKE 'chris' AND users.status = 'active' AND users.location IS NOT NULL)

(select users
  (where (or {:username "chris"
              :first "chris"}
             {:email [like "%@chris.com"]})))
;; executes: SELECT * FROM users WHERE ((users.username = 'chris' AND users.first = 'chris') OR users.email LIKE '%@chris.com)'


(defentity address
 (entity-fields :street :city :zip))

(defentity users
 (has-one address))

(select users
 (with address))
;; SELECT address.street, address.city, address.zip FROM users LEFT JOIN address ON users.id = address.users_id
