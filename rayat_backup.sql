/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.13-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: rayat
-- ------------------------------------------------------
-- Server version	10.11.13-MariaDB-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `achievements`
--

DROP TABLE IF EXISTS `achievements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievements`
--

LOCK TABLES `achievements` WRITE;
/*!40000 ALTER TABLE `achievements` DISABLE KEYS */;
INSERT INTO `achievements` VALUES
(4,'विद्यार्थी गौरव','/uploads/1743155248007-achiev2.jpg'),
(5,'अमृत महोत्सव','/uploads/1743155285378-achiev3.jpg');
/*!40000 ALTER TABLE `achievements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `achievementsnews`
--

DROP TABLE IF EXISTS `achievementsnews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievementsnews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievementsnews`
--

LOCK TABLES `achievementsnews` WRITE;
/*!40000 ALTER TABLE `achievementsnews` DISABLE KEYS */;
INSERT INTO `achievementsnews` VALUES
(4,'शोध मराठी मनाचा','\"जागतिक मराठी अकादमी व रयत शिक्षण संस्था यांच्या संयुक्त विद्यमाने आयोजित \'शोध मराठी मनाचा\' ह्या २० व्या जागतिक मराठी संमेलनाचे उद्घाटन पद्मविभूषण खा. मा. खासदार शरदचंद्रजी पवार साहेब यांच्या शुभहस्ते झाले.\",','/uploads/1743157591602-achiev.jpg'),
(5,'अमृत महोत्सव','\"दि २८/०९/२०२४ रोजी कर्जत जि .अहमदनगर येथील महात्मा गांधी विद्यालयाचा अमृत महोत्सव प्रारंभ, दादा पाटील महाविद्यालय कर्मवीर जयंती सप्ताह व हीरक महोत्सव सांगता व विद्यार्थिनी वसतिगृह विस्तारित इमारत उद्घाटन.\",','/uploads/1743158245449-achiev3.jpg'),
(6,'रयत शिक्षण संस्थेच्या मॅनेजिंग कौन्सिलची बैठक','दि.12/04/2025 रोजी रयत शिक्षण संस्थेच्या मॅनेजिंग कौन्सिलची बैठक रयत शिक्षण संस्थेचे अध्यक्ष मा.खासदार शरद पवार साहेब यांच्या अध्यक्षतेखाली व महाराष्ट्र राज्याचे उपमुख्यमंत्री मा.अजित दादा पवार साहेब यांच्या प्रमुख उपस्थित सातारा येथे पार पडली. ','/uploads/1745650611933-490656579_10236537994928233_7772199087203135971_n.jpg'),
(7,'सेंटर ऑफ एक्सलन्स या आधुनिक केंद्रास संस्थेच्या मॅनेजिंग कौन्सिलच्या मान्यवर सदस्यांनी भेट दिली. ','सेंटर ऑफ एक्सलन्स या आधुनिक केंद्रास संस्थेच्या मॅनेजिंग कौन्सिलच्या मान्यवर सदस्यांनी भेट दिली. ','/uploads/1756538000586-COE.jpg');
/*!40000 ALTER TABLE `achievementsnews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES
(11,'२० वे जागतिक मराठी संमेलन','/uploads/1743142819721-recentacti3.jpg'),
(13,'आर्टिफिशियल इंटेलिजन्ससाठी \'रयत\'चे दमदार पाऊल','/uploads/1743142856600-recentact1.jpg'),
(16,'रयत शिक्षण संस्थेच्या मॅनेजिंग कौन्सिलची बैठक','/uploads/1745650544156-490656579_10236537994928233_7772199087203135971_n.jpg'),
(17,'राज्य स्थापना दिवस राजभवन मुंबई','/uploads/1745653246541-488929803_10236398910091199_4914919617707352511_n.jpg'),
(21,'दि.२६/०६/२०२५ रोजी संस्थेच्या कर्मवीर भाऊराव पाटील अभियांत्रिकी महाविद्यालय, सातारा येथे नव्याने सुरु करण्यात येणा-या CENTRE OF EXCELLENCE या केंद्राचे उदघाटन कार्यक्रम','/uploads/1751022475628-1750862461368-कार्यक्रम_पत्रिका_(1)_page-0001.jpg'),
(34,'एआय तंत्रज्ञान आणि सायबर सिक्युरिटी बाबत माहिती हवी साताऱ्यात पत्रकारांची प्रशिक्षण कार्यशाळा संपन्न','/uploads/1757654057607-1.webp'),
(35,'आज दि. ४/९/२०२५ रोजी रयत शिक्षण संस्थेच्या वर्ये येथील सायन्स सेंटरला पाहण्यासाठी न्यू इंग्लिश स्कूल, पवारवाडी (जावली) आणि त्रिंबकराव काळे विद्यालय, मलवडी (माण) येथील विद्यार्थी मोठ्या उत्साहाने आले होते.','/uploads/1757659206398-2.jpeg'),
(36,'\'शिवाजी शिक्षण संस्था, अमरावती येथील शिष्टमंडळाची रयत शिक्षण संस्थेस अभ्यास भेट\' ','/uploads/1757921958387-40be994e-2e5e-4661-8602-5459c9f5d3f9.jpg'),
(41,'पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील यांचा १३८ वा जयंती सोहळा - निमंत्रण पत्रिका','/uploads/1758345502257-1758282234951-कार्यक्रम_पत्रिका_दि.webp'),
(42,'पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील यांचा १३८ वा जयंती सोहळा','/uploads/1759125278536-DSC_3071~2.JPG'),
(43,'रयत शिक्षण संस्थेचा , शनिवार दि. ४ ऑक्टोबर , २०२५ रोजी होणाऱ्या वर्धापन दिन कार्यक्रमाची निमंत्रण पत्रिका','/uploads/1759125449830-1759125130571-निमंत्रण_पत्रिका_-_दि.०४-१०-२०२५_.jpeg');
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES
(2,'adminUser','mahi@123','mahendra.desai13@gmail.com','2025-03-24 08:39:08');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ai_info_11_12`
--

DROP TABLE IF EXISTS `ai_info_11_12`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `ai_info_11_12` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vibhag_id` int(11) NOT NULL,
  `shakheche_nav` varchar(255) DEFAULT NULL,
  `shakhecha_prakar` varchar(100) DEFAULT NULL,
  `shakha` varchar(100) DEFAULT NULL,
  `shakheche_svarup` varchar(100) DEFAULT NULL,
  `iyatta` varchar(50) DEFAULT NULL,
  `ekun_praveshit_vidyarthi` int(11) DEFAULT NULL,
  `ai_vidyarthi_nav` varchar(255) DEFAULT NULL,
  `vidyarthyacha_varg` varchar(100) DEFAULT NULL,
  `ai_ekun_vidyarthi` int(11) DEFAULT NULL,
  `ai_batch_sankhya` int(11) DEFAULT NULL,
  `ekun_pravesh_11_12` int(11) DEFAULT NULL,
  `ekun_ai_pravesh_11_12` int(11) DEFAULT NULL,
  `ai_batch_sankhya_11_12` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_info_11_12`
--

LOCK TABLES `ai_info_11_12` WRITE;
/*!40000 ALTER TABLE `ai_info_11_12` DISABLE KEYS */;
INSERT INTO `ai_info_11_12` VALUES
(1,2,'रामानंद नगर ','कनिष्ठ महाविद्यालय (महाविद्यालयास सलग्न)','कला','अनुदानित','११ वी ',50,'महेंद्र देसाई \nमहेंद्र देसाई, महेंद्र देसाई ','११ वी ',20,NULL,50,20,NULL);
/*!40000 ALTER TABLE `ai_info_11_12` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ai_info_5to10`
--

DROP TABLE IF EXISTS `ai_info_5to10`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `ai_info_5to10` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vibhag_id` int(11) NOT NULL,
  `shakheche_nav` varchar(255) DEFAULT NULL,
  `shakhecha_prakar` varchar(100) DEFAULT NULL,
  `shakha` varchar(100) DEFAULT NULL,
  `shakheche_svarup` varchar(100) DEFAULT NULL,
  `iyatta` varchar(50) DEFAULT NULL,
  `ekun_praveshit_vidyarthi` int(11) DEFAULT NULL,
  `ai_vidyarthi_nav` varchar(255) DEFAULT NULL,
  `vidyarthyacha_varg` varchar(100) DEFAULT NULL,
  `ai_ekun_vidyarthi` int(11) DEFAULT NULL,
  `ai_batch_sankhya` int(11) DEFAULT NULL,
  `ekun_pravesh_11_12` int(11) DEFAULT NULL,
  `ekun_ai_pravesh_11_12` int(11) DEFAULT NULL,
  `ai_batch_sankhya_11_12` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_info_5to10`
--

LOCK TABLES `ai_info_5to10` WRITE;
/*!40000 ALTER TABLE `ai_info_5to10` DISABLE KEYS */;
INSERT INTO `ai_info_5to10` VALUES
(1,1,'अण्णासाहेब कल्याणी विद्यालय, सातारा','उच्च माध्यमिक (विद्यालयास सलग्न)','विज्ञान','अनुदानित','५ वी ',300,NULL,NULL,NULL,NULL,NULL,NULL,0),
(2,1,NULL,'उच्च माध्यमिक (विद्यालयास सलग्न)','वाणिज्य','अनुदानित',NULL,300,'Mahendra Desai\nMahendra Desai\nMahendra Desai','5 वी ',30,1,300,30,1),
(3,2,NULL,'NA','NA','NA','५वी ते ६ वी',1,'६ वी\nतेजस सचिन आहेर','११ वर्ष ',1,1,NULL,NULL,NULL),
(4,2,NULL,'NA','NA','NA','५वी ते ६ वी',1,'६ वी\nतेजस सचिन आहेर','११ वर्ष ',1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `ai_info_5to10` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ai_info_senior`
--

DROP TABLE IF EXISTS `ai_info_senior`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `ai_info_senior` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vibhag_id` int(11) NOT NULL,
  `shakheche_nav` varchar(255) DEFAULT NULL,
  `shakhecha_prakar` varchar(100) DEFAULT NULL,
  `shakha` varchar(100) DEFAULT NULL,
  `shakheche_svarup` varchar(100) DEFAULT NULL,
  `iyatta` varchar(50) DEFAULT NULL,
  `ekun_praveshit_vidyarthi` int(11) DEFAULT NULL,
  `ai_vidyarthi_nav` varchar(255) DEFAULT NULL,
  `vidyarthyacha_varg` varchar(100) DEFAULT NULL,
  `ai_ekun_vidyarthi` int(11) DEFAULT NULL,
  `ai_batch_sankhya` int(11) DEFAULT NULL,
  `ekun_pravesh_11_12` int(11) DEFAULT NULL,
  `ekun_ai_pravesh_11_12` int(11) DEFAULT NULL,
  `ai_batch_sankhya_11_12` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_info_senior`
--

LOCK TABLES `ai_info_senior` WRITE;
/*!40000 ALTER TABLE `ai_info_senior` DISABLE KEYS */;
INSERT INTO `ai_info_senior` VALUES
(1,4,'एस.एम.जोशी हडपसर ','वरिष्ठ महाविद्यालय','वाणिज्य','अनुदानित','प्रथम वर्ष ',100,'Mahendra Desai\nMahendra Desai\nMahendra Desai\n','प्रथम वर्ष ',40,2,100,40,2);
/*!40000 ALTER TABLE `ai_info_senior` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumni`
--

DROP TABLE IF EXISTS `alumni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni`
--

LOCK TABLES `alumni` WRITE;
/*!40000 ALTER TABLE `alumni` DISABLE KEYS */;
INSERT INTO `alumni` VALUES
(3,'Hon\'ble Dilip Dattatray Walse Patil','/uploads/1743234786136-al1.jpg'),
(4,'Hon\'ble Ramsheth Changu Thakur','/uploads/1743234810066-al2.jpg'),
(5,'Hon\'ble Adv. Ravindra Keshavrao Pawar','/uploads/1743234821947-al3.jpg'),
(6,'Hon\'ble Smt. Meenatai Manikrao Jagadhane','/uploads/1743234857018-al4.jpg'),
(7,'Hon\'ble Dr.Vishwajit Patangrao Kadam','/uploads/1743234879978-al5.jpg'),
(8,'Hon’ble Prabhakar Krishnaji Deshmukh','/uploads/1743234891346-al6.jpg'),
(9,'Hon’ble Dadabhau Dashrath Kalamkar','/uploads/1743234902145-al7.jpg'),
(10,'Hon’ble J. K. Bapu Jadhav','/uploads/1743234927426-al8.jpg'),
(11,'Hon’ble Ajit Bhikugounda Patil','/uploads/1743234948864-al9.jpg'),
(12,'Hon’ble Rahul Kundalik Jagtap','/uploads/1743234960203-al10.jpg');
/*!40000 ALTER TABLE `alumni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colleges`
--

DROP TABLE IF EXISTS `colleges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `colleges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colleges`
--

LOCK TABLES `colleges` WRITE;
/*!40000 ALTER TABLE `colleges` DISABLE KEYS */;
INSERT INTO `colleges` VALUES
(1,'Chhatrapati Shivaji College, Satara','https://cscsatara.org'),
(2,'Sadguru Gadage Maharaj College, Karad. Dist-Satara','https://sgm.edu.in'),
(3,'Azad College of Education, Satara','https://www.azadcollegesatara.in/'),
(4,'Yashvantrao Chavan Institute of Science, Satara','https://ycis.ac.in/'),
(5,'Dahiwadi College, Dahiwadi. Dist-Satara','https://www.dahiwadicollege.in/'),
(6,'Ismailsaheb Mulla Law College, Satara','https://imlc.ac.in/'),
(7,'Dhananjayrao Gadgil College of Commerce, Satara','https://www.dgccsatara.edu.in/'),
(8,'Shripatrao Kadam Mahavidyalaya, Shirwal. Dist-Satara','https://skmshirwal.in/'),
(9,'D. P. Bhosale College, Koregaon. Dist-Satara','https://dpbck.ac.in/'),
(10,'Sharadchandra Pawar College, Lonand. Dist-Satara','http://www.spmlonand.ac.in/'),
(11,'Savitribai Phule Mahila Mahavidyalaya, Satara','https://www.spmmedu.in/'),
(12,'Sou. Mangaltai Ramchandra Jagtap Mahavidyalaya, Umbraj. Dist-Satara','https://www.mrjmu.ac.in/'),
(13,'Yashvantrao Chavan Mahavidyalaya, Panchwad. Dist-Satara','https://www.ycmpachwad.ac.in/'),
(14,'Arts & Commerce College, Pusegaon. Dist-Satara','https://accp.ac.in/'),
(15,'Karmaveer Bhaurao Patil College of Engineering, Sadarbazar, Satara','https://kbpcoes.edu.in/'),
(16,'Karmaveer Bhaurao Patil Polytechnic, Gat NO.242/B/1, Panmalewadi, Varye, Satara','http://www.kbppoly.edu.in/'),
(17,'Karmaveer Bhaurao Patil Institute of Management Studies & Research, Varye, Satara','https://kbpimsr.ac.in/'),
(18,'Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur','https://www.kbpmautonomous.in/'),
(19,'Arts & Commerce College, Madha','https://www.accmadha.in/'),
(20,'Laxmibai Bhaurao Patil Mahila Mahavidyalaya, Solapur',''),
(21,'Balwant College, Vita. Dist-Sangli','https://www.balwantcollege.edu.in/'),
(22,'Dr. Patangrao Kadam Mahavidyalaya, Ramanandnagar (Burli), At-Ramanandnagar, Post-Kirloskarvadi, Tal-Palus, Dist-Sangli','https://www.asccramanandnagar.in/'),
(23,'Raosaheb Ramrao Patil Mahavidhyalaya, Sawalaj. Dist-Sangli','https://rrpatilcollege.com/'),
(24,'Rajarshi Chhatrapati Shahu College, Kolhapur','https://www.rcsc.ac.in/'),
(25,'Chandrabai Shantappa Shendure College, Hupari. Dist-Kolhapur',''),
(26,'Prof. Dr. N.D. Patil Mahavidyalaya, Malkapur. Dist-Kolhapur','https://ndpmmalkapur.com/'),
(27,'Abasaheb Marathe Arts & New Commerce, Science College, Rajapur. Dist-Ratnagiri',''),
(28,'Rao Bahaddur Narayanrao Borawake College, Shrirampur. Dist-Ahmednagar','https://www.rbnbcollege.com/'),
(29,'C.D. Jain College of Commerce, Shrirampur Dist-Ahmednagar',''),
(30,'Dada Patil Mahavidyalaya, Karjat Dist-Ahmednagar','https://dpcollege.in/'),
(31,'Shri Sadguru Gangageer Maharaj Science, Gautam Arts & Sanjivani Commerce College, Kopargaon. Dist-Ahmednagar','https://www.ssgmcollege.org/'),
(32,'Karmaveer Bhaurao Patil College, Vashi. Navi Mumbai. Dist-Thane','https://www.kbpcollegevashi.edu.in/'),
(33,'Swami Sahajanand Bharati College of Education, Shrirampur, Dist-Ahmednagar','https://ssbcollege.com/'),
(34,'Maharaja Jivajirao Shinde Mahavidyalaya, Shrigonda. Dist-Ahmednagar','http://www.mjsshrigonda.com/'),
(35,'Radhabai Kale Mahila Mahavidyalaya, Ahmednagar','https://www.rkmmanr.org/'),
(36,'Annasaheb Awate Arts, Commerce, Hutatma Babu Genu Science College, Manchar. Dist-Pune','https://aacmanchar.edu.in/'),
(37,'Mahatma Phule Mahavidyalaya, Pimpri, Pune-17','https://www.mpcollegepimpri.edu.in/'),
(38,'Dr. Babasaheb Ambedkar Mahavidyalaya, Aundhagaon, Pune-7',''),
(39,'S.M. Joshi College, Hadapsar. Pune','https://www.smjoshicollege.edu.in/'),
(40,'Mahatma Phule Arts, Science & Commerce College, Panvel. Dist-Raigad',''),
(41,'Veer Vajekar Arts, Science & Commerce College, Phunde. Dist-Raigad','https://mpasccollege.edu.in/'),
(42,'Loknete Ramsheth Thakur Arts, Science & Commerce College, Mokhada. Dist-Palghar','https://www.asccmokhada.co.in/'),
(43,'Rayat Institute of Research & Development College, Satara','');
/*!40000 ALTER TABLE `colleges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `downloads`
--

DROP TABLE IF EXISTS `downloads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `downloads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `downloads`
--

LOCK TABLES `downloads` WRITE;
/*!40000 ALTER TABLE `downloads` DISABLE KEYS */;
INSERT INTO `downloads` VALUES
(1,'sakshiii','2025-03-14','/uploads/1743058061154-1741351025registration.pdf'),
(3,'Abcd','2025-03-05','/uploads/1743147224238-mission.webp'),
(4,'aaaaaa','2025-04-11','/uploads/1745647197041-Skill_Course_List_24-25.xlsx');
/*!40000 ALTER TABLE `downloads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ebooks`
--

DROP TABLE IF EXISTS `ebooks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `ebooks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ebooks`
--

LOCK TABLES `ebooks` WRITE;
/*!40000 ALTER TABLE `ebooks` DISABLE KEYS */;
INSERT INTO `ebooks` VALUES
(2,'Two successful Decades of Empowering Farmers','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754118487333-Two successful Decades of Empowering Farmers....pdf'),
(3,'अकारिक मूल्यमापन','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754118514413-अकारिक मूल्यमापन.pdf'),
(4,'आर.टी.ई. भाग-१','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754118545423-आर.टी.ई. भाग-१.pdf'),
(6,'आर.टी.ई. भाग-२','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128245808-आर.टी.ई. भाग-२.pdf'),
(7,'एका एकलव्याचा शोध -मा.रावसाहेब शिंदे','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128422305-एका एकलव्याचा शोध -मा.रावसाहेब शिंदे.pdf'),
(8,'ऑडीट पूर्तता आणि अकौटस कमिटी कामकाज','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128470746-ऑडीट पूर्तता आणि अकौटस कमिटी कामकाज.pdf'),
(9,'कर्तव्ये मुख्याध्यापक,शिक्षक इत्यादी','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128529071-कर्तव्ये मुख्याध्यापक,शिक्षक इत्यादी.pdf'),
(10,'ज्ञान रचना पद्धतीचा प्रत्यक्ष वापर - डॉ.एन.एस. गायकवाड','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128648249-ज्ञान रचना पद्धतीचा प्रत्यक्ष वापर - डॉ.एन.एस. गायकवाड.pdf'),
(11,'ताणतणावाचे व्यवस्थापन','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128705999-ताणतणावाचे व्यवस्थापन.pdf'),
(13,'पायाभूत चाचणी उपचारात्मक बाबी- डॉ.एन.एस. गायकवाड','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128742853-पायाभूत चाचणी उपचारात्मक बाबी- डॉ.एन.एस. गायकवाड.pdf'),
(14,'पालकांच्या मनांत गुणवत्तेबाबत विश्वास निर्माण करा - मा.शरदरावजी पवार','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754128793250-पालकांच्या मनांत गुणवत्तेबाबत विश्वास निर्माण करा - मा.शरदरावजी पवार.pdf'),
(16,'बालशिक्षण हक्क कायद्याच्या मुख्य तरतूदी','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754129150394-बालशिक्षण हक्क कायद्याच्या मुख्य तरतूदी.pdf'),
(17,'माध्यमिक शाळांची उत्कृष्टकडे वाटचाल','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754129211720-माध्यमिक शाळांची उत्कृष्टकडे वाटचाल.pdf'),
(18,'मुख्याध्यापक मार्गदर्शिका','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754129318991-मुख्याध्यापक मार्गदर्शिका.pdf'),
(19,'रजा,सेवापुस्तके,फायलिंग,सेवानिवृत्ती,जमिनबाब','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754129515903-रजा,सेवापुस्तके,फायलिंग,सेवानिवृत्ती,जमिनबाब.pdf'),
(20,'शाखा वित्त्तीय बाबी व  अकौंट मेंटेनन्स','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754129661980-शाखा वित्त्तीय बाबी व  अकौंट मेंटेनन्स.pdf'),
(21,'शेवाशर्ती व नियम, शासकीय व संस्था पत्रव्यवहार','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754129900593-शेवाशर्ती व नियम, शासकीय व संस्था पत्रव्यवहार.pdf'),
(22,'समृध्द शाळा भाग-१','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754130310625-समृध्द शाळा भाग-१.pdf'),
(23,'समृध्द शाळा भाग-२','2025-08-02','ईबुक्स- कर्मवीर विद्याप्रबोधिनी','/uploads/1754130339196-समृध्द शाळा भाग-२.pdf'),
(24,'इ६वी गणित','2025-08-02','कृतीपत्रिका','/uploads/1754130569772-इ६वी गणित.pdf'),
(37,'इ६वी गणित- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754132196521-इ६वी गणित- सेमी.pdf'),
(38,'इ६वी सामान्य विज्ञान- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754132444797-इ६वी सामान्य विज्ञान- सेमी.pdf'),
(39,'इ६वी सामान्य विज्ञान','2025-08-02','कृतीपत्रिका','/uploads/1754132475526-इ६वी सामान्य विज्ञान.pdf'),
(40,'७ वी गणित- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754132562731-७ वी गणित- सेमी.pdf'),
(41,'७ वी गणित','2025-08-02','कृतीपत्रिका','/uploads/1754132587077-७ वी गणित.pdf'),
(42,'८ वी गणित- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754132808443-८ वी गणित- सेमी.pdf'),
(43,'८ वी गणित','2025-08-02','कृतीपत्रिका','/uploads/1754132835319-८ वी गणित.pdf'),
(44,'८ वी सामान्य विज्ञान- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754132894953-८ वी सामान्य विज्ञान- सेमी.pdf'),
(45,'९ वी हिंदी','2025-08-02','कृतीपत्रिका','/uploads/1754132977182-९ वी हिंदी.pdf'),
(46,'९ वी विज्ञान आणि तंत्रज्ञान सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754133054931-९ वी विज्ञान आणि तंत्रज्ञान सेमी.pdf'),
(47,'९ वी गणित','2025-08-02','कृतीपत्रिका','/uploads/1754133103662-९ वी गणित.pdf'),
(48,'९ वी गणित- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754133163212-९ वी गणित- सेमी.pdf'),
(49,'९ वी इतिहास','2025-08-02','कृतीपत्रिका','/uploads/1754133201772-९ वी इतिहास.pdf'),
(50,'९ वी मराठी','2025-08-02','कृतीपत्रिका','/uploads/1754133347576-९ वी मराठी.pdf'),
(51,'१० वी हिंदी','2025-08-02','कृतीपत्रिका','/uploads/1754133771788-१० वी हिंदी.pdf'),
(52,'१० वी विज्ञान आणि तंत्रज्ञान','2025-08-02','कृतीपत्रिका','/uploads/1754133819876-१० वी विज्ञान आणि तंत्रज्ञान.pdf'),
(53,'१० वी भूगोल','2025-08-02','कृतीपत्रिका','/uploads/1754133866343-१० वी भूगोल.pdf'),
(54,'१० वी गणित','2025-08-02','कृतीपत्रिका','/uploads/1754133909405-१० वी गणित.pdf'),
(55,'१० वी गणित- सेमी','2025-08-02','कृतीपत्रिका','/uploads/1754134066383-१० वी गणित- सेमी.pdf'),
(56,'१० वी इतिहास','2025-08-02','कृतीपत्रिका','/uploads/1754134170008-१० वी इतिहास.pdf'),
(57,'रयत ज्ञानदीप ,एच .एस.सी.इंग्लिश -फेब्रुवारी २०२१','2025-08-02','प्रकाशने २०२१','/uploads/1754134272870-रयत ज्ञानदीप ,एच .एस.सी.इंग्लिश -फेब्रुवारी २०२१.pdf'),
(58,'रयत ज्ञानदीप एस.एस.सी. मार्च २०२१ ( गणित, विज्ञान व इंग्लिश )','2025-08-02','प्रकाशने २०२१','/uploads/1754134393393-रयत ज्ञानदीप एस.एस.सी. मार्च २०२१ ( गणित, विज्ञान व इंग्लिश ).pdf'),
(59,'व्यवसाय मार्गदर्शक अंक २०२०-२१','2025-08-02','प्रकाशने २०२१','/uploads/1754134423565-व्यवसाय मार्गदर्शक अंक २०२०-२१.pdf'),
(60,'रयत ज्ञानदीप एच.एस.सी.(इंग्लिश) फेब्रुवारी २०२२','2025-08-02','प्रकाशने २०२२','/uploads/1754134467825-रयत ज्ञानदीप एच.एस.सी.(इंग्लिश) फेब्रुवारी २०२२.pdf'),
(61,'वार्षिक अहवाल  2024-25','2025-10-31','वार्षिक अहवाल ','/uploads/1761899807047-Annual Report 2024-25.pdf');
/*!40000 ALTER TABLE `ebooks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managements`
--

DROP TABLE IF EXISTS `managements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `managements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `sub_designation` varchar(255) DEFAULT NULL,
  `file_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managements`
--

LOCK TABLES `managements` WRITE;
/*!40000 ALTER TABLE `managements` DISABLE KEYS */;
INSERT INTO `managements` VALUES
(4,'Hon’ble Padma Vibhushan Sharadrao Govindrao Pawar','President','President','/uploads/1750407186474_1.jpg','2025-06-20 08:13:06'),
(5,'Hon’ble Jaishree Anantrao Chougule','Vice President','Vice President','/uploads/1750407552627_2.jpg','2025-06-20 08:19:12'),
(6,'Hon\'ble Arun Punjaji Kadu-Patil','Vice President','Vice President','/uploads/1750407580484_3.jpg','2025-06-20 08:19:40'),
(7,'Hon\'ble P.J.Patil','Vice President','Vice President','/uploads/1750407603182_4.jpg','2025-06-20 08:20:03'),
(8,'Hon\'ble Adv. Ram Janardhan Kandage','Vice President','Vice President','/uploads/1750407636091_5.jpg','2025-06-20 08:20:36'),
(9,'Hon\'ble Mahendra Subrao Lad','Vice President','Vice President','/uploads/1750407659666_6.jpg','2025-06-20 08:20:59'),
(10,'Hon’ble Chandrakant Narayan Dalvi, IAS(Retd)','Representative','Chairman','/uploads/1750407768153_7.jpg','2025-06-20 08:22:48'),
(11,'Hon’ble Dr. Anil Patil','Representative','Organizer','/uploads/1750407880649_images.jpg','2025-06-20 08:24:40'),
(13,' Hon’ble Adv. Bhagirath Nivrutti Shinde','Representative','Vice Chairman','/uploads/1750487119967_Bagirath shinde saheb.jpg','2025-06-21 06:25:19'),
(14,'Hon’ble Shri. Vikas Deshmukh, IAS(Retd)','Administrator','Secretary','/uploads/1750487155399_9.jpg','2025-06-21 06:25:55'),
(18,'Hon’ble Chandrakant Narayan Dalvi, IAS(Retd)','Managing Council','Chairman','/uploads/1750488043534_7.jpg','2025-06-21 06:40:43'),
(19,'Hon’ble Adv. Bhagirath Nivrutti Shinde','Managing Council','Managing Council','/uploads/1750488089132_Bagirath shinde saheb.jpg','2025-06-21 06:41:29'),
(20,'Hon’ble Dr. Anil Patil','Managing Council','Organizer','/uploads/1750488126652_images.jpg','2025-06-21 06:42:06'),
(21,'Hon\'ble Ajit Anantrao Pawar','Managing Council','Member','/uploads/1750488231045_14.jpg','2025-06-21 06:43:51'),
(22,'Hon\'ble Dilip Dattatray Walse Patil','Managing Council','Member','/uploads/1750488253583_15.jpg','2025-06-21 06:44:13'),
(23,'Hon\'ble Ramsheth Changu Thakur','Managing Council','Member','/uploads/1750488276672_16.jpg','2025-06-21 06:44:36'),
(24,'Hon\'ble Adv. Ravindra Keshavrao Pawar','Managing Council','Member','/uploads/1750488307215_17.jpg','2025-06-21 06:45:07'),
(25,' Hon\'ble Smt. Meenatai Manikrao Jagadhane','Managing Council','Member','/uploads/1750488329527_18.jpg','2025-06-21 06:45:29'),
(26,'Hon\'ble Dr.Vishwajit Patangrao Kadam','Managing Council','Member','/uploads/1750488352947_19.jpg','2025-06-21 06:45:52'),
(27,'Hon’ble Prabhakar Krishnaji Deshmukh','Managing Council','Member','/uploads/1750489289495_20.jpg','2025-06-21 07:01:29'),
(28,'Hon’ble Dadabhau Dashrath Kalamkar','Managing Council','Member','/uploads/1750489315282_21.jpg','2025-06-21 07:01:55'),
(29,'Hon’ble J. K. Bapu Jadhav','Managing Council','Member','/uploads/1750489344119_22.jpg','2025-06-21 07:02:24'),
(30,'  Hon’ble Ajit Bhikugounda Patil','Managing Council','Member','/uploads/1750489367402_23.jpg','2025-06-21 07:02:47'),
(31,'Hon’ble Rahul Kundalik Jagtap','Managing Council','Member','/uploads/1750489394605_24.jpg','2025-06-21 07:03:14'),
(32,'Hon’ble Dr. Sadashiv Dattatray Kadam','Managing Council','Member','/uploads/1750489423743_25.jpg','2025-06-21 07:03:43'),
(33,'Hon’ble Dhanaji Balbhim Patil','Managing Council','Member','/uploads/1750489477223_26.jpg','2025-06-21 07:04:37'),
(34,'Hon’ble Anandrao Kisan Tambe','Managing Council','Member','/uploads/1750489555040_27.jpg','2025-06-21 07:05:55'),
(35,'Hon’ble Prin.Dr. Vitthal Subrao Shivankar','Managing Council','Member','/uploads/1750489582301_28.jpg','2025-06-21 07:06:22'),
(36,'Hon’ble Vinodkumar Rajabhau Sankpal','Managing Council','Member','/uploads/1750489609882_29.jpg','2025-06-21 07:06:49'),
(37,'Hon’ble Subhash Sahebrao Lakade','Managing Council','Member','/uploads/1750489634661_30.jpg','2025-06-21 07:07:14'),
(38,'Hon’ble Prin. Dr. Suresh Ramchandra Dhere','Managing Council','Member','/uploads/1750500039632_31.jpg','2025-06-21 10:00:39'),
(39,'Hon’ble Navnath Ramchandra Jagdale','Managing Council','Member','/uploads/1750500074137_32.jpg','2025-06-21 10:01:14'),
(40,'Hon’ble Sou. Joshna Sudhir Thakur','Managing Council','Member','/uploads/1750500110681_34.jpg','2025-06-21 10:01:50'),
(41,'Hon’ble Shri. Vikas Deshmukh, IAS(Retd)','Managing Council','Secretary','/uploads/1750500166689_9.jpg','2025-06-21 10:02:46'),
(42,'Hon’ble Sanjiv Jaykumar Patil','Invited Members','Central Region, Satara','/uploads/1750500301760_35.jpg','2025-06-21 10:05:01'),
(43,'Hon’ble Dr. Muntajali Bashumiyan Shaikh','Invited Members','Southern Region, Sangli','/uploads/1750500399728_36.jpg','2025-06-21 10:06:39'),
(44,'Hon’ble Ashutosh Ashokrao Kale','Invited Members','Northern Region, Ahilyanagar','/uploads/1750500502306_37.jpg','2025-06-21 10:08:22'),
(45,'Hon’ble Chetan Vitthalrao Tupe','Invited Members','Western Region, Aundhgaon, Pune','/uploads/1750500547610_38.jpg','2025-06-21 10:09:07'),
(46,'Hon’ble Balaram Dattatray Patil','Invited Members','Raigad Region, Kamothe','/uploads/1750500686483_39.jpg','2025-06-21 10:11:26'),
(47,'Hon’ble Navnath Ramchandra Jagdale','Regional Officer','Regional Officer Central Region, Satara','/uploads/1750500911346_32.jpg','2025-06-21 10:15:11'),
(48,'Hon’ble Ashok Shinde','Regional Officer','Regional Officer Southern Region, Sangli','/uploads/1750500980621_47.jpg','2025-06-21 10:16:20'),
(49,'Hon’ble Navnath Bodakhe','Regional Officer','Regional Officer Northern Region, A.nagar','/uploads/1750501025891_40.jpg','2025-06-21 10:17:05'),
(50,'Hon’ble Sanjay Mohite','Regional Officer','Regional Officer Western Region,Pune','/uploads/1750501111606_48.jpg','2025-06-21 10:18:31'),
(51,'Hon’ble Mohan Kongere ','Regional Officer','Regional Officer Raigad Region,Kamothe','/uploads/1750501216911_49.jpg','2025-06-21 10:20:16'),
(52,'Hon’ble Nanasaheb Nikam','Assistant Regional Officer','Assistant Regional Officer Central Region, Satara','/uploads/1750501342439_41.jpg','2025-06-21 10:22:22'),
(53,'Hon’ble Dinesh Dabhade','Assistant Regional Officer','Assistant Regional Officer,Central Region, Satara','/uploads/1750501388865_42.jpg','2025-06-21 10:23:08'),
(60,'Hon’ble Uttam Walvekar','Assistant Regional Officer','Assistant Regional Officer,Southern Region, Sangli','/uploads/1750502024414_43.jpg','2025-06-21 10:33:44'),
(61,'Hon’ble Anthony Disoza','Assistant Regional Officer','Assistant Regional Officer,Southern Region, Sangli','/uploads/1750502054266_44.jpg','2025-06-21 10:34:14'),
(62,'Hon’ble Babasaheb Naikwadi','Assistant Regional Officer','Assistant Regional Officer,Northern Region, A.nagar','/uploads/1750502089109_45.jpg','2025-06-21 10:34:49'),
(63,'Hon’ble Pramod Torane','Assistant Regional Officer','Assistant Regional Officer,Northern Region, A.nagar','/uploads/1750502121667_46.jpg','2025-06-21 10:35:21'),
(64,'Hon’ble Dattatray Gaikwad','Assistant Regional Officer','Assistant Regional Officer,Western Region, Pune','/uploads/1750502159605_50.jpg','2025-06-21 10:35:59'),
(65,'Hon’ble Vilasrao Jagtap','Assistant Regional Officer','Assistant Regional Officer,Raigad Region,Kamothe','/uploads/1750502191867_51.jpg','2025-06-21 10:36:31'),
(66,'Hon’ble Prin. Dr. Shivling Gangadhar Menkudale','Administrator','Joint Secretary(H.Edn.)','/uploads/1751094854868_10.jpg','2025-06-28 07:14:14'),
(67,'Hon\'ble Bandu Narayan Pawar','Administrator','Joint Secretary(Sec.)','/uploads/1751094909042_11.jpg','2025-06-28 07:15:09'),
(68,'Hon\'ble Prin. Dr. Rajendra More','Administrator','Joint Secretary(Auditor)','/uploads/1751094939690_12.jpg','2025-06-28 07:15:39');
/*!40000 ALTER TABLE `managements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region_name` varchar(255) NOT NULL,
  `title` varchar(500) NOT NULL,
  `date` date NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES
(66,'','परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत-दक्षिण विभाग','2025-05-16','/uploads/1747652080017_1.pdf'),
(67,'','परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत (माध्यमिक शिक्षण पश्चिम विभाग)','2025-05-16','/uploads/1747652151554_परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत (माध्यमिक शिक्षण पश्चिम विभाग)_compressed.pdf'),
(69,'','परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत (माध्यमिक शिक्षण मध्य विभाग) ','2025-05-16','/uploads/1747652425570_परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत (माध्यमिक शिक्षण मध्य विभाग) _compressed.pdf'),
(70,'','परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत- माध्यमिक शिक्षण उत्तर विभाग ','2025-05-16','/uploads/1747652499546_परिपत्रक क्र.१३ ऑनलाईन विकल्प भरणेबाबत- माध्यमिक शिक्षण उत्तर विभाग _compressed.pdf'),
(71,'','ALL REGION Junior College Transfer list','2025-05-16','/uploads/1747652568848_ALL REGION Junior College Transfer list_compressed.pdf'),
(76,'','परिपत्रक क्र.01 (अकौंट विभाग)','2025-06-05','/uploads/1749115694154_Circular no 01_2526.pdf'),
(80,'','परिपत्रक क्र.०७ (बांधकाम विभाग)','2025-05-09','/uploads/1749116568960_Circular no 7.pdf'),
(84,'','परिपत्रक क्र.१२(उच्च शिक्षण विभाग)','2025-05-09','/uploads/1749116855806_Circular 12_2526.pdf'),
(85,'','परिपत्रक क्र.०३(उच्च शिक्षण विभाग )\'रयत\' मासिक सुरू करणेबाबत','2025-06-06','/uploads/1749625816836_circular 3_25-26051.pdf'),
(86,'','परिपत्रक क्र. ८(आस्थापना विभाग)','2025-06-11','/uploads/1749793453260_Circular no 08_2526.pdf'),
(87,'','परिपत्रक क्र. ०९(आस्थापना विभाग)','2025-06-06','/uploads/1749793506439_Circular no 09_2526.pdf'),
(88,'','परिपत्रक क्र.१०(आस्थापना विभाग)','2025-06-05','/uploads/1749793558054_Circular no 10_2526_compressed.pdf'),
(89,'','परिपत्रक्र क्र.5(लेखा व वित्त विभाग)','2025-06-06','/uploads/1749793701656_Circular no 05.pdf'),
(90,'','परिपत्रक्र क्र.4(लेखा व वित्त विभाग)','2025-06-05','/uploads/1749794855468_Circular no 04_compressed.pdf'),
(91,'','परिपत्रक क्र.16(कृत्रिम बुध्दिमत्ता विषयक कोर्सबाबत)माध्यमिक शिक्षण विभाग','2025-06-19','/uploads/1750395394065_कृत्रिम बुद्धिमत्ता परिपत्रक १६.pdf'),
(92,'','परिपत्रक क्र.17(सुधारित) कृत्रिम बुध्दिमत्ता विषयक कोर्सबाबत','2025-06-24','/uploads/1750750778922_कृत्रिम बुद्धिमत्ता परिपत्रक १७.pdf'),
(94,'','परिपत्रक क्र.१८(सुधारित) कृत्रिम बुध्दिमत्ता विषयक कोर्सबाबत','2025-06-27','/uploads/1751020632492_rayat.pdf'),
(95,'','परिपत्रक क्र.१९-माध्य.आस्था.विभाग- गांधी रिसर्च फौंडेशनच्या गांधी विचार संस्कार परीक्षेस आपल्या शाळा - महाविद्यालयातील सर्व विद्यार्थ्यांना बसविणेबाबत','2025-06-28','/uploads/1751114610973_20250628154041.pdf'),
(96,'','परिपत्रक क्र.२० - आस्था.माध्य.विभाग- जगातील Top 10 शाळांमध्ये सामील असलेल्या जिल्हा परिषद शाळा, जालिंदरनगर या शाळेसाठी online voting करणे','2025-06-28','/uploads/1751114720864_Circular no 20_2526.pdf'),
(97,'','परिपत्रक क्र.२१ - ऑनलाईन शेअर मार्केटचे खाजगी काम करीत असणा-या सेवकांवर कार्यवाही करणेबाबत ','2025-06-28','/uploads/1751114946696_0149.jpg'),
(98,'','परिपत्रक क्र.३८ - दि.३०/०६/२०२५ - कृत्रिम बुद्धिमत्ता (AI), मशीन लर्निंग (ML), कोडींग इंटरनेट ऑफ थिंग (IOT), थ्री डी प्रिंटींग आणि रोबोटिक्स चे शिक्षण संस्थेतील सर्व शाखांमध्ये सरू करणेबाबत','2025-06-30','/uploads/1751265461816_Circular no 38_2526.pdf'),
(99,'','परिपत्रक क्र.२२ दि.३०/०६/२०२५ -लेखा व वित्त विभाग - रयत शिक्षण संस्थेतील शाखांमधील सुधारित  लेखा व कार्यपद्धतीबाबत','2025-07-02','/uploads/1751461842185_lekha karypadhati paripatrak019.pdf'),
(100,'','परिपत्रक क्र.२३ - संस्थेच्या सर्व शाखामधील सर्व शिक्षकांना Interactive Panel चा अध्यापनामध्ये वापर करण्याबाबतचे प्रशिक्षण देणेबाबत','2025-07-25','/uploads/1753441560569_AI Training Circular 23105.pdf'),
(101,'','परिपत्रक नं. २५ (जमीन विभाग)- नवीन इमारत बांधकाम अगर कोणतेही दुरुस्ती, सुशोभीकरणाचे काम करणेबाबत करावयाची कार्यवाही व मार्गदर्शक सूचना ','2025-07-30','/uploads/1753875956529_Circular no 25 28102023.pdf'),
(102,'','परिपत्रक क्र.२८ - आस्थापना विभाग - माजी विद्यार्थी संघटना स्थापन करणेबाबत ','2025-09-02','/uploads/1757590938455_Circular no 28_2526001.pdf'),
(106,'','परिपत्रक क्र.- ५७-जमीन विभाग - वस्तुरूपाने / देणगी स्वरूपाने होणा-या बांधकामास /दुरुस्तीस परवानगी देणेबाबत ','2025-09-12','/uploads/1757659121848_paripatrak no 57_2526.pdf'),
(108,'','परिपत्रक क्र.२९-संगणक विभाग- समाज माध्यमांचा (YouTube/Facebook) वापर करून संस्थेच्या प्रसिद्धीसाठी उपयोग करून घेणेसाठी आपल्या शाखेत दैनंदिन होत असलेल्या वैशिष्टपूर्ण कार्यक्रम / उपक्रम/ गौरवास्पद बाबी ची बातमी, फोटो व Reels तयार करून दैनंदिन संस्थेकडे पाठविणेबाबत.','2025-09-19','/uploads/1758258438980_Circular no 292526005.pdf'),
(109,'','पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील यांची १३८ वी जयंती दि.२२ सप्टेंबर २०२५ रोजी सर्व स्थानिक शाखांनी सामुदायिकरित्या साजरी करण्याचे नियोजन ','2025-09-19','/uploads/1758268459693_Letter br 22 sept.2025  (1).pdf'),
(111,'','परिपत्रक क्र.३३ - बांधकाम विभाग - बांधकाम पर्यवेक्षक व शाखाप्रमुख यांच्या बांधकाम विषयक सुधारित जबाबदा-या ','2025-11-08','/uploads/1762573183817_Paripatrak no 33.pdf'),
(112,'','परिपत्रक क्र.३४- बांधकाम विभाग - संरक्षक भिंतीची नमुना नकाशे व अंदाजपत्रके तयार करणेबाबत ','2025-11-08','/uploads/1762573858982_Circular no 34.pdf'),
(113,'','परिपत्रक क्र.३५ - वित्त व लेखा विभाग - रयत शिक्षण संस्थेच्या रयत कुटुंब कल्याण सुधारित योजनेच्या कार्यवाहीबाबत ','2025-11-17','/uploads/1763368607077_Circular no 35_2526.pdf'),
(114,'','परिपत्रक क्र.३६ - लेखा व वित्त विभाग - सेवक वेल्फेअर फंड वर्गणी पाठविणेबाबत (२०२५-२६)','2025-11-17','/uploads/1763368738127_Paripatrak No 36 (25-26) Seval We_fear fund.pdf'),
(115,'','परिपत्रक क्र.३८- उच्च शिक्षण विभाग- रयत स्पर्धा परीक्षा अॅकॅडमी स्थापन करून सक्षमपणे कार्यान्वीत करणेबाबत','2025-11-17','/uploads/1763368916478_Circular no 38_15.11.2025.pdf'),
(117,'संगणक विभाग ','परिपत्रक क्र.३७-रयत शिक्षण संस्थेच्या कर्मवीर भाऊराव पाटील अभियांत्रिकी महाविद्यालयातील \'सेंटर ऑफ एक्सलन्स\' मधील डेटा सेंटर हे संस्थेचे अधिकृत डेटा सेंटर म्हणून कार्यान्वित करण्यात येत आहे.','2025-11-27','/uploads/1764231831634_Circular no 37_2526029.pdf'),
(118,'आस्थापना विभाग','परिपत्रक क्र.-३९- सेवकांच्या व्यक्तिगत नावातील बदलाबाबत ','2025-11-27','/uploads/1764835399501_Circular no 39_2526.pdf'),
(119,'आस्थापना विभाग ','परिपत्रक क्र.४० - परितोषिकाच्या कायम ठेव सुधारित रक्कमेबाबत ','2025-11-27','/uploads/1764835519640_Circular no 40_2526.pdf');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notices`
--

DROP TABLE IF EXISTS `notices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `notices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notices`
--

LOCK TABLES `notices` WRITE;
/*!40000 ALTER TABLE `notices` DISABLE KEYS */;
INSERT INTO `notices` VALUES
(12,'केवळ हंगामी / अस्थायी तात्पुरत्या स्वरुपाच्या शिक्षक नेमणूकीसाठी','2025-05-27','/uploads/1748347585226-प्राथमिक.pdf'),
(14,' मुलाखतीच्या सूचना','2025-06-05','/uploads/1749816717318-मुलाखत विषय20250613_13044043-2.pdf'),
(49,'शैक्षणिक वर्ष सन २०२५-२६ करिता पाहिजेत(जामगाव जाहिरात २५-२६) वाढीव मुदत','2025-09-12','/uploads/1757660202579-1754458874751_img702-2-5.pdf'),
(50,'पश्चिम विभाग, पुणे शैक्षणिक वर्ष २०२५-२६','2025-09-12','/uploads/1757660247626-1749625918319_जाहिरात मसुदा20250610_17174514-2.pdf'),
(51,'Walk in Interview(शैक्षणिक वर्ष सन २०२५-२६)','2025-09-12','/uploads/1757660279136-1748667850968_hostel advertise.pdf'),
(52,'रायगड विभाग, कामोठे शैक्षणिक वर्ष २०२५-२६','2025-09-11','/uploads/1757660318577-1748674660976_hostel advertise.pdf'),
(53,'केवळ हंगामी / अस्थायी तात्पुरत्या स्वरुपाच्या शिक्षक नेमणूकीसाठी','2025-09-12','/uploads/1757660365927-1748674741293_primary secondary advertise.pdf'),
(54,'रयत शिक्षण संस्थेचे संस्थापक पद्मभूषण डॉ.कर्मवीर भाऊराव पाटील यांची १३८ वी जयंती सातारा येथील सर्व शाखांच्या वतीने साजरी होणार आहे.','2025-09-15','/uploads/1757921525705-कार्यक्रम पत्रिका दि. २२ सप्टेंबर २०२५.jpg'),
(55,'संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात','2025-09-25','/uploads/1758705034520-KBP Eng. Revised .pdf'),
(56,'Walk-in-Interview for Assist. Professor in various colleges affiliated to the University of Mumbai','2025-09-26','/uploads/1758885881099-kbp mumbai 2526.pdf'),
(57,'Walk-in-Interview for CHB Assist Processor colleges affiliated to the Savitribai Phule Pune University, Pune,(2025-26)','2025-09-26','/uploads/1758885916212-kbp pune 25-9.pdf'),
(58,'रयत शिक्षण संस्थेचा शनिवार दि. ४ ऑक्टोबर , २०२५ रोजी होणाऱ्या वर्धापन दिन कार्यक्रमाची निमंत्रण पत्रिका','2025-09-29','/uploads/1759125130571-निमंत्रण पत्रिका - दि.०४-१०-२०२५ .jpeg'),
(59,'Walk-in-Interview for CHB Assist Processor colleges affiliated to Karmaveer Bhaurao Patil University, Satara(2025-26)','2025-09-29','/uploads/1759147418672-KBP Satara Adv (1).pdf'),
(60,'Walk-in-Interview for CHB Assist Processor colleges affiliated to Shivaji University, Kolhapur (2025-26)','2025-09-29','/uploads/1759147449041-Shivaji Adv (2).pdf'),
(61,'Walk-in-Interview for CHB Assist Processor colleges affiliated to Affiliated to the Punyashlok Ahilyadevi Holkar Solapur University, Solapur(2025-26)','2025-09-29','/uploads/1759147482522-Solapur adv (1).pdf'),
(63,'डीएड स्केल सेवक अद्ययावत अंतिम सेवाजेष्ठता यादी','2025-10-28','/uploads/1761655092420-डीएड स्केल अद्ययावत  अंतिम सेवाजेष्ठता यादी (1).pdf'),
(64,'डी.एड.स्केलवर नियुक्ती दिलेल्या परंतु नियुक्ती नंतर बी.एड.स्केल शैक्षणिक अर्हता प्राप्त केलेल्या सेवकांची यादी प्रसिद्ध केलेबाबत','2025-10-28','/uploads/1761655256064-1761655092420-डीएड स्केल अद्ययावत  अंतिम सेवाजेष्ठता यादी (1).pdf'),
(65,'संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात- मुदतवाढ ','2025-10-29','/uploads/1761734509839-Chief Auditor_Rewised.pdf');
/*!40000 ALTER TABLE `notices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pdf_links`
--

DROP TABLE IF EXISTS `pdf_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `pdf_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pdf_links`
--

LOCK TABLES `pdf_links` WRITE;
/*!40000 ALTER TABLE `pdf_links` DISABLE KEYS */;
INSERT INTO `pdf_links` VALUES
(1,'NEW YADI 13-11-25','/uploads/1763098618273-NEW YADI 13-11-25.pdf','2025-11-14 05:36:58'),
(2,'kutumb kalayan Amount magani Arj','/uploads/1763098764240-kutumb kalayan Amount magani Arj.pdf','2025-11-14 05:39:24'),
(3,'kutumb kalayan Application from','/uploads/1763098784353-kutumb kalayan Application from.pdf','2025-11-14 05:39:44'),
(4,'kutumb kalyan paripatrak 25-26','/uploads/1763098800269-kutumb kalyan paripatrak 25-26.pdf','2025-11-14 05:40:00'),
(5,'OLD YADI 13-11-25 ','/uploads/1763445980889-OLD YADI 13-11-25 (2).pdf','2025-11-18 06:06:20');
/*!40000 ALTER TABLE `pdf_links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rayat_magazine`
--

DROP TABLE IF EXISTS `rayat_magazine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rayat_magazine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `month` varchar(50) NOT NULL,
  `pdf_link` varchar(255) NOT NULL,
  `cover_link` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rayat_magazine`
--

LOCK TABLES `rayat_magazine` WRITE;
/*!40000 ALTER TABLE `rayat_magazine` DISABLE KEYS */;
INSERT INTO `rayat_magazine` VALUES
(1,'May Magazine 2025','/uploads/may ank.pdf','/uploads/Screenshot 2025-10-06 105710.png','2025-10-06 05:27:47'),
(2,'June Magazine 2025','/uploads/june ank.pdf','/uploads/Screenshot 2025-10-06 105824.png','2025-10-06 05:29:14'),
(3,'July Magazine 2025','/uploads/july ank.pdf','/uploads/Screenshot 2025-10-06 110009.png','2025-10-06 05:30:36'),
(5,'August Magazine 2025','/uploads/august ank.pdf','/uploads/Screenshot 2025-10-06 110217.png','2025-10-06 05:32:30'),
(6,'September Magazine 2025','/uploads/september ank.pdf','/uploads/september ank_pages-to-jpg-0001.jpg','2025-10-06 13:14:48'),
(7,'October Magazine 2025','/uploads/octomber ank.pdf','/uploads/octomber ank_page-0001.jpg','2025-10-30 13:37:14'),
(10,'November Rayat Masik 2025','/uploads/rayat nov ank.pdf','/uploads/rayat nov ank_page-0001.jpg','2025-11-25 07:41:40');
/*!40000 ALTER TABLE `rayat_magazine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruitment`
--

DROP TABLE IF EXISTS `recruitment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `recruitment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `external_link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruitment`
--

LOCK TABLES `recruitment` WRITE;
/*!40000 ALTER TABLE `recruitment` DISABLE KEYS */;
INSERT INTO `recruitment` VALUES
(6,'केवळ हंगामी / अस्थायी तात्पुरत्या स्वरुपाच्या शिक्षक नेमणूकीसाठी','2025-05-24','/uploads/1748150981056_IMG-20250525-WA0003.jpg',NULL),
(8,'वसतिगृह सेवक नियुक्ती सन २०२५-२६ ','2025-05-27','/uploads/1748332421262_सेवक नियुक्ती जाहिरात नमुना २५-२६.pdf',NULL),
(9,'वसतिगृह हंगामी सेवक भरती','2025-05-27','/uploads/1748335835790_वसतिगृह.pdf',NULL),
(15,'केवळ हंगामी / अस्थायी तात्पुरत्या स्वरुपाच्या शिक्षक नेमणूकीसाठी (शैक्षणिक वर्ष सन २०२५-२६ साठी)','2025-05-27','/uploads/1748346793226_प्राथमिक.pdf',NULL),
(16,' (Walk-in-Interview)शैक्षणिक वर्ष सन २०२५-२६ साठी','2025-05-28','/uploads/1748411949045_website for erp suk m.pdf',NULL),
(17,'Senior College Interview for Purely Temporary Local Appointment on CHB basis','2025-05-28','/uploads/1748412017286_for erp website publication final.pdf',NULL),
(18,'(Walk-in-Interview)शैक्षणिक वर्ष सन २०२५-२६ साठी','2025-05-28','/uploads/1748412036991_website for erp kbp.pdf',NULL),
(19,'Engineering & Polytechnic Interview for Local Appointment ','2025-05-28','/uploads/1748412070877_for website.pdf',NULL),
(20,'वसतीगृह हंगामी सेवक भरती (सन 2025-26 साठी) ','2025-05-29','/uploads/1748521887251_WhatsApp Image 2025-05-29 at 5.59.41 PM.jpeg',NULL),
(21,'Walk in Interview(शैक्षणिक वर्ष सन २०२५-२६)','2025-05-31','/uploads/1748667850968_hostel advertise.pdf',NULL),
(24,'रायगड विभाग, कामोठे  शैक्षणिक वर्ष २०२५-२६ ','2025-05-31','/uploads/1748674660976_hostel advertise.pdf',NULL),
(25,'केवळ हंगामी / अस्थायी तात्पुरत्या स्वरुपाच्या शिक्षक नेमणूकीसाठी','2025-05-31','/uploads/1748674741293_primary secondary advertise.pdf',NULL),
(26,'रायगड विभाग, कामोठे  शैक्षणिक वर्ष 2025-26 ','2025-05-31','/uploads/1748704848390_jr advertise.pdf',NULL),
(29,'Walk in Interview(शैक्षणिक वर्ष सन २०२५-२६)','2025-05-31','/uploads/1748707392285_WhatsApp Image 2025-05-31 at 9.04.54 PM.jpeg',NULL),
(30,'पश्चिम विभाग, पुणे शैक्षणिक वर्ष २०२५-२६','2025-06-05','/uploads/1749625918319_जाहिरात मसुदा20250610_17174514-2.pdf',NULL),
(31,'केवळ  तात्पुरत्या स्वरुपाच्या नेमणूकीसाठी शैक्षणिक वर्ष २०२५-२६','2025-06-06','/uploads/1749626031661_WhatsApp Image 2025-06-10 at 6.07.29 PM (1).jpeg',NULL),
(32,'मुलाखतीच्या सूचना','2025-06-13','/uploads/1749881059148_1749816717318-मुलाखत विषय20250613_13044043-2.pdf',NULL),
(36,'शैक्षणिक वर्ष सन २०२५-२६ करिता पाहिजेत(जामगाव जाहिरात २५-२६) वाढीव मुदत','2025-08-06','/uploads/1754458874751_img702-2-5.pdf',NULL),
(41,'संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात','2025-09-25','/uploads/1758719159984_Advertise CA for Net.pdf',NULL),
(44,'Walk-in-Interview for CHB Assist Processor colleges affiliated to the Savitribai Phule Pune University, Pune,(2025-26)','2025-09-26','/uploads/1758864926271_kbp pune 25-9.pdf',NULL),
(45,'Walk-in-Interview for Assist. Professor in various colleges affiliated to the University of Mumbai','2025-09-26','/uploads/1758865165760_kbp mumbai 2526.pdf',NULL),
(50,'संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात','2025-09-29','/uploads/1759131951343_Chief Auditor_link.crdownload','https://rayatrecruitment.com/'),
(51,'Walk-in-Interview for CHB Assist Processor colleges affiliated to Affiliated to the Punyashlok Ahilyadevi Holkar Solapur University, Solapur(2025-26)','2025-09-29','/uploads/1759147086012_Solapur adv (1).pdf','https://teaching.rayatrecruitment.com'),
(52,'Walk-in-Interview for CHB Assist Processor colleges affiliated to Shivaji University, Kolhapur (2025-26)','2025-09-29','/uploads/1759147183834_Shivaji Adv (2).pdf','https://teaching.rayatrecruitment.com'),
(53,'Walk-in-Interview for CHB Assist Processor colleges affiliated to Karmaveer Bhaurao Patil University, Satara(2025-26)','2025-09-29','/uploads/1759147282404_KBP Satara Adv (1).pdf','https://teaching.rayatrecruitment.com'),
(54,'संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात- मुदतवाढ दि.३०/१०/२०२५ ','2025-10-05','/uploads/1759636286476_ilovepdf_merged.pdf','https://rayatrecruitment.com/');
/*!40000 ALTER TABLE `recruitment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `regions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
INSERT INTO `regions` VALUES
(1,'CENTRAL REGION'),
(2,'SOUTHERN REGION'),
(3,'NORTHERN REGION'),
(4,'WESTERN REGION'),
(5,'RAIGAD REGION');
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `school` (
  `school_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) NOT NULL,
  `region_id` int(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`school_id`),
  KEY `fk1` (`region_id`),
  CONSTRAINT `fk1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=461 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES
(1,'ADARASH VIDYALAY, SHIRWAL',1,'Rular'),
(2,'HANUMAN VIDYALAY, SHINDEWADI',1,'Rular'),
(3,'MALOJIRAJE VIDYALAY, LONAND',1,'Urban'),
(4,'NEW ENGLISH SCHOOL, PIMPARE BK.',1,'Rular'),
(5,'NEW ENGLISH SCHOOL, SURWADI',1,'Rular'),
(6,'NEW ENGLISH SCHOOL, BHOLI',1,'Rular'),
(7,'NEW ENGLISH SCHOOL, PALSHI(KHANDALA)',1,'Rular'),
(8,'NEW ENGLISH SCHOOL, LONAND',1,'Urban'),
(9,'SHRIMAN SHETH DHANYAKUMAR RATANCHAND GANDHI VIDYALAY, DHULDEO',1,'Rular'),
(10,'SHRIMAN SHETH GANPATRAO SURVANSHI VIDYALAY, TAMBAVE',1,'Rular'),
(11,'SHRI JITOBA VIDYALAY, JINTI PH.',1,'Rular'),
(12,'HANUMAN VIDYALAY, NIDHAL',1,'Rular'),
(13,'MAHATMA PHULE MADHYAMIK VIDYALAY, KATGUN',1,'Rular'),
(14,'SHRI SEVAGIRI VIDYALAY, PUSEGAON',1,'Rular'),
(15,'SIDDHANATH VIDYALAY, NIMSOD',1,'Rular'),
(16,'AANNASAHEB KALYANI VIDYALAYA, SATARA',1,'Urban'),
(17,'BHIMABAI AAMBEDKAR KANYA VIDYALAY, SATARA',1,'Urban'),
(18,'CHANDRAKANT BABURAO JADHAV VIDYALAY, SHEREWADI',1,'Rular'),
(19,'DHARMVEER SAMBHAJI VIDYALAYA, DEGAON PA.',1,'Rular'),
(20,'ENGLISH SCHOOL , VADUTH',1,'Rular'),
(21,'ENGLISH SCHOOL, PADALI (NINAM)',1,'Rular'),
(22,'JAYSING MALHARI KARPE HIGHSCHOOL, VARYE',1,'Rular'),
(23,'JIJAMATA PRACTISING SCHOOL, SATARA',1,'Urban'),
(24,'MAHARAJA SAYAJIRAO VIDYALAYA, SATARA',1,'Urban'),
(25,'MERU VIDYAMANDIR, WAGHESHWER',1,'Rular'),
(26,'NEW ENGLISH SCHOOL, ANGAPUR',1,'Rular'),
(27,'R.B.KALE JEEVAN SHIKSHAN MANDIR, SATARA',1,'Urban'),
(28,'RAYAT MARATHI MADHYAMIKA SHALA, SATARA (SELF-FINANCED)',1,'Urban'),
(29,'S.CHH.PRATAPSINH VIDYALAY, LIMB',1,'Rular'),
(30,'SANJAY BHAIRVNATH KALE VIDYALAY, TASGAON',1,'Rular'),
(31,'SATARA PRIMARY SCHOOL, SATARA (SELF- FINANCED)',1,'Urban'),
(32,'SHRI BHAIRAVNATH VIDYAMANDIR, KELGHAR',1,'Rular'),
(33,'SHRI CHH. SHIVAJI VIDYALAY, APSHINGE (M)',1,'Rular'),
(34,'BHARAT VIDYAMANDIR, WAGHOLI',1,'Rular'),
(35,'KARMAVEER BHAURAO PATIL VIDYALAY, KINHAI-KOREGAON',1,'Rular'),
(36,'NEW ENGLIDH SCHOOL, RUI(KOREGAON)',1,'Rular'),
(37,'R.V.TARALKAR HIGHSCHOOL, BHADALE',1,'Rular'),
(38,'SHARDABAI GOVINDRAO PAWAR VIDYALAY, KARANJKHOP',1,'Rular'),
(39,'SHETKARI HIGHSCHOOL, TARGAON',1,'Rular'),
(40,'YASHWANTRAO CHAVAN VIDHYLAY, PIMPODE BK.',1,'Rular'),
(41,'CHHATRAPATI SHIVAJI VIDYALAY, MARDI',1,'Rular'),
(42,'GOPALKRISHNA VIDYALAY, GONDAWALE KH.',1,'Rular'),
(43,'KARMAVEER BHAURAO PATIL KRISHI VIDYALAY, DEVAPUR',1,'Rular'),
(44,'KARMAVEER BHAURAO PATIL VIDYALAY, BIJVADI',1,'Rular'),
(45,'MAHATMA GANDHI VIDYALAY, DAHIWADI',1,'Urban'),
(46,'MAHARSHI SHINDE VIDYALAY, ENKUL',1,'Rular'),
(47,'NEW ENGLISH SCHOOL, MAHIMANGAD',1,'Rular'),
(48,'PARSHURAM MAHADEO SHINDE KANYA VIDYALAY, DAHIWADI',1,'Urban'),
(49,'PANDIT NEHARU VIDYALAY, RANAND',1,'Rular'),
(50,'SHAMBHU MAHADEV VIDAYALAY, KUKUDVAD',1,'Rular'),
(51,'SHRI HANUMAN VIDYALAY, PALSHI(MAN)',1,'Rular'),
(52,'SHRI PANLING VIDYALAY, WAVARHIRE',1,'Rular'),
(53,'TRINBAKRAO KALE VIDYALAY, MALAWADI',1,'Rular'),
(54,'HANUMAN VIDYAMANDIR, MARWADE',1,'Rular'),
(55,'LINGHESGWER VIDYALAY PRASHALA, PULUJ',1,'Rular'),
(56,'MANJARI HIGHSCHOOL, MANJARI',1,'Rular'),
(57,'NEW ENGLISH SCHOOL, GADEGAON',1,'Rular'),
(58,'SARDAR SHAMRAO LIGADE VIDYALAY, AKOLA(WASUD)',1,'Rular'),
(59,'SATU KRISHNA KENI VIDYALAYA, ANAVALI',1,'Rular'),
(60,'SHRI SHIVAJIBHAU BABA PATIL VIDYALAY, ROPALE BK.',1,'Rular'),
(61,'YASHWANT VIDYALAYA, BHOSE(K)',1,'Rular'),
(62,'YASHWANT VIDYALAYA, PANDHARPUR',1,'Urban'),
(63,'KARMAVEER BHAURAO PATIL VIDYALAY, PILIV',1,'Rular'),
(64,'YASHAWANTRAO CHAVAN VIDYALAY, PHALAWANI',1,'Rular'),
(65,'MAHATMA PHULE VIDYALAY, VARWADE',1,'Rular'),
(66,'NEW ENGLISH SCHOOL, TEMBHURNI',1,'Rular'),
(67,'NEW ENGLISH SCHOOL, RIDHORE',1,'Rular'),
(68,'NEW ENGLISH SCHOOL, GHOTI',1,'Rular'),
(69,'NEW ENGLISH SCHOOL, UNDEGAON',1,'Rular'),
(70,'NEW ENGLISH SCHOOL, WANGI NO.3',1,'Rular'),
(71,'SHRI NANDIKESHAWAR VIDYALAY, UPALAI',1,'Rular'),
(72,'SHRIMATI RAMBAI BABULAL SURANA SCHOOL, CHIKHALTHAN',1,'Rular'),
(73,'NEW ENGLISH SCHOOL, BHALAWANI(PANDHARPUR)',1,'Rular'),
(74,'SHRI SHIVAJI VIDYALAYA, MAHUD BK.',1,'Rular'),
(75,'SHRINATH VIDHYALAY, BORGAON',1,'Rular'),
(76,'BHAIRVNATH VIDYALAY, ANKOLI',1,'Rular'),
(77,'NEW ENGLISH SCHOOL, KURUL',1,'Rular'),
(78,'RAVAJI SAKHARAM HIGHSCHOOL, SOLAPUR',1,'Urban'),
(79,'SOU. GOPIBAI RAMKISAN (PAPASHETH) BALDAVA HIGHSCOOL, DEGAON(SOLAPUR)',1,'Rular'),
(80,'DAIDIPYA VIJAY KAMBALE VIDYALAY, JINTI(PATAN)',1,'Rular'),
(81,'KARMAVEER BHAURAO PATIL VIDYALAY, DHEBEVADI',1,'Rular'),
(82,'MAHATMA GANDHI VIDYALAYA, SANBUR',1,'Rular'),
(83,'NETAJI SUBHASHCHANDRA VIDYALAY, YELGAON',1,'Rular'),
(84,'NEW ENGLISH SCHOOL, KALGAON',1,'Rular'),
(85,'NEW ENGLISH SCHOOL, KUTHARE',1,'Rular'),
(86,'SHRI SADGURU GADAGE MAHARAJ VIDYALAY, KUSUR(KARAD)',1,'Rular'),
(87,'DANSHUR BANDO GOPALA MUKADAM VIDYALAY, WATHAR(KARAD)',1,'Rular'),
(88,'JOTIRLING VIDYALAY, SHIRVADE',1,'Rular'),
(89,'MAHATMA GANDHI VIDYALAY, WADGAON-HAVELI',1,'Rular'),
(90,'MAHATMA GANDHI VIDYALAY, KALE',1,'Rular'),
(91,'NEW ENGLISH SCHOOL, GHARALWADI',1,'Rular'),
(92,'SWATANTRA SAINIK AANDRAO PATIL VIDYALAY, DHONDEWADI',1,'Rular'),
(93,'SADGURU GADAGE MAHARAJ PRATHAMIK VIDYAMANDIR, SAIDAPUR(KARAD)',1,'Rular'),
(94,'YASHWANT HIGHSCHOOL, KARAD',1,'Urban'),
(95,'MAHATMA GANDHI VIDYALAY, UMBRAJ',1,'Rular'),
(96,'NAMDAR BALASAHEB DESAI VIDYALAY, KUSARUND',1,'Rular'),
(97,'NEW ENGLISH SCHOOL, CHAREGAON',1,'Rular'),
(98,'NEW ENGLISH SCHOOL, MURUD',1,'Rular'),
(99,'RANJIT KAUR GADOKH KHALASA MAHARASHTRA VIDYALAYA, ATIT',1,'Rular'),
(100,'SHRIMATI RUKMINIBAI PANDURANG KADAM KANYA VIDYALAY, UMBRAJ',1,'Rular'),
(101,'THAKKARBAPPA VIDYALAYA, GANDHITEKADI',1,'Rular'),
(102,'YASHWANT HIGHSCHOOL, KASHIL',1,'Rular'),
(103,'KARMVEER BHAURAO PATIL VIDYALAYA, BHUINJ',1,'Rular'),
(105,'MAHATMA GANDHI VIDYALAYA, PACHAVAD',1,'Rular'),
(106,'NEW ENGLISH SCHOOL, HUMGAON',1,'Rular'),
(107,'NEW ENGLISH SCHOOL, PAWARWADI',1,'Rular'),
(108,'SHRI BHAIRAVNATH VIDYALAYA, PASARNI',1,'Rular'),
(109,'SHRI DHUNDIBABA VIDYALAYA, VIDYANAGAR',1,'Rular'),
(110,'SHREE DHARMRAJ VIDYALAYA, YETGAON  ',2,'Rular'),
(111,'DAJI PATLOJI VIDHYALAY, VEJEGAON(KHANAPUR)',2,'Rular'),
(112,'MAHATMA GANDHI VIDYALAY, MAHULI',2,'Rular'),
(113,'MAHATMA GANDHI VIDYALAYA, KHANAPUR',2,'Rular'),
(114,'NEW ENGLISH SCHOOL, GARDI-GHANWAD',2,'Rular'),
(115,'NEW ENGLISH SCHOOL, BHALAVANI(KHANAPUR)',2,'Rular'),
(116,'NANASAHEB SHAMRAVJI VIDYALAYA, DEVIKHINDI(KHANAPUR)',2,'Rular'),
(117,'NEW ENGLISH SCHOOL, LINGIWARE',2,'Rular'),
(118,'NEW ENGLISH SCHOOL, VADIYERAIBAG',2,'Rular'),
(119,'SHRI BALKRISHNA LAXMAN MAHADIK VIDHYALAYA, NEVARI',2,'Rular'),
(120,'SHRI SIDDHNATH VIDYALAYA, KHARSUNDI',2,'Rular'),
(121,'SHRIRAM VIDYALAYA, KHERADEWANGI',2,'Rular'),
(122,'SOU  PRABHATAI BHAGWANDAJI SURYAVANSHI VIDYALAY, PARE',2,'Rular'),
(123,'VITA HIGHSCHOOL, VITA, TAL. KHANAPUR',2,'Urban'),
(124,'AANNASAHEB RAJMANE VIDYALAY, RUI(KOLHAPUR)',2,'Rular'),
(125,'LAXMIDEVI GIRLS SCHOOL, HUPARI',2,'Rular'),
(126,'MAHATMA GANDHI VIDYALAYA, RUKADI',2,'Rular'),
(127,'RAMCHANDRA BABURAO PATIL VIDYALAYA, SADOLI-KHALSA',2,'Rular'),
(128,'SHANTA-RAMKRISHNA DATAR ENGLISH SCHOOL, HUPARI',2,'Rular'),
(129,'SHRI MAHADEO DADOBA GATADE VIDYALAY, INGALI',2,'Rular'),
(130,'NEW ENGLISH SCHOOL FOR GIRLS, MALKAPUR',2,'Rular'),
(131,'MAHATMA GANDHI MADHYAMIK VIDYALAYA, BAMBAVADE',2,'Rular'),
(132,'MAHATMA GANDHI VIDYALAY, SAKHARAPA',2,'Rular'),
(133,'MAHATMA GANDHI VIDYALAYA, SARUD',2,'Rular'),
(134,'MALKAPUR HIGHSCHOOL, MALKAPUR',2,'Rular'),
(135,'NEW ENGLISH SCHOOL, BORIWADE',2,'Rular'),
(137,'SHRI SHAHU HIGHSCHOOL, SHAHUWADI',2,'Rular'),
(138,'KRANTISINH NANA PATIL VIDYALAY, BHAVANIGAR',2,'Rular'),
(139,'SOU. LAXMIBAI PATIL GIRL SCHOOL, RAMANANDNAGAR',2,'Rular'),
(140,'SWAMI RAMANAND VIDYALAY & JUNIOR COLLEGE, RAMANANDNAGAR',2,'Rular'),
(141,'VIDYARTHI VIKAS VIDYALAY, MOHITYANCHE-VADGAON',2,'Rular'),
(142,'BHAUSAHEB KUDALE VIDYALAYA, DUDHAGAON',2,'Rular'),
(143,'DADASAHEB ADMUTHE(LANGDE) KANYA VIDYALAYA, DUDHAGAON',2,'Rular'),
(144,'KARMAVEER BHAURAO PATIL VIDYALAYA,  AITWADE BK',2,'Rular'),
(145,'KAMAVEER BHAURAO PATIL VIDHALYA, BAGANI',2,'Rular'),
(146,'KARMVEER BHAURAO PATIL VIDYALAYA, NERLE',2,'Rular'),
(147,'MAHATMA GANDHI VIDYALAY,  ASHTA',2,'Urban'),
(148,'NEW ENGLISH SCHOOL FOR GIRLS,  ASHTA',2,'Urban'),
(149,'NEW ENGLISH SCHOOL, KASBE-DIGRAJ',2,'Rular'),
(150,'RASHTRIY JALTARANPATU SAGAR PATIL MADHYAMIK VIDYALAY, DHAVALI',2,'Rular'),
(151,'SAVITRIBAI PHULE KANYA VIDYALAYA, NERLE',2,'Rular'),
(152,'SHRI BHAIRAVNATH VIDYALAYA, SHIRASI',2,'Rular'),
(153,'DR PATANGRAO SRIPATRAO KADAM VIDYALAY, SHIRASGAON-SONSAL',2,'Rular'),
(154,'MAHATMA GANDHI VIDYALAYA, KADEGAON',2,'Urban'),
(155,'NEHARU VIDYALAY, HINGANGAON BK.(KADEGAON)',2,'Rular'),
(156,'SHRI MHALASAKANT VIDYALAYA, SHIVANI',2,'Rular'),
(157,'SHRI MUKUNDRAJ VIDHYALAY, SHALGAON',2,'Rular'),
(158,'TATYA RAVAJI VIDYALAY,  TADSAR',2,'Rular'),
(159,'KARMAVEER BHAURAO PATIL PUBLIC SCHOOL, SHINDEMALA-SANGALI (ENGLISH MEDIUM)',2,'Urban'),
(160,'KARMAVEER BHAURAO PATIL VIDYALAY, MHAISAL',2,'Rular'),
(161,'MAHATMA GANDHI VIDYALAY, SAVALAJ',2,'Rular'),
(162,'MA. R.R.(ABA) PATIL VIDYALAY, ANJANI(TASGAON)',2,'Rular'),
(163,'NANDRE VIDYALAY, NANDRE',2,'Rular'),
(164,'NEW ENGLISH SCHOOL, BEDAG',2,'Rular'),
(165,'NEW ENGLISH SCHOOL, BELANKI',2,'Rular'),
(166,'NEW ENGLISH SCHOOL, ERANDOLI',2,'Rular'),
(167,'PANDIT NEHRU VIDYALAY, KAVALAPUR',2,'Rular'),
(168,'RAJMITRA R.S.MANE-PATIL VIDYAMANDIR, VISAPUR(TASGAON)',2,'Rular'),
(169,'SHRI BHAVANIDEVI ENGLISH SCHOOL, SAVARDE',2,'Rular'),
(170,'LAXMIBAI PATIL GIRLS HIGHSCHOOL, JAYSINGPUR',2,'Urban'),
(171,'PADMARAJE VIDYALAY, SHIROL',2,'Rular'),
(172,'RAMJANSHETH BANDAR VIDYALAY, SHIRDHON',2,'Rular'),
(173,'RAYAT GURUKUL PUBLIC SCHOOL, KUMBHOJ (ENGLISH MEDIUM-STATE BOARD)',2,'Rular'),
(174,'SHRI KALLESHWAR HIGHSCHOOL,TAKAWADE',2,'Rular'),
(175,'SOU. RUKMINI PANDURANG MANE (RAHIMATPURKAR) KANYA MADHYAMIK VIDYALAYA, SHIROL',2,'Rular'),
(176,'NEW ENGLISH SCHOOL, MATOND',2,'Rular'),
(177,'SHRI SHIVAJI HIGHSCHOOL, TULAS',2,'Rular'),
(178,'NEW ENGLISH SCHOOL, PALAVANI',2,'Rular'),
(179,'SHIRGAON VIDYALAY, SHIRGAON',2,'Rular'),
(180,'SMT. RAKHUMAI PANDURANG PALSHETKAR VIDYALAYA, PALSHET',2,'Rular'),
(181,'ADARSH VIDYAMANDIR, BHUIBAWADA',2,'Rular'),
(182,'YASHVANTRAO CHAVHAN VIDYALAYA, ACHIRNE',2,'Rular'),
(183,'MAHATMA GANDHI VIDYALAYA, KARJAT',3,'Urban'),
(184,'NEW ENGLISH SCHOOL, CHAPADGAON',3,'Rular'),
(185,'NEW ENGLISH SCHOOL, KOMBHALI',3,'Rular'),
(186,'NEW ENGLISH SCHOOL, PIMPARI-GHUMARI',3,'Rular'),
(187,'NEW ENGLISH SCHOOL, SHINDE',3,'Rular'),
(188,'NEW ENGLISH SCHOOL, TAKALI-KHANDESHWARI',3,'Rular'),
(189,'SAU. SONABAI NAMDEORAO SONMALI KANYA VIDYAMANDIR, KARJAT',3,'Urban'),
(190,'SHRI JAGADAMBA VIDYALAY, RASHIN',3,'Rular'),
(191,'KARMAVEER BHAURAO PATIL VIDYALAY, ASKHEDA',3,'Urban'),
(192,'KARMAVEER BHAURAO PATIL VIDYALAY, PINGALWADE',3,'Rular'),
(193,'MA. SHRI SHARADRAVJI PAWAR VIDYALAYA, CHAUGAON',3,'Rular'),
(194,'NEW ENGLISH SCHOOL, KERSANE',3,'Rular'),
(195,'KARMAVEER BHAURAO PATIL VIDYALAY, SAKORE',3,'Rular'),
(196,'KARMAVEER BHAURAO PATIL VIDYALAY, VINCHUR',3,'Urban'),
(197,'NEW ENGLISH SCHOOL, DAPUR',3,'Rular'),
(198,'NEW ENGLISH SCHOOL, RUI(NIFAD)',3,'Rular'),
(199,'NEW ENGLISH SCHOOL, SOMTHANE',3,'Rular'),
(200,'NEW ENGLISH SCHOOL, TAKALI-VINCHUR',3,'Rular'),
(201,'PUNJAJI RAMJI BHOR VIDYALAY, THANGAON',3,'Rular'),
(202,'SHRI SANT HARIBABA VIDYALAY, PANGARI',3,'Rular'),
(203,'SHRI CHHATRAPATI VIDYALAY, VANASGAON',3,'Rular'),
(204,'CHHATRAPATI SHIVAJI VIDYALAY, GANORE',3,'Rular'),
(205,'KOTULESHWAR VIDYALAY, KOTUL',3,'Rular'),
(206,'LOKMANY VIDYALAY, DHANDARPHAL',3,'Rular'),
(207,'SHRI RAMDAS HIGHSCHOOL, BELAPUR-BADAGI',3,'Rular'),
(208,'CHATRAPATI SHIVAJI VIDYALAY, BELVANDI',3,'Rular'),
(209,'CHHATRAPATI SHIVAJI VIDYALAY, GHOGARGAON',3,'Rular'),
(210,'JANATA KANYA VIDYALAY, KASHTI',3,'Urban'),
(211,'JANATA VIDYALAY, KASHTI',3,'Urban'),
(212,'MAHADAJI SHINDE VIDYALAY, SHRIGONDA',3,'Urban'),
(213,'NEW ENGLISH SCHOOL, MADHEWADGAON',3,'Rular'),
(214,'PANDIT JAWAHARLAL NEHRU VIDYALAY, ADHALGAON',3,'Rular'),
(215,'SHRIMANT RAJMATA VIJAYARAJE SHINDE KANYA VIDYALAY, SHRIGONDA',3,'Urban'),
(216,'MAHATMA PHULE VIDYALAY, JANORI',3,'Rular'),
(217,'NEW ENGLISH SCHOOL, ADGAON',3,'Urban'),
(218,'NEW ENGLISH SCHOOL, CHANDORI(NIFAD)',3,'Urban'),
(219,'JANATA VIDYA MANDIR, KANHUR-PATHAR',3,'Rular'),
(220,'SHRIMANSHETH HONAJI KONDAJI DHOME MADHYAMIK VIDYALAY, DHOTRE BK.',3,'Rular'),
(221,'NEW ENGLISH SCHOOL, HANGE(PARNER)',3,'Rular'),
(222,'NEW ENGLISH SCHOOL, SUPA(PARNER)',3,'Urban'),
(223,'SHRI DHARMANATH VIDYALAY, JAWALA-PARNER',3,'Rular'),
(224,'SHRI  KEDARESHWAR VIDYALAY, BABHULWADE',3,'Rular'),
(225,'SHRI SAINATH HIGHSCHOOL, ALKUTI',3,'Rular'),
(226,'SHRIMATI SUNDARABAI GAHINAJI LANE VIDYALAY, WADZIRE',3,'Rular'),
(227,'ASHVI ENGLISH SCHOOL, ASHVI BK.',3,'Rular'),
(228,'MAHATMA GANDHI KANYA VIDYALAYA, PRAVARANAGAR',3,'Urban'),
(229,'MAHATMA GANDHI VIDYALAYA, PRAVARANAGAR',3,'Urban'),
(230,'NANASAHEB SAHADU KADU-PATIL VIDYALAY, SATRAL',3,'Rular'),
(231,'NEW ENGLISH SCHOOL, KOLHAR',3,'Rular'),
(232,'PADMASHRI VITHALRAO VIKHE-PATIL, LONI KH.',3,'Urban'),
(233,'SHRI CHHATRAPATI SHIVAJI VIDYALAY, CHINCHOLI-GURAV',3,'Rular'),
(234,'SHRIMATI KONDABAI NANASAHEB KADU-PATIL KANYA VIDYALAY, SATRAL',3,'Rular'),
(235,'CHHATRAPATI SHIVAJI VIDYALAY, AKOLNER',3,'Rular'),
(236,'CHHATRAPATI SHIVAJI VIDYALAY, KARAJGAON',3,'Rular'),
(237,'CHHATRAPATI SHRI SHIVAJI MAHARAJ HIGHSCHOOL, MIRI(PATHARDI)',3,'Rular'),
(238,'JANATA VIDYALAY, GHOTAN',3,'Rular'),
(239,'KARMAVEER BHAURAO PATIL VIDYALAY, SAROLA-KASAR',3,'Rular'),
(240,'LAXMIBAI BHAURAO PATIL VIDYALAY, (KAPAD BAZAR) AHAMADNAGAR',3,'Urban'),
(241,'MAHATMA PHULE VIDYALAY, BHALAWANI (PARNER)',3,'Rular'),
(242,'NEW ENGLISH SCHOOL, KORADGAON',3,'Rular'),
(243,'NEW ENGLISH SCHOOL, CHICHONDI-PATIL',3,'Rular'),
(244,'NEW ENGLISH SCHOOL, HINGANGAON(AHAMADNAGAR)',3,'Rular'),
(245,'NEW ENGLISH SCHOOL, SALABATPUR',3,'Rular'),
(246,'NEW ENGLISH SCHOOL, WALKI',3,'Rular'),
(247,'PRABHAKAR GANPATRAO KHILARI VIDYALAY, TAKLIDHOKESHWAR',3,'Rular'),
(248,'SARASWATI VIDYALAY, VISAPUR, TAL. SHRIGONDA',3,'Rular'),
(249,'SHRI TUJALA BHAVANI VIDYALAY, KHADKI (AHAMADNAGAR)',3,'Rular'),
(250,'SHRI AMBIKA VIDYALAY, KEDGAON',3,'Urban'),
(251,'SHRI KOLAIDEVI VIDYALAY, KOLGAON',3,'Rular'),
(252,'SHRI SANTUKNATH ENGLISH VIDYALAY, JEUR(BAYJABAI)',3,'Rular'),
(253,'SHRIMATI ABBOTT HIGHSCHOOL, BHINGAR',3,'Urban'),
(254,'BHASKARRAO GALANDE-PATIL VIDYALAY, ASHOKNAGAR',3,'Rular'),
(255,'BHASKARRAO GALANDE-PATIL VIDYALAY, UNDIRGAON',3,'Rular'),
(256,'D.D. KACHOLE MADHYAMIK VIDYALAY, SHRIRAMPUR',3,'Urban'),
(257,'NEW ENGLISH SCHOOL , TAKALIBHAN',3,'Rular'),
(258,'NEW ENGLISH SCHOOL, KHANDALA-SHRIRAMPUR',3,'Rular'),
(259,'NEW ENGLISH SCHOOL, PUNTAMBA',3,'Rular'),
(260,'SADGURU GANGAGIRI VIDYALAY, NAUR',3,'Rular'),
(261,'SHRI CHHATRAPATI SHIVAJI VIDYALAY, VADALA-MAHADEO',3,'Rular'),
(262,'SHRI EKNATH KESHAV AUTI VIDYALAY, MALUNJE BK.',3,'Rular'),
(263,'SW.SAU.SAKARBEN KARAMSHIBHAI SOMAIYA PRATHAMIK VIDYAMANDIR, SHRIRAMPUR',3,'Urban'),
(264,'YASHWANT VIDYALAY, PADHEGAON',3,'Rular'),
(265,'DR. C.M. MEHTA KANYA VIDYAMANDIR, KOPARGAON',3,'Urban'),
(266,'GURUVARYA TUKARAM BABA VIDYALAY, KUMBHARI',3,'Rular'),
(267,'JANATA ENGLISH SCHOOL, SANVATSAR',3,'Rular'),
(268,'KARMAVEER BHAURAO PATIL VIDYALAY, KOPARGAON',3,'Urban'),
(269,'KARMAVEER SHANKARRAO KALE VIDYALAY, KARANJI BK.',3,'Rular'),
(270,'NEW ENGLISH SCHOOL, YESGAON',3,'Rular'),
(271,'NEW ENGLISH SCHOOL, CHASNALI',3,'Rular'),
(272,'NEW ENGLISH SCHOOL,DHAMORI',3,'Rular'),
(273,'NEW ENGLISH SCHOOL,GODHEGAON TAL- KOPARGAON',3,'Rular'),
(274,'NUTAN VIDYALAY, WAVI',3,'Rular'),
(275,'RADHABAI KALE KANYA VIDYALAY, KOLAPEWADI',3,'Urban'),
(276,'SAU SUSHILAMAI SHANKARRAO KALE VIDYALAY, BHOJADE',3,'Rular'),
(277,'SHIVSHANKAR VIDYAMANDIR, RAVANDE',3,'Rular'),
(278,'SHRI GANGADHAR RABAJI  AUTADE-PATIL VIDYALAY, POHEGAON',3,'Rular'),
(279,'SHRI RAMESHWAR VIDYALAY, WARI',3,'Rular'),
(280,'SHRI CHHATRAPATI SHIVAJI VIDYALAYA, KOLPEWADI',3,'Urban'),
(281,'NEW ENGLISH SCHOOL, SAVALIVIHIR BK. ',3,'Rular'),
(282,'NEW ENGLISH SCHOOL, ASTAGAON',3,'Rular'),
(283,'NEW ENGLISH SCHOOL, CHITALI',3,'Rular'),
(284,'NEW ENGLISH SCHOOL, KORHALE',3,'Rular'),
(285,'NEW ENGLISH SCHOOL, PIMPRI-NIRMAL',3,'Rular'),
(286,'SHARADA  KANYA  VIDYAMANDIR, RAHATA',3,'Urban'),
(287,'SHARADA VIDYAMANDIR, RAHATA',3,'Urban'),
(288,'SHRI GANESH VIDYALAY, GANESHNAGAR',3,'Rular'),
(289,'SHRI KESHAVRAJ VIDYALAY,  DASKHED',3,'Rular'),
(290,'KANKALESHWAR VIDYALAY, BEED',3,'Urban'),
(291,'KANYA VIDYALAY, JAMKHED',3,'Urban'),
(292,'KHARDA ENGLISH SCHOOL, KHARDA',3,'Rular'),
(293,'NEW ENGLISH SCHOOL, HATOLA',3,'Rular'),
(294,'PANCHAKROSHI VIDYALAY, NAYGAON',3,'Rular'),
(295,'SHRI  ARANYESHWAR VIDYALAY,  ARANGAON',3,'Rular'),
(296,'SHRI CHHATRAPATI SHIVAJI VIDYALAY, JAWALE-JAMKHED',3,'Rular'),
(297,'SHRI GANESH VIDYAMANDIR, AMALNER-BHANDYACHE',3,'Rular'),
(298,'SHRI NAGESH VIDYALAY, JAMKHED',3,'Urban'),
(299,'BHIMASHANKAR VIDYAMANDIR, SHINOLI',4,'Rular'),
(300,'HUTATMA BABU GENU VIDYALAY, MAHALUNGE-PADWAL',4,'Rular'),
(301,'MAHATMA GANDHI PRIMARY ENGLISH MEDIUM SCHOOL, MANCHAR (STATE BOARD)',4,'Rular'),
(302,'MAHATMA GANDHI PRATHMIK VIDYALAY, MANCHAR',4,'Rular'),
(303,'MAHATMA GANDHI VIDYALAYA, MANCHAR',4,'Rular'),
(304,'NARSINHA VIDHYALAY, RANJANI',4,'Rular'),
(305,'NEW ENGLISH SCHOOL,  ASANE',4,'Rular'),
(306,'SHRI BELHESHWAR VIDYMANDIR, BELHE',4,'Rular'),
(307,'SHRI BHAIRAVNATH VIDYALAY,  AWASARI KH.',4,'Rular'),
(308,'SHRI SHIVAJI VIDYALAY, DHAMANI',4,'Rular'),
(309,'SHRIRAM VIDYALAY, PIMPALGAON-KHADAKI',4,'Rular'),
(310,'JAWAHAR VIDYALAYA, CHAS-KAMAN',4,'Rular'),
(311,'KARMAVEER BHAURAO PATIL VIDYALAY, WADA ',4,'Rular'),
(312,'SHRIMANT MAHARAJA FATTESINHRAO GAIKWAD VIDYALAY, DAWADI',4,'Rular'),
(313,'SHRI SIDDHESHWAR VIDYALAY, VETALE',4,'Rular'),
(314,'SHRIMANT MAHARAJA YASHWANTRAO HOLKAR VIDYALAY, WAFGAON',4,'Rular'),
(315,'KANYA VIDYALAY, PIMPARI-WAGHERE, PUNE-17',4,'Urban'),
(316,'NAVMAHARASHTRA VIDYALAYA, PIMPARI-WAGHERE, PUNE-17',4,'Urban'),
(317,'NEW ENGLISH SCHOOL BHOSARI, PUNE',4,'Urban'),
(318,'NEW ENGLISH SCHOOL, VADGAON-MAVAL',4,'Rular'),
(319,'SANT JIJABAI KANYA VIDYALAY, DEHU',4,'Urban'),
(320,'SANT TUKARAM VIDYALAY, DEHU',4,'Urban'),
(321,'BALSIDDHANATH VIDYALAY, BELSAR',4,'Rular'),
(322,'DR. SHANKARRAO KOLTE VIDYALAY, PISARVE',4,'Rular'),
(323,'KARMVEER BHAURAO PATIL VIDYALAY, PARINCHE',4,'Rular'),
(324,'MAHARSHI WALMIKI VIDYLAYA, WALHE',4,'Rular'),
(325,'MAHATMA JOTIRAO PHULE VIDYALAY,  SHIVARI',4,'Rular'),
(326,'NEW ENGLISH SCHOOL, PANGARE',4,'Rular'),
(327,'SHANKARRAO DHONE VIDYALAY, GARADE',4,'Rular'),
(328,'MAHATMA GANDHI VIDYALAY, NIRA',4,'Rular'),
(329,'SHRI SIDDHESHWAR HIGHSCHOOL, KORHALE BK.',4,'Rular'),
(330,'SHRI MAYURESHWAR VIDYALAY, MORGAON',4,'Rular'),
(331,'SHRI CHHATRAPATI SHIVAJI VIDYALAY, MURTI',4,'Rular'),
(332,'SOU. LILAVATI RIKHAVALAL SHAHA  KANYA VIDYAMANDIR, NIRA',4,'Rular'),
(333,'HUTATMA RAJGURU VIDYALAY, PANDAVNAGAR (BOYS), PUNE-16',4,'Urban'),
(334,'HUTATMA RAJGURU VIDYALAY, PANDAVNAGAR (GIRLS), PUNE-16',4,'Urban'),
(335,'NARAYANRAO SANAS VIDYALAY, VADGAON KH., SANASNAGAR, PUNE',4,'Urban'),
(336,'YASHAWANT VIDYALAY, KHADAKWASALA',4,'Urban'),
(337,'BHAIRAVNATH VIDYALAYA, BHIGWAN',4,'Rular'),
(338,'KAI. KESHAV PANDURANG GADADE VIDYALAY, TANDALI',4,'Rular'),
(339,'NAGESHWAR VIDYALAY, PATAS',4,'Rular'),
(340,'NEW ENGLISH SCHOOL, PARGAON (SALU-MALU)',4,'Rular'),
(341,'NEW ENGLISH SCHOOL, KAWATHE-YEMAI',4,'Rular'),
(342,'NEW ENGLISH SCHOOL, MALTHAN',4,'Rular'),
(343,'NEW ENGLISH SCHOOL, SHIRUR',4,'Urban'),
(344,'KARMAVEER BHAURAO PATIL VIDYALAY, SANGAVI',4,'Rular'),
(345,'NEW ENGLISH SCHOOL, GOJUBAVI',4,'Rular'),
(346,'NEW ENGLISH SCHOOL, DORLEWADI',4,'Rular'),
(347,'RADHESHYAM N. AGARWAL TECHNICAL INSTITUTE, BARAMATI',4,'Urban'),
(348,'SHRI NAGESHWAR VIDYALAY, SHETPHALGADHE',4,'Rular'),
(349,'SHRI CHHATRAPATI SHAHU HIGHSCHOOL, BARAMATI',4,'Urban'),
(350,'CHANDRABHAGA BABURAO TUPE SADHANA KANYA VIDYALAY, HADAPSAR, PUNE-28',4,'Urban'),
(351,'GIRL\'S ENGLISH MEDIUM SCHOOL, HADAPSAR (STATE BOARD)',4,'Urban'),
(352,'KRISHNAJI KHANDUJI GHULE VIDYALAY, MANJARI BK.',4,'Urban'),
(353,'NEW ENGLISH SCHOOL, KOLWADI',4,'Rular'),
(354,'SADHANA VIDYALAYA, HADAPSAR, PUNE-28',4,'Urban'),
(355,'KARMVEER BHAURAO PATIL VIDYALAY, REDANI',4,'Rular'),
(356,'SHRI SANT MUKTABAI VIDYALAY, SHELGAON',4,'Rular'),
(357,'SHRI NILKANTHESHWAR MADHYMIK VIDYALAY, LASURNE',4,'Rular'),
(358,'SOU KASTURABAI SHRIPATI KADAM VIDYALAY, INDAPUR',4,'Urban'),
(359,'KARMVEER BHAURAO PATIL HIGHSCHOOL, MOKHADA',5,'Rular'),
(360,'MAHATMA  JYOTIBA  PHULE  ASHRAMSHALA,  ASE',5,'Rular'),
(361,'MAHARSHI VITTHAL RAMJI SHINDE PRATHAMIK & MADHYMIK ASHRMSHALA, MOKHADA',5,'Rular'),
(362,'DNYANVARDHINI VIDYALAY, CHARKOP, KANDIVALI(WEST), MUMBAI-67',5,'Urban'),
(363,'PROF. DR. N.D. PATIL VIDYALAY, SAHYADRINAGAR, KANDIVALI(WEST), MUMBAI-67',5,'Urban'),
(364,'MODERN SCHOOL, VASHI (MARATHI MEDIUM)',5,'Urban'),
(365,'MODERN SCHOOL, VASHI (ENGLISH MEDIUM-STATE BOARD)',5,'Urban'),
(366,'KARMVEER BHAURAO PATIL VIDYALAY, JUCHANDRA',5,'Urban'),
(367,'LOKNETE RAMSHETH THAKUR ENGLISH MEDIUM SCHOOL, KAMOTHE (STATE BOARD)',5,'Urban'),
(368,'LOKNETE RAMSHETH THAKUR PUBLIC SCHOOL, KAMOTHE (ENGLISH MEDIUM-CBSE)',5,'Urban'),
(369,'NEW ENGLISH SCHOOL, KAMOTHE',5,'Urban'),
(370,'NEW ENGLISH SCHOOL, DOLKHAMB',5,'Rular'),
(371,'ANANT PADURANG BHOIR VIDYALAY, DAPOLI-PARGOAN',5,'Rular'),
(372,'CHHATRAPATI SHIVAJI VIDYALAY, PALASPE',5,'Rular'),
(373,'NEW ENGLISH SCHOOL, MARKET YARD, SAHKARNAGAR, PANVEL',5,'Urban'),
(374,'PARSHURAM JOMA MHATRE VIDYALAYA, NAVADE',5,'Urban'),
(375,'SHRI BHAIRAVDEV VIDYALAY, RITGHAR',5,'Rular'),
(376,'SHRI CHHATARAPATI SHIVAJI VIDYALAY, WAVANJE',5,'Rular'),
(377,'SAU USHADEVI PANDURANG WAGHE HIGHSCHOOL, COLABA',5,'Rular'),
(378,'NEW ENGISH SCHOOL, NAGAON',5,'Rular'),
(379,'NEW ENGLISH SCHOOL, PAITHAN',5,'Rular'),
(380,'NEW ENGLISH SCHOOL, TURBHE',5,'Rular'),
(381,'NEW ENGLISH SCHOOL, VINHERE',5,'Rular'),
(382,'MADHYMIK & UCCHYAMADHYAMIK VIDYAMANDIR, POLADPUR',5,'Rular'),
(383,'SHRI SADGURU ANANT MAHARAJ VIDYALAY, NATE',5,'Rular'),
(384,'DRONAGIRI HIGHSCHOOL, KARANJA',5,'Rular'),
(385,'KARMVEER BHAURAO PATIL VIDYALAY, PIRKON',5,'Rular'),
(386,'SHRI CHHATRAPATI SHIVAJI VIDYALAY, GAVHAN',5,'Rular'),
(387,'SHRI CHHATRAPATI SHIVAJI HIGHSCHOOL, JASAI',5,'Rular'),
(388,'TUKARAM HARI WAJEKAR UCCHYAMADHYAMIK VIDYALAY, PHUNDE',5,'Rular'),
(391,'KRISHNA YASHAWANT BHALACHIM MADHYAMIK VIDYALAY, MALIN',4,'Rular'),
(392,'KALIKAMATA MADYAMIK VIDYALAY, WAGHALE',4,'Rular'),
(393,'NEW ENGLISH SCHOOL, ANNAPUR',4,'Rular'),
(394,'NEW ENGLISH SCHOOL, MANORI',3,'Rular'),
(395,'NEW ENGLISH SCHOOL, YELGUD',2,'Rular'),
(396,'RAJRSHI SHAHU MAHARAJ PRIMARY, SECONDARY & HIGHER SECONDARY ASHRAMSHALA, ADOSHI',5,'Rular'),
(397,'NEW ENGLISH SCHOOL, ALSUNDE',3,'Rular'),
(398,'SHRIMAN R.G. KATE VIDYAMANDIR, DHAMANI',2,'Rular'),
(399,'SHRI MUKTADEVI VIDYALAYA, NARODI ',4,'Rular'),
(400,'MA. SHARADRAOAJI PAWAR MADHYAMIK VIDYALYA, NIGDOL',3,'Rular'),
(401,'NEW ENGLISH SCHOOL, VAVARLE',5,'Rular'),
(402,'SADHANA ENGLISH MEDIUM SCHOOL, HADAPSAR (STATE BOARD)',4,'Urban'),
(404,'SOU SHAKUNTALA RAMSHETH THAKUR SCHOOL, ULWE (ENGLISH MEDIUM-CBSE)',5,'Rular'),
(405,'DR LAHU SHRIPATI KADAM VIDYALAYA, WANGI NO.1',1,'Rular'),
(406,'JAY MALHAR VIDYALAYA, DELAVADI',4,'Rular'),
(407,'NEW ENGLISH SCHOOL, KHADAKI-PATOLE ',1,'Rular'),
(408,'VITTHALRAO DESHMUKH VIDYALAY, GANJE',1,'Rular'),
(409,'BAPURAO RAMAJI PATIL VIDYALAYA, KHED BK. ',1,'Rular'),
(410,'SHRI HARISHCHANADRA SITARAM TOTRE VIDYALAY, KURWANDI',4,'Rular'),
(411,'NEW ENGLISH SCHOOL, CHANDGAON ',3,'Rular'),
(414,'SOU SHAKUNTALA RAMSHETH THAKUR SCHOOL, ULWE (MARATHI MEDIUM)',5,'Rular'),
(415,'NEW ENGLISH SCHOOL, GHALWAD ',2,'Rular'),
(416,'ADIVASI HIGHSCHOOL, POSHERA ',5,'Rular'),
(417,'NARSINHA  NVIDYALAYA, KARDEHALLI',1,'Rular'),
(418,'BRAMHANATH VIDYALAYA, MULEGAON',1,'Rular'),
(419,'SHRI NAGESHWAR VIDYALAYA, NAZARE-KADEPATHAR',4,'Rular'),
(420,'NUTAN MADHYAMIK VIDYALAY, CHANGYACHAPADA',5,'Rular'),
(421,'SIDDHESHWAR PRASHALA, TAPKIRI-SHETPHAL',1,'Rular'),
(423,'ADIVASI HIGHSCHOOL, MORHANDA',5,'Rular'),
(424,'NEW ENGLISH SCHOOL, NHAVE',5,'Rular'),
(425,'SHRI HARESHWAR MADHYAMIK VIDYALAYA, ARE ',2,'Rular'),
(426,'APPASAHEB BHAURAO PATIL ENGLISH MEDIUM SCHOOL, SATARA (CBSE)',1,'Urban'),
(427,'NEW ENGLISH SCHOOL, DHAVALESHWAR',2,'Rular'),
(428,'NEW ENGLISH SCHOOL, DARUJ',1,'Rular'),
(429,'SHRI BHIMRAOSHETH JAGANNATH CHAVAN-DESHAMUKH VIDYALAYA, VASAMBE',2,'Rular'),
(430,'JAYBHAVANI VIDYALAYA, BALAVADI-KHANAPUR',2,'Rular'),
(431,'NEW ENGLISH SCHOOL, SAYYADWARVADE',1,'Rular'),
(432,'SADGURU ONKARBABA VIDYALAYA, KINHI-PARNER',3,'Rular'),
(433,'KRANTIJYOTI SAVITRIBAI PHULE ASHRAMSHALA, CHAMBHARSHET',5,'Rular'),
(434,'NEW ENGLISH SCHOOL, PADVALPADA',5,'Rular'),
(435,'NEW ENGLISH SCHOOL, PUNAS ',2,'Rular'),
(436,'NEW ENGLISH SCHOOL, JAMBHORI',4,'Rular'),
(437,'PRATHAMIK & MADHYAMIK ASHRAMSHALA, WAVAR',5,'Rular'),
(438,'SADGURU BABA MAHARAJ HIGHSCHOOL, SAVADE',1,'Rular'),
(439,'RAYAT ENGLISH MEDIUM SCHOOL, SHIRWAL (STATE BOARD)',1,'Rular'),
(440,'RAYAT ENGLISH MEDIUM SCHOOL, KARAD (CBSE)',1,'Rular'),
(441,'JOTIRLING VIDYALAY, CHAVANWADI',1,'Rular'),
(442,'NEW ENGLISH School, DHOKMODA',1,'Rular'),
(443,'NEW ENGLISH SCHOOL, DEULGAONSIDDHI',3,'Rular'),
(445,'RAYAT ENGLISH MEDIUM SCHOOL, UMBRAJ (STATE BOARD)',1,'Rular'),
(446,'KRANTIVEER NAGNATH ANNA NAIKWADI VIDYALAY, NAVE-JUNE KHED',2,'Rular'),
(447,'NEW ENGLISH SCHOOL, KALAS',3,'Rular'),
(448,'NEW ENGLISH SCHOOL, KUSUR(SOLAPUR)',1,'Rular'),
(449,'NEW ENGLISH SCHOOL, DEULGAON-GALANDA',3,'Rular'),
(450,'NEW ENGLISH SCHOOL, TULASHI',1,'Rular'),
(451,'SHRI BHOJLING VIDYALAYA, JAMBHULANI',1,'Rural'),
(453,'KESHAVRAO PAWAR ENGLISH MEDIUM SCHOOL, KARAD (STATE BOARD)',1,'urban'),
(455,'SHRI MARUTRAO VITTHALRAO MORE (SHETH),PANCHKROSHI VIDYALAYA,MALCHOUNDI',1,'rural'),
(458,'SHRI VARDHINI VIDYALAY, VARDHANGAD',1,'rural'),
(459,'RAYAT ENGLISH MEDIUM SCHOOL, NIRA (CBSE)',4,'rural'),
(460,'SOU. INDUMATI SHANKARRAV GAT ENGLISH SCHOOL, RANGOLI',2,'rural');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_info`
--

DROP TABLE IF EXISTS `school_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `school_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_id` varchar(50) NOT NULL,
  `principal_name` varchar(100) DEFAULT NULL,
  `vice_principal_name` varchar(100) DEFAULT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `motto` varchar(255) DEFAULT NULL,
  `established` year(4) DEFAULT NULL,
  `affiliation` varchar(100) DEFAULT NULL,
  `student_count` int(11) DEFAULT NULL,
  `facilities` text DEFAULT NULL,
  `achievements` text DEFAULT NULL,
  `student_std_division` varchar(255) DEFAULT NULL,
  `medium` varchar(50) DEFAULT NULL,
  `scholarship_result` varchar(50) DEFAULT NULL,
  `ssc_result` varchar(50) DEFAULT NULL,
  `hsc_result` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_info`
--

LOCK TABLES `school_info` WRITE;
/*!40000 ALTER TABLE `school_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `school_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolactivity`
--

DROP TABLE IF EXISTS `schoolactivity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `schoolactivity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `verify` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolactivity`
--

LOCK TABLES `schoolactivity` WRITE;
/*!40000 ALTER TABLE `schoolactivity` DISABLE KEYS */;
INSERT INTO `schoolactivity` VALUES
(39,2,'addschoolactivity','/uploads/b37fa9ad-e8ee-4d16-8f84-026d48142db6_DigitalResources.png',0),
(40,1,'sakshi1@07.com','/uploads/35a0471b-a559-439c-9497-ec34afef24fb_bvg.png',0),
(41,2,'abc@123.com','/uploads/4c13a3b9-93ab-459f-8311-d3dff9b4332f_bvg.png',0),
(42,1,'sakshi1@07.com','/uploads/4d51a854-ad64-4c9d-ba6d-ef7a6330c947_earnlearn.png',1),
(43,1,'sakshiii','/uploads/9ca2b873-3cf9-442d-a3ed-73c67b2d0d06_coreval.webp',0),
(44,1,'abc','/uploads/ceac8430-8cc1-49fc-9dd6-9eafe681f0f1_img2.jpg',0),
(45,1,'aaaaaaaaaa','/uploads/52c0dd2d-5f81-46f8-b685-142c151ea530_achiev3.jpg',0),
(46,1,'aaaaaaaaaaa','/uploads/ad9b0670-6129-4a74-9db4-7357a5ff0662_achiev2.jpg',0),
(47,1,'aaaaaaaaaa','/uploads/a55ca9b7-f054-45b7-988b-3c644efc9263_achiev3.jpg',0),
(48,110,'aaaaaaaaaa','/uploads/859168d5-ee56-42f8-8812-32d55fc1566a_achiev3.jpg',1),
(49,110,'aaaaaaaa','/uploads/809b1158-dc94-47b8-8348-64a1cdc8195d_490656579_10236537994928233_7772199087203135971_n.jpg',1),
(50,1,'aaaa','/uploads/983a941d-9433-42c7-9409-e56efd49fb45_488929803_10236398910091199_4914919617707352511_n.jpg',0),
(51,1,'aaaaa','/uploads/824114f3-ccdf-4755-9013-c5f38bdbd587_488929803_10236398910091199_4914919617707352511_n.jpg',0),
(52,1,'adfsf','/uploads/f40b1ee5-86f7-45da-8289-3b6ca0c22361_490656579_10236537994928233_7772199087203135971_n.jpg',1),
(53,1,'sakshiiii','/uploads/a87470ba-58f7-486a-805e-abf8e16bd12b_490656579_10236537994928233_7772199087203135971_n.jpg',0);
/*!40000 ALTER TABLE `schoolactivity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolevents`
--

DROP TABLE IF EXISTS `schoolevents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `schoolevents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolevents`
--

LOCK TABLES `schoolevents` WRITE;
/*!40000 ALTER TABLE `schoolevents` DISABLE KEYS */;
INSERT INTO `schoolevents` VALUES
(16,1,'आर्टिफिशियल इंटेलिजन्ससाठी \'रयत\'चे दमदार पाऊल','/uploads/recentact1.jpg'),
(17,1,'शोध मराठी मनाचा','/uploads/1744364870948-recentacti3.jpg'),
(19,1,'शोध मराठी मनाचा','/uploads/1744700493916-recentacti3.jpg'),
(21,1,'aaaaaaaaa','/uploads/1745648174989-achiev2.jpg'),
(22,1,'रयत शिक्षण संस्थेच्या मॅनेजिंग कौन्सिलची बैठक','/uploads/1745650947961-490656579_10236537994928233_7772199087203135971_n.jpg'),
(23,1,'aaaa','/uploads/1745652164191-490656579_10236537994928233_7772199087203135971_n.jpg'),
(24,110,'aaaa','/uploads/1745652558618-490656579_10236537994928233_7772199087203135971_n.jpg');
/*!40000 ALTER TABLE `schoolevents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolnews`
--

DROP TABLE IF EXISTS `schoolnews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `schoolnews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `verify` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolnews`
--

LOCK TABLES `schoolnews` WRITE;
/*!40000 ALTER TABLE `schoolnews` DISABLE KEYS */;
INSERT INTO `schoolnews` VALUES
(44,1,'रयत शिक्षण संस्थेच्या मॅनेजिंग कौन्सिलची बैठक','2025-05-05','/uploads/1746721906977-1745650544156-490656579_10236537994928233_7772199087203135971_n.webp',1),
(45,1,'कर्मवीर पुण्यतिथी','2025-05-03','/uploads/1746721951472-1745650544156-490656579_10236537994928233_7772199087203135971_n.webp',1),
(46,1,'test','2025-05-06','/uploads/1747203829529-WhatsApp Image 2025-05-09 at 14.01.01.jpeg',0);
/*!40000 ALTER TABLE `schoolnews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolslider`
--

DROP TABLE IF EXISTS `schoolslider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `schoolslider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_id` int(10) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolslider`
--

LOCK TABLES `schoolslider` WRITE;
/*!40000 ALTER TABLE `schoolslider` DISABLE KEYS */;
INSERT INTO `schoolslider` VALUES
(10,1,'/uploads/1744440064217-recentact2.jpg'),
(11,1,'/uploads/1744442754577-sider8.jpg'),
(12,1,'/uploads/1744694817616-recentact2.jpg'),
(13,2,'/uploads/1744795262788-activity.jpg'),
(14,110,'/uploads/1745648281077-img2.jpg');
/*!40000 ALTER TABLE `schoolslider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scrollingnews`
--

DROP TABLE IF EXISTS `scrollingnews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `scrollingnews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scrollingnews`
--

LOCK TABLES `scrollingnews` WRITE;
/*!40000 ALTER TABLE `scrollingnews` DISABLE KEYS */;
INSERT INTO `scrollingnews` VALUES
(16,'डी.एड.स्केलवर नियुक्ती दिलेल्या परंतु नियुक्ती नंतर बी.एड.स्केल शैक्षणिक अर्हता प्राप्त केलेल्या सेवकांची यादी प्रसिद्ध केलेबाबत.','/uploads/1761735152135-1761655256064-1761655092420-डीएड_स्केल_अद्ययावत_अंतिम_सेवाजेष्ठता_यादी_(1).pdf'),
(17,'संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात- मुदतवाढ','/uploads/1761735172921-1761734509839-Chief_Auditor_Rewised.pdf');
/*!40000 ALTER TABLE `scrollingnews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `slider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES
(69,'/uploads/1763449647641-HO.jpg'),
(70,'/uploads/1763449759412-ChatGPT Image Nov 18, 2025, 12_18_33 PM.png'),
(76,'/uploads/1763451520377-DSC_31061.JPG'),
(77,'/uploads/1763451596777-2.jpg'),
(78,'/uploads/1763451618176-DSC_9486.JPG'),
(79,'/uploads/1763451629691-5.jpg'),
(80,'/uploads/1763451642606-7.jpg');
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tenders`
--

DROP TABLE IF EXISTS `tenders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `file_path` varchar(500) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tenders`
--

LOCK TABLES `tenders` WRITE;
/*!40000 ALTER TABLE `tenders` DISABLE KEYS */;
INSERT INTO `tenders` VALUES
(7,'शैक्षणिक अभ्यासक्रम सॉफ्टवेअर खरेदीबाबत ई-निविदा ','2025-08-14','/uploads/1755178429484_FILE1857TENDER727TS1755178061042.pdf','2025-08-14 13:33:49'),
(8,'दि.२२ सप्टेंबर २०२५ रोजी व संस्थेचा १०६ वा वर्धापनदिन दि.०४ आक्टोबर २०२५ रोजीच्या कार्यक्रमासाठी मंडप  निविदाची मुदत वाढ दि.१०/०९/२०२५ देण्यात आलेली आहे.','2025-09-09','/uploads/1757414314759_Mandap142.jpg','2025-09-09 10:38:34');
/*!40000 ALTER TABLE `tenders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk2` (`school_id`),
  CONSTRAINT `fk2` FOREIGN KEY (`school_id`) REFERENCES `school` (`school_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,1,'shirwal.avcr@gmail.com','centraladarsh@123'),
(2,388,'phunde.thwvrr@gmail.com','$2b$10$qpPY6XrUEcQZGX9Zs4Lolu7D5FdN4/NcLFZH0c2ttp7K32fqaPOQ.'),
(3,440,'umeshsawant22@gmail.com','$2b$10$cmzfl8GALnH289X.iE7ot.9XpM6WPb1sLUIpEQrSyTq3ItIP37SI.'),
(4,19,'degaon.dsvcr@gmail.com','$2b$10$latm1IF5aYW.zBQftnK2yOr/5i28Grstfc8SHFZ.PNHzl5vAKNTWa'),
(5,176,'matond.nessr@gmail.com','$2b$10$6L0XOFVeobDYbohHnTvFK.bOyWHchfyQzWujdHswIT2MAdz6kuiEe'),
(7,277,'ravande.ssvrnr@gmail.com','$2b$10$tK49xJxPAdhe0HmEZlRW7uwHRBYxrqRx2y52WjH.j5g3UylOu060u'),
(12,460,'rangoli.nessr@gmail.com','$2b$10$Okwk6uxwlw23MQ7owlf8v.ionf5FnIy/I5WoqPjBxJnsNHOfWlAdG'),
(13,165,'belanki.nessr@gmail.com','$2b$10$rjTVZkjscV.m.mlxWX0oxeLQPLlDPR6HR9YLMgODP2OeuIuTl53A2'),
(14,226,'wadzire.ssglmvnr@gmail.com','$2b$10$VmbtoZVL3neLM3urjQGfne1/uJRkIJn7W87BXbE5xHbMU9JDEtbwq'),
(15,448,'kusur.solapur.neskcr@gmail.com','$2b$10$j2/Tql3pxR0GrTZqg7Stz.1C7FStHcThzVRnwd/D.E7Y7QG7UT26O'),
(16,222,'supa.nesnr@gmail.com','$2b$10$zcr2XgqZyp7UEdD0.fT70uAcupl20/zJMfS6fjCYl913OEjWgwYQe'),
(17,341,'kavtheyemai.neswr@gmail.com','$2b$10$On0Fl3tguJqIPzqwJp/Ck.AA4Ic2PQ5ufuUGwCHlEdJJy0oP/bxbW'),
(20,341,'kavtheyrmai.neswr@gmail.com','$2b$10$7we6/fuKK5ixoyiFMvt0IeDCGPWc84/bH2bdIzzN9PTqxiE1/nZXC'),
(21,50,'kukudwad.ssmv@gmail.com','$2b$10$.oJXNokDRao5JBydRbHYKOACizK9tuiVpkD0fgmlaIvfLvUdcSs.2'),
(22,305,'asane.neswr@gmail.com','$2b$10$P0pC3I2P4tVtG5JdrVIz0.OJcKUqU/xcuJbWvxFhNTkB35etRxCtu'),
(27,64,'phalawani.ycv@gmail.com','$2b$10$9niIj6U5c/3CO8AJ2fuYgODfaWryCJDrdcbm9/pNZnJ7mdkweLUd6'),
(29,162,'anjani.rrapvsr@gmail.com','$2b$10$ZEIHNSIRouUkkHFhzV3c4eXysWCxwvxNRz2G6cDUS/r7J2i1nY8R.'),
(30,169,'savarde.sbessr@gmail.com','$2b$10$xcyEBmzsh/DuMHaT7QG.G.Lf.G4Bxlko3mCmI7SOXKzwfXSGdSTX.'),
(36,169,'savarde.sbesr@gmail.com','$2b$10$FvdXkMEyT8hBLb.MhmZUM.LaokC3KMWBvkVYBd5q8GFF8WDuyys6W'),
(46,133,'Sarud.mgvsr@gmail.com','$2b$10$wGrsICe30d4VhDu7M0W9ZediLsKmbA4GIlOcEeFOW/oTXOsBkNSpC'),
(63,133,'Sarud.mgvsr@gmail.comCom','$2b$10$thgPdJjwi5jW7cTzopH0FOz60g/Xw3HBRW2DBNyx3fR6uYNLF5wYu'),
(64,433,'chambharshetschool@gmail.com','$2b$10$fqys/CTlufXlOkuZE9BaxuLwMIFJvKCBkyityVegfczJNBS4ZuaRS'),
(65,224,'babhulwade.skvnr@gmail.com','$2b$10$Voch2/gREaQ8m9Gs33gpluOw/rF.pcHHORTyXY5BJnVQGtCpR0Vtm'),
(68,71,'uplai.snvcr@gmail.com','$2b$10$06HdOB0VakRrhoG9rLaAoeQKku93sDVKdWRQbBpPNCi5oQOfbDAwm'),
(70,160,'mhaisal.kbpvsr@gmail.com','$2b$10$Vo/QV1O9o1fv9CA9vWtZ0OB5.3yqPby.mXiC/kjgey5MOzGSVvoky');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-07  8:16:35
