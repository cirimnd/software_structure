package com.lesson.software_structure.mapper;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QuestionBankMapper {
    // 获取所有题库信息
    List<QuestionBank> getAllQuestionBanks();

    // 根据id获取特定题库信息
    QuestionBank getQuestionBankById(Long id);

    // 根据题库id获取其下所有关联的question_set_id
    List<QuestionSet> getQuestionSetIdsByQuestionBankId(Long id);
}
