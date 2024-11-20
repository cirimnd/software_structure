package com.lesson.software_structure.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class QuestionSet {
    private Long id;
    private Long questionBankId;
    private String title;
    private String description;
    private List<Question> questions = new ArrayList<>();
}
