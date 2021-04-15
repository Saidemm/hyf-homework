SET NAMES utf8mb4;

CREATE DATABASE school_database;
use school_database;

create table `class`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`begins (date)` DATETIME NOT NULL,
`ends (date)` DATETIME NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#Create an index on the name column of the student table.
CREATE INDEX student_name_idx
ON student (name);

ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');

show index from student;
