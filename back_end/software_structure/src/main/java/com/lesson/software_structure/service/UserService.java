package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.User;

public interface UserService {
    User login(String username, String password,String role);

    void registerUser(User user);

    User findUserByUsername(String username);
}
