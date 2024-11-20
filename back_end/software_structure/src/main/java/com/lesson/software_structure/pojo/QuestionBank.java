package com.lesson.software_structure.pojo;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionBank {
    private Long id;
    private String name;//题库名称
    private String type;//题库类型
    private String description;//描述
    private List<QuestionSet> questionSets = new ArrayList<>();



}
