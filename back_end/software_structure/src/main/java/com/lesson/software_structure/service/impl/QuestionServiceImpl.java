package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.QuestionMapper;
import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    private QuestionMapper questionMapper;

    @Override
    public void addQuestion(Question question) {
        questionMapper.add(question);
    }

    @Override
    public List<Question> getQuestionByIds(List<Long> ids) {
        return questionMapper.getQuestionByIds(ids);
    }

    @Override
    public void delQuestionByIds(List<Long> ids) {
        questionMapper.delQuestionByIds(ids);
    }
}
