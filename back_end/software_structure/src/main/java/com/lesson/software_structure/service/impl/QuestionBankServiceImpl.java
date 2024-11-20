package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.QuestionBankMapper;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import com.lesson.software_structure.service.QuestionBankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionBankServiceImpl implements QuestionBankService {
    @Autowired
    private QuestionBankMapper questionBankMapper;

    @Override
    public List<QuestionBank> getAllQuestionBanks() {
        return questionBankMapper.getAllQuestionBanks();
    }

    @Override
    public QuestionBank getQuestionBankById(Long id) {
        return questionBankMapper.getQuestionBankById(id);
    }
    @Override
    public List<QuestionSet> getQuestionSetIdsByQuestionBankId(Long id) {
        return questionBankMapper.getQuestionSetIdsByQuestionBankId(id);
    }
}
