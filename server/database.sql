CREATE DATABASE productivityapp;

CREATE TYPE priority_status AS ENUM('None', 'High', 'Low');
CREATE TYPE reminder_time AS ENUM ('None','15MIN', '1HR', '3HR', '1DAY');

CREATE TABLE task(
    task_id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    course VARCHAR(255),
    due DATE,
    pri priority_status,
    reminder reminder_interval
);