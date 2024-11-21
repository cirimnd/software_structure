package com.lesson.software_structure.pojo;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Interview {
    private Long id;
    private Long candidateId;
    private Long interviewerId;
    private Double score;//面试分数
    private String comments;//评语
    private Date date;

    // Getters and Setters
}
