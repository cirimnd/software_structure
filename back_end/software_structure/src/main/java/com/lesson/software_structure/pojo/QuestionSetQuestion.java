package com.lesson.software_structure.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionSetQuestion {
    private Long questionSetId;
    private Long questionId;
}
