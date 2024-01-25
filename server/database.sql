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

CREATE TABLE class(
    class_id SERIAL PRIMARY KEY,
    classname VARCHAR(255),
    term VARCHAR(255),
    loc VARCHAR(255),
    instructor VARCHAR(255),
    startdate DATE,
    enddate DATE,
    num VARCHAR(255),
    times VARCHAR(255)[]
);

-- times format: "TTTTT-0800-1600"
-- if a day is checked, T, else F