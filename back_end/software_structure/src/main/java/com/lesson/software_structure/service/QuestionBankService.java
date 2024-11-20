package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;

import java.util.List;

public interface QuestionBankService {
    List<QuestionBank> getAllQuestionBanks();
    QuestionBank getQuestionBankById(Long id);
    List<QuestionSet> getQuestionSetIdsByQuestionBankId(Long id);
}
