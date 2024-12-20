package com.lesson.software_structure.pojo;

import lombok.*;

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
