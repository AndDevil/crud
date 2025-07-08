package com.example.crud.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class HomeController {

    // Option A: Redirect to the API
//    @GetMapping("/")
//    public RedirectView home() {
//        return new RedirectView("/api/users");
//    }

    // Option B: Return a simple text
    @ResponseBody
    @GetMapping("/")
     public String homeText() {
         return "Welcome! Use /api/users to interact with the CRUD API.";
     }
}
