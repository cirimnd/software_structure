package com.lesson.software_structure.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Candidate {
    private Long id;
    private String name;
    private String identityNumber;//身份证号
    private Long interviewId;
}
