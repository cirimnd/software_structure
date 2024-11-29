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
    public User login(String username, String password,String role) {
        User user = userMapper.findUserByUsername(username);
        if (user != null && user.getPassword().equals(password)&&user.getRole().equals(role)) {
            return user;
        }
        else if(user!=null&&!user.getPassword().equals(password)){
            user.setUsername("0");
            return user;
        }
        return null;
    }

    @Override
    public void registerUser(User user) {
        userMapper.insertUser(user);
    }

    @Override
    public User findUserByUsername(String username) {
        return userMapper.findUserByUsername(username);
    }
}
