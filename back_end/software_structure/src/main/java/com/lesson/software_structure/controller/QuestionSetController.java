package com.lesson.software_structure.controller;

import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import com.lesson.software_structure.service.QuestionBankService;
import com.lesson.software_structure.service.QuestionService;
import com.lesson.software_structure.service.QuestionSetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questionSets")
public class QuestionSetController {
    @Autowired
    private QuestionSetService questionSetService;
    @Autowired
    private QuestionService questionService;

    // 获取所有题库信息
    @GetMapping("/all")
    public List<QuestionSet> getAllQuestionSets() {
        return questionSetService.getAllQuestionSets();
    }

    // 根据id获取特定题库信息及对应的套题信息
    @GetMapping("/{id}")
    public QuestionSet getQuestionSetByIdWithQuestions(@PathVariable Long id) {
        QuestionSet questionSet = questionSetService.getQuestionSetById(id);
        if (questionSet!= null) {
            List<Question> questions = questionSetService.getQuestionIdsByQuestionSetId(id);
            questionSet.setQuestions(questions);
        }
        return questionSet;
    }
}
