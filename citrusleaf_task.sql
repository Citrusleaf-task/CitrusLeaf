-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2022 at 06:20 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `citrusleaf_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `title` varchar(50) NOT NULL,
  `due_date` date NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `user` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`title`, `due_date`, `attachment`, `user`) VALUES
('today', '1993-01-01', 'file', 'rama1@gmail.com'),
('api ', '1993-01-01', 'Screenshot (9).png', 'narendra@gmail.com'),
('api ', '1993-01-01', 'Screenshot (8).png', 'narendra@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `email`, `password`) VALUES
('narendra', 'narendra@gmail.com', '$2b$12$IYjVmhHCO79QkZbHxs7XWO5T6uZhsgnlI.zsAIkz3oeiz6FAvl3nG'),
('ramakant', 'rama1@gmail.com', '$2b$12$s5Ubf57fKbg58UQfHi2GrOZdY1Xdzm9fanqRUMKM7csAtQEaiO37K'),
('ramakant', 'rama@gmail.com', '$2b$12$2o0TuOX63dImEGPwGv677OD9SVVuoSX0KlFzsn9cwlQp61zB1eXlW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
