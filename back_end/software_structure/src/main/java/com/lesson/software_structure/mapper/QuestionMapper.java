package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.Question;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface QuestionMapper {

    @Insert("insert into question (question_text, correct_answer) VALUES " +
            "(#{questionText},#{correctAnswer})")
    void add(Question question);


//11月20下午，陈宇兆进行编写以及修改
    @Select({
            "<script>",
            "SELECT * FROM question WHERE id IN ",
            "<foreach item='id' collection='list' open='(' separator=',' close=')'>",//查询返回问题。可批量
            "#{id}",
            "</foreach>",
            "</script>"
    })
    List<Question> getQuestionByIds(@Param("list") List<Long> ids);

//    @Select("SELECT * FROM question WHERE id = #{id}")
//    List<Question> getQuestionByIds(List<Long> ids);

    @Update({
            "<script>",
            "UPDATE question",
            "<set>",
            "<if test='question.questionText != null'>question_text = #{question.questionText},</if>",
            "<if test='question.correctAnswer != null'>correct_answer = #{question.correctAnswer},</if>",
            "<if test='question.questionSetId != null'>question_set_id = #{question.questionSetId}</if>",
            "</set>",
            "WHERE id IN",
            "<foreach collection='ids' item='id' open='(' separator=',' close=')'>",
            "#{id}",
            "</foreach>",
            "</script>"
    })
    void changeQuestionByIds(@Param("question") Question question, @Param("ids") List<Long> ids);

//    @Delete("DELETE FROM question WHERE id = #{id}")
//    void delQuestionByIds(List<Long> ids);
@Delete({
        "<script>",
        "DELETE FROM question WHERE id IN",
        "<foreach item='id' collection='list' open='(' separator=',' close=')'>",
        "#{id}",
        "</foreach>",
        "</script>"
})
void delQuestionByIds(@Param("list") List<Long> ids);
}
