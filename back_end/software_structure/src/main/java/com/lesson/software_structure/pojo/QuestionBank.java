package com.lesson.software_structure.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionBank {
    private Long id;
    private String name;//题库名称
    private String type;//题库类型
    private String description;//描述
    private List<QuestionSet> questionSets = new ArrayList<>();
}
