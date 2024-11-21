package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.QuestionBankMapper;
import com.lesson.software_structure.mapper.QuestionSetMapper;
import com.lesson.software_structure.pojo.Question;
import com.lesson.software_structure.pojo.QuestionBank;
import com.lesson.software_structure.pojo.QuestionSet;
import com.lesson.software_structure.service.QuestionSetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionSetServiceImpl implements QuestionSetService {
    @Autowired
    private QuestionSetMapper questionSetMapper;

    @Override
    public List<QuestionSet> getAllQuestionSets() {
        return questionSetMapper.getAllQuestionSets();
    }

    @Override
    public QuestionSet getQuestionSetById(Long id) {
        return questionSetMapper.getQuestionSetById(id);
    }
    @Override
    public List<Question> getQuestionIdsByQuestionSetId(Long id) {
        return questionSetMapper.getQuestionIdsByQuestionSetId(id);
    }

    @Override
    public boolean deleteQuestionSetById(Long id) {
        return questionSetMapper.deleteQuestionSetById(id) > 0;
    }

    @Override
    public Long addQuestionSet(QuestionSet questionSet) {
        int rows = questionSetMapper.addQuestionSet(questionSet);
        if (rows > 0) {
            // 插入成功后，主键 ID 会自动回填到 questionSet 的 id 属性中
            return questionSet.getId();
        }
        // 如果插入失败，返回 null 或抛出异常
        return null;

    }
}
