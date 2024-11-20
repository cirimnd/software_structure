package com.lesson.software_structure.controller;

import com.lesson.software_structure.pojo.Candidate;
import com.lesson.software_structure.pojo.Result;
import com.lesson.software_structure.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/candidates")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @GetMapping("/{id}")
    public Result getCandidate(@PathVariable Long id) {
        Candidate candidate = candidateService.getCandidateById(id);
        if (candidate != null) {
            return Result.success(candidate);
        }
        return Result.error("考生不存在");
    }

    @PostMapping("/register")
    public Result registerCandidate(@RequestBody Candidate candidate) {
        candidateService.registerCandidate(candidate);
        return Result.success("注册成功");
    }
}
