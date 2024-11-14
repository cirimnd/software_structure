package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.Question;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface QuestionMapper {

    @Insert("insert into software_structure.question (question_text, correct_answer) VALUES " +
            "(#{questionText},#{shortAnswer})")
    void add(Question question);

    List<Question> getQuestionByIds(List<Long> ids);

    void delQuestionByIds(List<Long> ids);
}
