package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM Users WHERE username = #{username}")
    User findUserByUsername(@Param("username") String username);

    void insertUser(User user);
}
