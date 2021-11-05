CREATE SCHEMA politipediadb;

CREATE TABLE politipediadb.antecedentes_penales ( 
	codigo_antecedente   int  NOT NULL    PRIMARY KEY,
	fecha                date      ,
	descripcion          varchar(100)      
 ) engine=InnoDB;

CREATE TABLE politipediadb.cargos_publicos ( 
	codigo_cargo_ocupado int  NOT NULL    PRIMARY KEY,
	nombre               varchar(100)      
 ) engine=InnoDB;

CREATE TABLE politipediadb.instituciones ( 
	codigo_institucion   int  NOT NULL    PRIMARY KEY,
	nombre               varchar(100)      
 ) engine=InnoDB;

CREATE TABLE politipediadb.notas_periodisticas ( 
	codigo_nota          int  NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	link                 varchar(600)      ,
	resumen              varchar(100)      ,
	recorte              blob      
 ) engine=InnoDB;

CREATE TABLE politipediadb.partido_cargos ( 
	codigo_cargo         int  NOT NULL    PRIMARY KEY,
	nombre               varchar(50)      
 ) engine=InnoDB;

CREATE TABLE politipediadb.partidos_politicos ( 
	codigo_partido       int  NOT NULL    PRIMARY KEY,
	nombre               varchar(100)      ,
	fecha_fundacion      date      ,
	simbolo              blob      
 ) engine=InnoDB;

CREATE TABLE politipediadb.politicos ( 
	dni                  varchar(8)  NOT NULL    PRIMARY KEY,
	nombre               varchar(200)      ,
	lugar_nacimiento     varchar(100)      ,
	lugar_domicilio      varchar(100)      ,
	fecha_nacimiento     varchar(20)      ,
	foto                 blob      ,
	biografia            varchar(1000)      
 ) engine=InnoDB;

CREATE TABLE politipediadb.politicos_antecedentes_penales ( 
	dni                  varchar(8)      ,
	codigo_antecedente   int      ,
	CONSTRAINT unq_politicos_antecedentes_penales_codigo_antecedente UNIQUE ( codigo_antecedente ) ,
	CONSTRAINT fk_politicos_antecedentes_penales FOREIGN KEY ( dni ) REFERENCES politipediadb.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_politicos_antecedentes_penales FOREIGN KEY ( codigo_antecedente ) REFERENCES politipediadb.antecedentes_penales( codigo_antecedente ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediadb.politicos_cargos_ocupados ( 
	dni                  varchar(8)      ,
	codigo_institucion   int      ,
	codigo_cargo_ocupado int      ,
	fecha_inicio         date      ,
	fecha_fin            date      ,
	razon_cese           varchar(100)      ,
	CONSTRAINT fk_politicos_cargos_ocupados FOREIGN KEY ( dni ) REFERENCES politipediadb.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_politicos_cargos_ocupados FOREIGN KEY ( codigo_cargo_ocupado ) REFERENCES politipediadb.cargos_publicos( codigo_cargo_ocupado ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_cargos_ocupados0 FOREIGN KEY ( codigo_institucion ) REFERENCES politipediadb.instituciones( codigo_institucion ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediadb.politicos_notas_periodisticas ( 
	dni                  varchar(8)      ,
	codigo_nota          int      ,
	CONSTRAINT fk_politicos_notas_periodisticas FOREIGN KEY ( codigo_nota ) REFERENCES politipediadb.notas_periodisticas( codigo_nota ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_politicos_notas_periodisticas FOREIGN KEY ( dni ) REFERENCES politipediadb.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediadb.fundadores ( 
	codigo_partido       int      ,
	dni                  varchar(8)      ,
	CONSTRAINT fk_fundadores_politicos FOREIGN KEY ( dni ) REFERENCES politipediadb.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_fundadores FOREIGN KEY ( codigo_partido ) REFERENCES politipediadb.partidos_politicos( codigo_partido ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediadb.militantes ( 
	codigo_partido       int      ,
	dni                  varchar(8)      ,
	codigo_cargo         int      ,
	fecha_inicio         date      ,
	fecha_fin            date      ,
	CONSTRAINT fk_militantes FOREIGN KEY ( codigo_partido ) REFERENCES politipediadb.partidos_politicos( codigo_partido ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_militantes_politicos FOREIGN KEY ( dni ) REFERENCES politipediadb.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_militantes_cargos FOREIGN KEY ( codigo_cargo ) REFERENCES politipediadb.partido_cargos( codigo_cargo ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;
