CREATE TABLE Users (
                       id BIGINT PRIMARY KEY AUTO_INCREMENT,
                       username VARCHAR(50) NOT NULL UNIQUE,
                       password VARCHAR(100) NOT NULL,
                       role VARCHAR(20) NOT NULL
);

CREATE TABLE Candidates (
                            id BIGINT PRIMARY KEY AUTO_INCREMENT,
                            name VARCHAR(100) NOT NULL,
                            identity_number VARCHAR(18) NOT NULL UNIQUE,
                            interview_id BIGINT NOT NULL
#                             FOREIGN KEY (interview_id) REFERENCES Interviews(id)
);

CREATE TABLE Interviews (
                            id BIGINT PRIMARY KEY AUTO_INCREMENT,
                            candidate_id BIGINT NOT NULL,
                            interviewer_id BIGINT NOT NULL,
                            score DECIMAL(4, 2),
                            comments TEXT,
                            date DATETIME,
                            FOREIGN KEY (candidate_id) REFERENCES Candidates(id),
                            FOREIGN KEY (interviewer_id) REFERENCES Users(id)
);


CREATE TABLE question_banks (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                name VARCHAR(255) NOT NULL COMMENT '题库名称',
                                type ENUM('基础素质', '专业技能', '综合面试') NOT NULL COMMENT '题库类型',
                                description TEXT COMMENT '题库描述'
);

CREATE TABLE question_sets (
                               id BIGINT AUTO_INCREMENT PRIMARY KEY,
                               question_bank_id BIGINT NOT NULL COMMENT '所属题库ID',
                               title VARCHAR(255) NOT NULL COMMENT '套题主题',
                               description TEXT COMMENT '套题描述'
    #FOREIGN KEY (question_bank_id) REFERENCES question_banks(id)
);

CREATE TABLE question (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          question_text TEXT NOT NULL,
                          correct_answer VARCHAR(255) DEFAULT NULL,
                          question_set_id BIGINT NOT NULL COMMENT '所属套题ID'
    #FOREIGN KEY (question_set_id) REFERENCES question_sets(id)
);

CREATE TABLE question_bank_question_set (
                                            question_bank_id BIGINT NOT NULL,
                                            question_set_id BIGINT NOT NULL,
                                            PRIMARY KEY (question_bank_id, question_set_id),
                                            FOREIGN KEY (question_bank_id) REFERENCES question_banks(id),
                                            FOREIGN KEY (question_set_id) REFERENCES question_sets(id)
);
CREATE TABLE question_set_question (
                                       question_set_id BIGINT NOT NULL,
                                       question_id BIGINT NOT NULL,
                                       PRIMARY KEY (question_set_id, question_id),
                                       FOREIGN KEY (question_set_id) REFERENCES question_sets(id),
                                       FOREIGN KEY (question_id) REFERENCES question(id)
);

CREATE TABLE question_banks (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                name VARCHAR(255) NOT NULL COMMENT '题库名称',
                                type ENUM('基础素质', '专业技能', '综合面试') NOT NULL COMMENT '题库类型',
                                description TEXT COMMENT '题库描述'
);

CREATE TABLE question_sets (
                               id BIGINT AUTO_INCREMENT PRIMARY KEY,
                               question_bank_id BIGINT NOT NULL COMMENT '所属题库ID',
                               title VARCHAR(255) NOT NULL COMMENT '套题主题',
                               description TEXT COMMENT '套题描述'
    #FOREIGN KEY (question_bank_id) REFERENCES question_banks(id)
);