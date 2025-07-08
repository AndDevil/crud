package com.example.crud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.example.crud.model.User;
import com.example.crud.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repo;

    // Constructor injection
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // Fetch all users
    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // Fetch one user by ID
    public Optional<User> getUserById(String id) {
        return repo.findById(id);
    }

    // Create a new user
    public User createUser(User user) {
        return repo.save(user);
    }

    // Update an existing user
    public User updateUser(String id, User updated) {
        updated.setId(id);
        return repo.save(updated);
    }

    // Delete a user
    public void deleteUser(String id) {
        repo.deleteById(id);
    }
}
