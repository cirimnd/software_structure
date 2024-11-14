package com.lesson.software_structure.mapper;

import com.lesson.software_structure.pojo.Candidate;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CandidateMapper {

    Candidate findCandidateById(Long id);

    void insertCandidate(Candidate candidate);
}
