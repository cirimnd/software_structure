package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;

import java.util.List;

public interface QuestionSetService {
    QuestionSet getQuestionSetById(Long id);//
    List<QuestionSet> getAllQuestionSets();//获取所有套题的基本信息列表


    List<Question> getQuestionIdsByQuestionSetId(Long id);//

    boolean deleteQuestionSetById(Long id);//根据id删除套题

    Long addQuestionSet(QuestionSet questionSet);//会返回新增套题的id




}
