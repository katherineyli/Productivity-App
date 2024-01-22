CREATE DATABASE productivityapp;

CREATE TABLE task(
    task_id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    course VARCHAR(255),
    due DATE
);