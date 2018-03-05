-- MySQL Script generated by MySQL Workbench
-- Mon Mar  5 15:06:46 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tarsus_db` DEFAULT CHARACTER SET utf8 ;
USE `tarsus_db` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarsus_db`.`usuario` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL,
  `senha` VARCHAR(100) NULL,
  `sexo` CHAR(1) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarsus_db`.`avaliacao` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nota` INT NULL,
  `usuario_codigo` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_Avaliacao_Usuario_idx` (`usuario_codigo` ASC),
  CONSTRAINT `fk_Avaliacao_Usuario`
    FOREIGN KEY (`usuario_codigo`)
    REFERENCES `mydb`.`usuario` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarsus_db`.`comentario` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `comentario` VARCHAR(200) NULL,
  `avaliacao_codigo` INT NOT NULL,
  `comentario_codigo` INT NOT NULL,
  `usuario_codigo` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_Comentario_Avaliacao1_idx` (`avaliacao_codigo` ASC),
  INDEX `fk_Comentario_Comentario1_idx` (`comentario_codigo` ASC),
  INDEX `fk_comentario_usuario1_idx` (`usuario_codigo` ASC),
  CONSTRAINT `fk_Comentario_Avaliacao1`
    FOREIGN KEY (`avaliacao_codigo`)
    REFERENCES `mydb`.`avaliacao` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentario_Comentario1`
    FOREIGN KEY (`comentario_codigo`)
    REFERENCES `mydb`.`comentario` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_usuario1`
    FOREIGN KEY (`usuario_codigo`)
    REFERENCES `mydb`.`usuario` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;