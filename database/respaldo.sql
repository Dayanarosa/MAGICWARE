-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: gestioninventario
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `informes`
--

DROP TABLE IF EXISTS `informes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informes` (
  `id_informe` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `tipo` enum('REPORTE GENERAL DE STOCK','PRODUCTOS CON STOCK BAJO','HISTORIAL DE PRODUCTOS','UBICACION DE PRODUCTOS','USUARIOS REGISTRADOS') NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_informe`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `informes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informes`
--

LOCK TABLES `informes` WRITE;
/*!40000 ALTER TABLE `informes` DISABLE KEYS */;
/*!40000 ALTER TABLE `informes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones` (
  `id_notificacion` int(11) NOT NULL AUTO_INCREMENT,
  `id_reporte` int(11) NOT NULL,
  `estado` enum('Pendiente','Resuelto') NOT NULL,
  `fecha` datetime NOT NULL,
  `acciones` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_notificacion`),
  KEY `id_reporte` (`id_reporte`),
  CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id_reporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones`
--

LOCK TABLES `notificaciones` WRITE;
/*!40000 ALTER TABLE `notificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportes` (
  `id_reporte` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` enum('Producto Dañado','Producto Agotado','Información Incorrecta','Problema de Ubicación','Otro') NOT NULL,
  `codigo_producto` int(11) DEFAULT NULL,
  `descripcion` text NOT NULL,
  `fecha` datetime NOT NULL,
  `reportado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_reporte`),
  KEY `codigo_producto` (`codigo_producto`),
  KEY `reportado_por` (`reportado_por`),
  CONSTRAINT `reportes_ibfk_1` FOREIGN KEY (`codigo_producto`) REFERENCES `stock` (`codigo`),
  CONSTRAINT `reportes_ibfk_2` FOREIGN KEY (`reportado_por`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportes`
--

LOCK TABLES `reportes` WRITE;
/*!40000 ALTER TABLE `reportes` DISABLE KEYS */;
/*!40000 ALTER TABLE `reportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `estado` enum('Disponible','Agotado','Dañado') NOT NULL,
  `proveedor` varchar(100) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `rol` enum('Administrador','Supervisor','Empleado') NOT NULL,
  `estado` enum('Activo','Inactivo') NOT NULL,
  `ultimo_acceso` datetime DEFAULT NULL,
  `contraseña` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'juli123','','','Activo',NULL,'$2b$10$TIv16DjV9qHn94RwEU2hbuHYIrHHJHLjALTD9ooHUiOA4eDrWhO96');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-27 10:22:59
