package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.InterviewMapper;
import com.lesson.software_structure.pojo.Interview;
import com.lesson.software_structure.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class InterviewServiceImpl implements InterviewService {
    @Autowired
    private InterviewMapper interviewMapper;

    @Override
    public List<Interview> getInterviewsByCandidateId(Long candidateId) {
        return interviewMapper.getInterviewsByCandidateId(candidateId);
    }

    @Override
    public void createInterview(Interview interview) {
        interview.setDate(new Date());
        interview.setScore(0.0);
        interview.setComments(null);
        interviewMapper.createInterview(interview);
    }

    @Override
    public void updateInterviewScore(Long interviewId, Double score) {
        interviewMapper.updateInterviewScore(interviewId,score);
    }
}
