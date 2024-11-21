package com.lesson.software_structure.controller;

import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.Result;
import com.lesson.software_structure.service.QuestionService;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ques")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @PostMapping("/add")
    public Result addQuestion(@RequestBody Question question) {
        questionService.addQuestion(question);
        return Result.success("创建问题成功");
    }

    @GetMapping("/{ids}")
    public Result getQuestionByIds(@PathVariable List<Long> ids) {
        List<Question> question=questionService.getQuestionByIds(ids);
        if(!question.isEmpty()) {
            return Result.success(question);
        }
        return Result.error("问题不存在");
    }

    @DeleteMapping("/{ids}")
    public Result delQuestionByIds(@PathVariable List<Long> ids) {
        questionService.delQuestionByIds(ids);
        return Result.success("删除成功");
    }

    @PutMapping("/change")
    public Result chaQuestionByIds(@RequestBody Question questions,@PathVariable List<Long> ids)
    {
        questionService.changeQuestionByIds(questions,ids);
        return  Result.success("修改成功");

    }


}
