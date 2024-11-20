package com.lesson.software_structure.pojo;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Candidate {
    private Long id;
    private String name;
    private String identityNumber;//身份证号
    private Long interviewId;
}
