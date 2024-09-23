-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 22, 2024 at 04:38 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college1`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `departmentID` varchar(20) NOT NULL,
  `departmentName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`departmentID`, `departmentName`) VALUES
('DH100', 'Art and Design'),
('DH200', 'Computing'),
('DH300', 'Engineering'),
('DH400', 'Science');

-- --------------------------------------------------------

--
-- Table structure for table `enrolment`
--

CREATE TABLE `enrolment` (
  `enrolmentID` varchar(20) NOT NULL,
  `studentID` varchar(20) NOT NULL,
  `moduleID` varchar(20) NOT NULL,
  `enrolmentDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enrolment`
--

INSERT INTO `enrolment` (`enrolmentID`, `studentID`, `moduleID`, `enrolmentDate`) VALUES
('1', 'EC123', 'EC101', '2024-09-12'),
('2', 'EC123', 'EC201', '2024-09-11'),
('3', 'EC234', 'EC101', '2024-09-12'),
('4', 'EC345', 'EC301', '2024-09-02'),
('5', 'EC456', 'EC401', '2024-09-07'),
('6', 'EC456', 'EC201', '2024-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `lecturer`
--

CREATE TABLE `lecturer` (
  `lecturerID` varchar(20) NOT NULL,
  `lecturerFullname` varchar(100) NOT NULL,
  `lecturerEmail` varchar(100) NOT NULL,
  `departmentID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lecturer`
--

INSERT INTO `lecturer` (`lecturerID`, `lecturerFullname`, `lecturerEmail`, `departmentID`) VALUES
('EC654', 'Bruce Wayne', 'bwayne@college.ac.uk', 'DH400'),
('EC765', 'Clark Kent', 'cklent@college.ac.uk', 'DH300'),
('EC876', 'Tony Stark', 'tstark@college.ac.uk', 'DH200'),
('EC987', 'Peter Parker', 'pparker@college.ac.uk', 'DH100');

-- --------------------------------------------------------

--
-- Table structure for table `lecturer_module`
--

CREATE TABLE `lecturer_module` (
  `lecturer_module_ID` varchar(20) NOT NULL,
  `moduleID` varchar(20) NOT NULL,
  `lecturerID` varchar(20) NOT NULL,
  `year_of_delivery` int(11) NOT NULL,
  `semester` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lecturer_module`
--

INSERT INTO `lecturer_module` (`lecturer_module_ID`, `moduleID`, `lecturerID`, `year_of_delivery`, `semester`) VALUES
('1', 'EC101', 'EC987', 2024, 1),
('2', 'EC201', 'EC876', 2024, 1),
('3', 'EC301', 'EC765', 2024, 1),
('4', 'EC401', 'EC654', 2024, 1);

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `moduleID` varchar(20) NOT NULL,
  `moduleName` varchar(100) NOT NULL,
  `moduleDescription` varchar(200) DEFAULT NULL,
  `credit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`moduleID`, `moduleName`, `moduleDescription`, `credit`) VALUES
('EC101', 'Programming Fundamentals', 'PF is a', 6),
('EC201', 'Relational Databases', 'RD is a', 6),
('EC301', 'Data Structures and Algorithms', 'DSA is a', 6),
('EC401', 'Artificial Intelligence', '', 6);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studentID` varchar(20) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentID`, `fullName`, `email`) VALUES
('EC123', 'Fred Flintstone', 'fflintstone@college.ac.uk'),
('EC234', 'Barney Rubble', 'brubble@college.ac.uk'),
('EC345', 'Wilma Flintstone', 'wflintstone@college.ac.uk'),
('EC456', 'Betty Rubble', 'berubble@college.ac.uk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`departmentID`);

--
-- Indexes for table `enrolment`
--
ALTER TABLE `enrolment`
  ADD PRIMARY KEY (`enrolmentID`),
  ADD KEY `studentID` (`studentID`),
  ADD KEY `moduleID` (`moduleID`);

--
-- Indexes for table `lecturer`
--
ALTER TABLE `lecturer`
  ADD PRIMARY KEY (`lecturerID`),
  ADD KEY `departmentID` (`departmentID`);

--
-- Indexes for table `lecturer_module`
--
ALTER TABLE `lecturer_module`
  ADD PRIMARY KEY (`lecturer_module_ID`),
  ADD KEY `moduleID` (`moduleID`),
  ADD KEY `lecturerID` (`lecturerID`);

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`moduleID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studentID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `enrolment`
--
ALTER TABLE `enrolment`
  ADD CONSTRAINT `enrolment_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `student` (`studentID`),
  ADD CONSTRAINT `enrolment_ibfk_2` FOREIGN KEY (`moduleID`) REFERENCES `module` (`moduleID`);

--
-- Constraints for table `lecturer`
--
ALTER TABLE `lecturer`
  ADD CONSTRAINT `lecturer_ibfk_1` FOREIGN KEY (`departmentID`) REFERENCES `department` (`departmentID`);

--
-- Constraints for table `lecturer_module`
--
ALTER TABLE `lecturer_module`
  ADD CONSTRAINT `lecturer_module_ibfk_1` FOREIGN KEY (`moduleID`) REFERENCES `module` (`moduleID`),
  ADD CONSTRAINT `lecturer_module_ibfk_2` FOREIGN KEY (`lecturerID`) REFERENCES `lecturer` (`lecturerID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
