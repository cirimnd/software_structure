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
        User loggedInUser = userService.login(user.getUsername(), user.getPassword(),user.getRole());
        if(user.getRole()==null|| user.getRole().isEmpty()){
            return Result.error("请输入角色");
        }
        else if(user.getPassword()==null|| user.getPassword().isEmpty()){
            return Result.error("请输入密码");
        }
        else if(user.getUsername()==null|| user.getUsername().isEmpty()){
            return Result.error("请输入用户名");
        }
        else if(loggedInUser==null){
            return Result.error("用户不存在");
        }
        else if (loggedInUser.getUsername().equals("0")) {
            return Result.error("密码错误，请重新输入！");
        }
        else{
            return Result.error("登录失败");
        }
    }

    @PostMapping("/register")
    public Result register(@RequestBody User user) {
        if(user.getPassword()==null|| user.getPassword().isEmpty())
        {
            return Result.error("密码为空");
        }
        if(user.getUsername()==null|| user.getUsername().isEmpty())
        {
            return Result.error("用户名为空");
        }
        User userIn = userService.findUserByUsername(user.getUsername());
        if(userIn!=null){
            return Result.error("用户已存在");
        }
        userService.registerUser(user);
        return Result.success("注册成功");
    }
}
