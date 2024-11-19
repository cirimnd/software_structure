package com.lesson.software_structure.controller;

import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import com.lesson.software_structure.service.QuestionBankService;
import com.lesson.software_structure.service.QuestionSetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questionBanks")
public class QuestionBankController {
    @Autowired
    private QuestionBankService questionBankService;
    @Autowired
    private QuestionSetService questionSetService;

    // 获取所有题库信息
    @GetMapping("/all")
    public List<QuestionBank> getAllQuestionBanks() {
        return questionBankService.getAllQuestionBanks();
    }

    // 根据id获取特定题库信息及对应的套题信息
    @GetMapping("/{id}")
    public QuestionBank getQuestionBankByIdWithSets(@PathVariable Long id) {
        QuestionBank questionBank = questionBankService.getQuestionBankById(id);
        if (questionBank!= null) {
            List<QuestionSet> questionSets = questionBankService.getQuestionSetIdsByQuestionBankId(id);
            questionBank.setQuestionSets(questionSets);
        }
        return questionBank;
    }

}
