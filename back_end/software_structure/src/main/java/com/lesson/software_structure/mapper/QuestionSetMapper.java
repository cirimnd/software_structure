package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface QuestionSetMapper {

    QuestionSet getQuestionSetById(Long id);

    // 根据question_set_id列表获取对应的套题信息列表
    List<QuestionSet> getQuestionSetsByIds(List<Long> questionSetIds);

    //根据套题id获取其下所有关联的问题信息
    List<Question> getQuestionIdsByQuestionSetId(Long id);


    //获取所有题集信息
    List<QuestionSet> getAllQuestionSets();
}
