package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.QuestionBankQuestionSet;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface QuestionBankQuestionSetMapper {

    void addQuestionBankQuestionSet(QuestionBankQuestionSet questionBankQuestionSet);
}
