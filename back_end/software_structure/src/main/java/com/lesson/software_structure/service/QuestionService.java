package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.Question;

import java.util.List;

public interface QuestionService {
    void addQuestion(Question question);

    List<Question> getQuestionByIds(List<Long> ids);

    void delQuestionByIds(List<Long> ids);
}
