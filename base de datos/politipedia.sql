CREATE SCHEMA politipediabd;

CREATE TABLE politipediabd.antecedentes_penales ( 
	codigo_antecedente   int  NOT NULL    PRIMARY KEY,
	fecha                date      ,
	descripcion          varchar(100)      
 ) engine=InnoDB;

CREATE TABLE politipediabd.cargos_publicos ( 
	codigo_cargo_ocupado int  NOT NULL    PRIMARY KEY,
	nombre               varchar(100)      
 ) engine=InnoDB;

CREATE TABLE politipediabd.instituciones ( 
	codigo_institucion   int  NOT NULL    PRIMARY KEY,
	nombre               varchar(100)      
 ) engine=InnoDB;

CREATE TABLE politipediabd.notas_periodisticas ( 
	codigo_nota          int  NOT NULL    PRIMARY KEY,
	link                 varchar(600)      ,
	resumen              varchar(100)      ,
	recorte              blob      
 ) engine=InnoDB;

CREATE TABLE politipediabd.partido_cargos ( 
	codigo_cargo         int  NOT NULL    PRIMARY KEY,
	nombre               varchar(50)      
 ) engine=InnoDB;

CREATE TABLE politipediabd.partidos_politicos ( 
	codigo_partido       int  NOT NULL    PRIMARY KEY,
	nombre               varchar(100)      ,
	fecha_fundacion      date      ,
	simbolo              blob      
 ) engine=InnoDB;

CREATE TABLE politipediabd.politicos ( 
	dni                  varchar(8)  NOT NULL    PRIMARY KEY,
	nombre               varchar(200)      ,
	lugar_nacimiento     varchar(100)      ,
	lugar_domicilio      varchar(100)      ,
	fecha_nacimiento     varchar(20)      ,
	foto                 blob      ,
	biografia            varchar(1000)      
 ) engine=InnoDB;

CREATE TABLE politipediabd.politicos_antecedentes_penales ( 
	dni                  varchar(8)      ,
	codigo_antecedente   int      ,
	CONSTRAINT unq_politicos_antecedentes_penales_codigo_antecedente UNIQUE ( codigo_antecedente ) ,
	CONSTRAINT fk_politicos_antecedentes_penales FOREIGN KEY ( dni ) REFERENCES politipediabd.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_politicos_antecedentes_penales FOREIGN KEY ( codigo_antecedente ) REFERENCES politipediabd.antecedentes_penales( codigo_antecedente ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediabd.politicos_cargos_ocupados ( 
	dni                  varchar(8)      ,
	codigo_institucion   int      ,
	codigo_cargo_ocupado int      ,
	fecha_inicio         date      ,
	fecha_fin            date      ,
	razon_cese           varchar(100)      ,
	CONSTRAINT fk_politicos_cargos_ocupados FOREIGN KEY ( dni ) REFERENCES politipediabd.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_politicos_cargos_ocupados FOREIGN KEY ( codigo_cargo_ocupado ) REFERENCES politipediabd.cargos_publicos( codigo_cargo_ocupado ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_cargos_ocupados0 FOREIGN KEY ( codigo_institucion ) REFERENCES politipediabd.instituciones( codigo_institucion ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediabd.politicos_notas_periodisticas ( 
	dni                  varchar(8)      ,
	codigo_nota          int      ,
	CONSTRAINT fk_politicos_notas_periodisticas FOREIGN KEY ( codigo_nota ) REFERENCES politipediabd.notas_periodisticas( codigo_nota ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_politicos_politicos_notas_periodisticas FOREIGN KEY ( dni ) REFERENCES politipediabd.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediabd.fundadores ( 
	codigo_partido       int      ,
	dni                  varchar(8)      ,
	CONSTRAINT fk_fundadores_politicos FOREIGN KEY ( dni ) REFERENCES politipediabd.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_fundadores FOREIGN KEY ( codigo_partido ) REFERENCES politipediabd.partidos_politicos( codigo_partido ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;

CREATE TABLE politipediabd.militantes ( 
	codigo_partido       int      ,
	dni                  varchar(8)      ,
	codigo_cargo         int      ,
	fecha_inicio         date      ,
	fecha_fin            date      ,
	CONSTRAINT fk_militantes FOREIGN KEY ( codigo_partido ) REFERENCES politipediabd.partidos_politicos( codigo_partido ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_militantes_politicos FOREIGN KEY ( dni ) REFERENCES politipediabd.politicos( dni ) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_militantes_cargos FOREIGN KEY ( codigo_cargo ) REFERENCES politipediabd.partido_cargos( codigo_cargo ) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) engine=InnoDB;
