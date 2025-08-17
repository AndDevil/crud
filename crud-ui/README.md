CRUD API with Spring Boot, MongoDB & Kafka

This project is a full-stack backend application that demonstrates how to build a CRUD (Create, Read, Update, Delete) API using Spring Boot with MongoDB as the database and Apache Kafka for event-driven messaging.
It follows a clean layered architecture with Controller → Service → Repository and integrates Kafka for producing and consuming events on CRUD operations.


---

🚀 Features

CRUD Operations: Create, read, update, and delete records via RESTful APIs.

MongoDB Integration: Uses Spring Data MongoDB for seamless database operations.

Event-Driven Architecture: Publishes Kafka events on data changes (e.g., when a record is created or updated).

Kafka Consumer: Listens to Kafka topics for processing or logging events.

Layered Architecture: Follows Controller → Service → Repository structure for maintainability.

Configuration Management: Centralized config/ package for Kafka and other app-level settings.



---

🛠 Tech Stack

Java 17

Spring Boot 3

Spring Web (REST APIs)

Spring Data MongoDB

Spring Kafka

Lombok

Maven



---

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/AndDevil/crud-kafka.git  
cd crud-kafka  
  
2. Configure MongoDB  
  
Update your application.properties file with MongoDB connection details:  
  
spring.data.mongodb.uri=mongodb://localhost:27017/cruddb  
spring.kafka.bootstrap-servers=localhost:9092  
  
3. Run Kafka & MongoDB  
  
Make sure Kafka and MongoDB are running locally:  
  
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
  
POST	/api/items	Create new item  
GET	/api/items	Get all items  
PUT	/api/items/{id}	Update item by ID  
DELETE	/api/items/{id}	Delete item by ID  
  
  
All actions produce Kafka events to notify other services or log changes.  
  
  
---  
  
📝 Example Item JSON  
  
{  
  "name": "Laptop",  
  "quantity": 5  
}  
  
  
---  
  
🔔 Event Flow  
  
1. API request triggers a Controller.  
  
  
2. Controller calls Service to handle business logic.  
  
  
3. Service updates MongoDB via Repository.  
  
  
4. Service publishes an event to Kafka (e.g., item-created).  
  
  
5. Kafka Consumer listens and processes/logs the event.  
  
  
  
  
---  
  
🤝 Contributing  
  
Contributions are welcome! Feel free to open issues or submit PRs.  
  
  
---  
  
📄 License  
  
This project is licensed under the MIT License.



---

👨‍💻 Author

Shrish Kumar

GitHub: AndDevil

LinkedIn: Shrish Kumar
