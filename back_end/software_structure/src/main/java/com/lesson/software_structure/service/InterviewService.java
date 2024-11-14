package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.Interview;

import java.util.List;

public interface InterviewService {
    List<Interview> getInterviewsByCandidateId(Long candidateId);

    void createInterview(Interview interview);

    void updateInterviewScore(Long interviewId, Double score);
}
