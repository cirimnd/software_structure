package com.lesson.software_structure.service;

import com.lesson.software_structure.pojo.Candidate;

public interface CandidateService {
    Candidate getCandidateById(Long id);

    void registerCandidate(Candidate candidate);
}
