SET NAMES utf8mb4;

CREATE DATABASE hyf_lesson2_library;
use hyf_lesson2_library;

CREATE TABLE `rack` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `author` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `genre` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `member` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`first_name` varchar(255) NOT NULL,
`last_name` varchar(255) NOT NULL,
`membership_date` DATETIME NOT NULL,
`membership_code` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`publish_date` DATETIME NOT NULL,
`ISBN_code` varchar(255) NULL,
`genre_id` int(10) unsigned NOT NULL,
`rack_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_book_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book_rack` FOREIGN KEY (`rack_id`) REFERENCES `rack` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `borrowing_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `borrow_date` varchar(255) NOT NULL,
  `due_date` DATETIME NOT NULL,
  `return_date` DATETIME NULL DEFAULT NULL,
  `book_id` int(10) unsigned NOT NULL,
  `member_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_borrowing_log_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_borrowing_log_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book_author` (
  `book_id` int(10) unsigned NOT NULL,
  `author_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`book_id`, `author_id`),
  CONSTRAINT `fk_book_author_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book_author_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

