package com.lesson.software_structure.service.impl;

import com.lesson.software_structure.mapper.CandidateMapper;
import com.lesson.software_structure.pojo.Candidate;
import com.lesson.software_structure.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CandidateServiceImpl implements CandidateService {
    @Autowired
    private CandidateMapper candidateMapper;

    @Override
    public Candidate getCandidateById(Long id) {
        return candidateMapper.findCandidateById(id);
    }

    @Override
    public void registerCandidate(Candidate candidate) {
        candidateMapper.insertCandidate(candidate);
    }
}
