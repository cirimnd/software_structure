package com.lesson.software_structure.pojo;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Question {
    private Long id;
    private String questionText;
    private String correctAnswer; // 简答题答案，方便教师后端保存答案




}
