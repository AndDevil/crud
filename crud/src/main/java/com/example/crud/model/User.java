package com.example.crud.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// If you added Lombok, you can use @Data; otherwise generate getters/setters manually
import lombok.Data;

@Document(collection = "users")
@Data
public class User {
    @Id
    private String id;

    private String name;
    private String email;

    // No-arg constructor (Lombok will generate if you use @NoArgsConstructor)
    // public User() {}

    // All-args constructor, getters/setters, toString, etc. (Lombok @Data covers these)
}
