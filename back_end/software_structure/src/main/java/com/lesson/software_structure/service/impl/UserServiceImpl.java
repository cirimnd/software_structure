package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.UserMapper;
import com.lesson.software_structure.pojo.User;
import com.lesson.software_structure.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public User login(String username, String password) {
        User user = userMapper.findUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    @Override
    public void registerUser(User user) {
        userMapper.insertUser(user);
    }
}
