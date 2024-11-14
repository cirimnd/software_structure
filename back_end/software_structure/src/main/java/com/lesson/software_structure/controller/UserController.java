package com.lesson.software_structure.controller;

import com.lesson.software_structure.pojo.Result;
import com.lesson.software_structure.pojo.User;
import com.lesson.software_structure.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Result login(@RequestBody User user) {
        User loggedInUser = userService.login(user.getUsername(), user.getPassword());
        if (loggedInUser != null) {
            return Result.success("登录成功");
        }
        return Result.error("用户不存在，登录失败");
    }

    @PostMapping("/register")
    public Result register(@RequestBody User user) {
        userService.registerUser(user);
        return Result.success("注册成功");
    }
}
