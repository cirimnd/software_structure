package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;

import java.util.List;

public interface QuestionSetService {
    QuestionSet getQuestionSetById(Long id);
    List<QuestionSet> getAllQuestionSets();


    List<Question> getQuestionIdsByQuestionSetId(Long id);
}
