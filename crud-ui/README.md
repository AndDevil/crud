📦 CRUD API with Spring Boot, MongoDB & Kafka

This project is a backend application that demonstrates how to build a CRUD (Create, Read, Update, Delete) API using Spring Boot, with MongoDB as the database and Apache Kafka for event-driven messaging.

It follows a clean layered architecture:
Controller → Service → Repository,
and integrates Kafka to publish and consume events on CRUD operations.

🚀 Features

CRUD Operations – Create, read, update, and delete records via REST APIs.

MongoDB Integration – Powered by Spring Data MongoDB for seamless database handling.

Event-Driven Architecture – Publishes Kafka events on record changes (create/update/delete).

Kafka Consumer – Listens to topics and processes/logs events.

Layered Architecture – Clean separation of concerns with Controller → Service → Repository.

Centralized Config – Easy configuration for Kafka, MongoDB, and app-level settings.

🛠 Tech Stack

Java 17

Spring Boot 3 (Web, Data MongoDB, Kafka)

Apache Kafka

MongoDB

Lombok

Maven

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/AndDevil/crud-kafka.git  
cd crud-kafka  

2. Configure MongoDB & Kafka

Update your application.properties:

spring.data.mongodb.uri=mongodb://localhost:27017/cruddb  
spring.kafka.bootstrap-servers=localhost:9092  

3. Run Kafka & MongoDB

Start required services:

# Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties  

# Start Kafka
bin/kafka-server-start.sh config/server.properties  

# Start MongoDB
mongod  

4. Run the Application
mvn spring-boot:run  

📡 API Endpoints
Method	Endpoint	Description
POST	/api/items	Create new item
GET	/api/items	Get all items
PUT	/api/items/{id}	Update item by ID
DELETE	/api/items/{id}	Delete item by ID

👉 All CRUD actions produce Kafka events for notification or logging.

📝 Example JSON
{
  "name": "Laptop",
  "quantity": 5
}

🔔 Event Flow

Client sends API request → Controller.

Controller delegates to Service.

Service updates MongoDB via Repository.

Service publishes a Kafka event (e.g., item-created).

Kafka Consumer listens & processes/logs the event.

🤝 Contributing

Contributions are welcome 🎉

Fork the repo

Create a feature branch

Submit a Pull Request

📄 License

Licensed under the MIT License.

👨‍💻 Author

Shrish Kumar

GitHub: AndDevil

LinkedIn: Shrish Kumar
