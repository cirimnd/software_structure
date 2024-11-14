package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.Interview;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface InterviewMapper {
    List<Interview> getInterviewsByCandidateId(Long candidateId);

    void createInterview(Interview interview);

    void updateInterviewScore(Long interviewId, Double score);
}
