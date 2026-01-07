-- Active: 1766419843621@@127.0.0.1@5433@auto
CREATE TABLE cars(
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  price INT not NULL,
  year VARCHAR(20)
)

CREATE TABLE customers(
  id SERIAL PRIMARY KEY,
  fullName VARCHAR(20) NOT NULL,
  contact VARCHAR(13) NOT NULL UNIQUE
)

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  car_id int REFERENCES cars(id),
  customer_id int REFERENCES customers(id),
  start_date VARCHAR(10) not NULL,
  end_date VARCHAR(10) not NULL ,
  month_count int NOT NULL,

  created_at TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
)

DROP TABLE orders;
CREATE TABLE payments(
  id SERIAL PRIMARY KEY,
  order_id int REFERENCES orders(id),
  amount int NOT NULL,
  created_at TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
)

DROP TABLE payments;

SELECT * FROM payments;
