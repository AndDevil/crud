# 📦 CRUD API with Spring Boot, MongoDB & Kafka

This project is a **backend application** that demonstrates how to build a **CRUD (Create, Read, Update, Delete) API** using **Spring Boot**, with **MongoDB** as the database and **Apache Kafka** for event-driven messaging.

It follows a clean layered architecture:  
**Controller → Service → Repository**  
and integrates Kafka to publish and consume events on CRUD operations.

---

## 🚀 Features
- **CRUD Operations** – Create, read, update, and delete records via REST APIs.
- **MongoDB Integration** – Powered by Spring Data MongoDB for seamless database handling.
- **Event-Driven Architecture** – Publishes Kafka events on record changes (create/update/delete).
- **Kafka Consumer** – Listens to topics and processes/logs events.
- **Layered Architecture** – Clean separation of concerns with Controller → Service → Repository.
- **Centralized Config** – Easy configuration for Kafka, MongoDB, and app-level settings.

---

## 🛠 Tech Stack
- **Java 17**
- **Spring Boot 3** (Web, Data MongoDB, Kafka)
- **Apache Kafka**
- **MongoDB**
- **Lombok**
- **Maven**

---

## ⚙️ Installation & Setup
Perfect, Shrish 👍
Here’s a fresh rewrite of your README from ## ⚙️ Installation & Setup to the end, so you can drop it into a new .md file if you want a shorter version focusing on setup and usage.


---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AndDevil/crud-kafka.git
cd crud-kafka

2. Configure MongoDB & Kafka

Add your MongoDB and Kafka configurations in application.properties:

spring.data.mongodb.uri=mongodb://localhost:27017/cruddb
spring.kafka.bootstrap-servers=localhost:9092

3. Start Required Services

Make sure both Kafka and MongoDB are running before starting the app:

# Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

# Start Kafka
bin/kafka-server-start.sh config/server.properties

# Start MongoDB
mongod

4. Run the Application

mvn spring-boot:run


---

📡 API Endpoints

Method	Endpoint	Description

POST	/api/items	Create a new item
GET	/api/items	Fetch all items
PUT	/api/items/{id}	Update an item
DELETE	/api/items/{id}	Delete an item


👉 Every CRUD action also triggers a Kafka event that can be consumed for logging, monitoring, or extending functionality.


---

📝 Sample Request

{
  "name": "Laptop",
  "quantity": 5
}


---

🔔 How It Works

1. Client sends an HTTP request to a Controller.


2. The Controller delegates processing to a Service.


3. The Service interacts with MongoDB through a Repository.


4. After database action, the Service publishes an event to Kafka.


5. A Kafka Consumer listens to the event and processes/logs it.




---

🤝 Contributing

Contributions are always welcome 🎉

Steps to contribute:

1. Fork this repository


2. Create a new feature branch


3. Commit your changes


4. Open a Pull Request




---

📄 License

This project is licensed under the MIT License.


---

👨‍💻 Author

Shrish Kumar

GitHub: AndDevil

LinkedIn: Shrish Kumar

