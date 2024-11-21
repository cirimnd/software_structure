package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;

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

    @Insert("INSERT INTO question_sets (question_bank_id, title, description) " +
            "VALUES (#{questionBankId}, #{title}, #{description})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int addQuestionSet(QuestionSet questionSet);

    // 删除指定ID的套题
    @Delete("DELETE FROM question_sets WHERE id = #{id}")
    int deleteQuestionSetById(Long id);


}
