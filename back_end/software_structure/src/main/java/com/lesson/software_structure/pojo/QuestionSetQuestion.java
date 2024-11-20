package com.lesson.software_structure.pojo;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class QuestionSetQuestion {
    private Long questionSetId;
    private Long questionId;
}
