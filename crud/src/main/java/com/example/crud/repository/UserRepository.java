package com.example.crud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.crud.model.User;

// The first generic parameter is your domain type, the second is the ID type
public interface UserRepository extends MongoRepository<User, String> {
    // You can add custom finder methods here, for example:
    // List<User> findByName(String name);
}
