package com.lesson.software_structure.controller;

import com.lesson.software_structure.pojo.Interview;
import com.lesson.software_structure.pojo.Result;
import com.lesson.software_structure.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/interviews")
public class InterviewController {
    @Autowired
    private InterviewService interviewService;

    @GetMapping("/candidate/{candidateId}")
    public Result getInterviews(@PathVariable Long candidateId) {
        List<Interview> interviews = interviewService.getInterviewsByCandidateId(candidateId);
        return Result.success(interviews);
    }

    @PostMapping
    public Result createInterview(@RequestBody Interview interview) {
        interviewService.createInterview(interview);
        return Result.success("面试创建成功");
    }

    @PutMapping("/{interviewId}/score")
    public Result updateScore(@PathVariable Long interviewId, @RequestParam Double score) {
        interviewService.updateInterviewScore(interviewId, score);
        return Result.success("分数成功更新");
    }
}

