package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.QuestionBankMapper;
import com.lesson.software_structure.mapper.QuestionSetMapper;
import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import com.lesson.software_structure.service.QuestionSetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionSetServiceImpl implements QuestionSetService {
    @Autowired
    private QuestionSetMapper questionSetMapper;

    @Override
    public List<QuestionSet> getAllQuestionSets() {
        return questionSetMapper.getAllQuestionSets();
    }

    @Override
    public QuestionSet getQuestionSetById(Long id) {
        return questionSetMapper.getQuestionSetById(id);
    }
    @Override
    public List<Question> getQuestionIdsByQuestionSetId(Long id) {
        return questionSetMapper.getQuestionIdsByQuestionSetId(id);
    }
}
