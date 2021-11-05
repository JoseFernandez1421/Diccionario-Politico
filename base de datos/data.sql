
-- Poblar tabla partido_cargos
insert into partido_cargos values(1,'Secretario General');
insert into partido_cargos values(2,'Presidente');
insert into partido_cargos values(3,'Secretario de organización');
insert into partido_cargos values(4,'Secretario de Juventudes');
insert into partido_cargos values(5,'Secretario de familia');
insert into partido_cargos values(6,'Secretario de grupo parlamentario');
insert into partido_cargos values(7,'Secretario de Etica y Disciplina');
insert into partido_cargos values(8,'Secretario de prensa y organización');
insert into partido_cargos values(9,'Militante');
insert into partido_cargos values(10,'invitado');
insert into partido_cargos values(11,'personero legal');
insert into partido_cargos values(12,'candidato');



-- Poblar tabla partidos_politicos
insert into partidos_politicos values(1,'Fuerza popular','2010-03-19',null);
insert into partidos_politicos values(2,'Peru Libre','2016-01-11',null);
insert into partidos_politicos values(3,'Partido Aprista Peruano','1924-05-07',null);
insert into partidos_politicos values(4,'Partido Popular Cristiano','1966-12-18',null);
insert into partidos_politicos values(5,'Partido Morado','2017-11-18',null);
insert into partidos_politicos values(6,'Partido Nacionalista','2005-10-03',null);
insert into partidos_politicos values(7,'Peru Posible','1994-09-14',null);



-- Poblar tabla politicos
insert into politicos values('10001088','Keiko Sofia Fujimori Iguchi','JESUS MARIA/LIMA/LIMA','SURCO/LIMA/LIMA','1975-05-25',null,null);
insert into politicos values('06466585','Vladimir Roy Cerron Rojas','CHUPACA/CHUPACA/JUNIN','HUANCAYO/HUANCAYO/JUNIN','1970-12-16',null,null);
insert into politicos values('10000000','Victor Raul Haya de la Torre','TRUJILLO/TRUJILLO/LA LIBERTAD','LIMA/LIMA/LIMA','22/02/1895',null,null);
insert into politicos values('20000000','Luis Fernan Bedoya Reyes','CALLAO/CALLAO','MIRAFLORES/LIMA/LIMA','1919-02-20',null,null);
insert into politicos values('09337130','Julio Armando Guzman Caceres','JESUS MARIA/LIMA/LIMA','SAN ISIDRO/LIMA/LIMA','1970-07-31',null,null);
insert into politicos values('44123390','Ollanta Moises Humala Tasso','LIMA/LIMA/LIMA','SURCO/LIMA/LIMA','1962-06-27',null,null);
insert into politicos values('08774976','Alejandro Toledo Manrique','CABANA/PALLASCA/ANCASH','USA','1946-03-28',null,null);
insert into politicos values('07768359','Alan Gabriel Ludwig García Pérez','LIMA/LIMA/LIMA','MIRAFLORES/LIMA/LIMA','1949-05-23',null,null);





-- Poblar tabla cargos_publicos
insert into cargos_publicos values(1,'Presidente de la República');
insert into cargos_publicos values(2,'Ministro');
insert into cargos_publicos values(3,'Viceministro');
insert into cargos_publicos values(4,'Director');
insert into cargos_publicos values(5,'Presidente');
insert into cargos_publicos values(6,'Jefe Nacional');
insert into cargos_publicos values(7,'Gobernador');
insert into cargos_publicos values(8,'Congresista');
insert into cargos_publicos values(9,'Primera Dama');
insert into cargos_publicos values(10,'Diputado');
insert into cargos_publicos values(11,'Alcalde');
insert into cargos_publicos values(12,'Viceministro de MYPE e industria');
insert into cargos_publicos values(13,'Secretario General');



-- Poblar tabla instituciones
insert into instituciones values(1,'Poder Ejecutivo');
insert into instituciones values(2,'Congreso de la República');
insert into instituciones values(3,'Gobierno Regional de Junin');
insert into instituciones values(4,'Municipalidad de Lima');
insert into instituciones values(5,'Presidencia del Consejo de Ministros');
insert into instituciones values(6,'Asamblea Constituyente');
insert into instituciones values(7,'Ministerio de Justicia');
insert into instituciones values(8,'Ministerio de la produccion');


-- Poblar tabla fundadores
insert into fundadores values(1,'10001088');
insert into fundadores values(2,'06466585');
insert into fundadores values(3,'10000000');
insert into fundadores values(4,'20000000');
insert into fundadores values(5,'09337130');
insert into fundadores values(6,'44123390');
insert into fundadores values(7,'08774976');


-- Poblar tabla militantes
insert into militantes values(1,'10001088',2,'2010-03-19',null);
insert into militantes values(2,'06466585',1,'2016-01-11',null);
insert into militantes values(3,'10000000',9,'1924-05-07','1979-08-02');
insert into militantes values(4,'20000000',9,'1966-12-18','2021-03-18');
insert into militantes values(5,'09337130',2,'2017-11-18',null);
insert into militantes values(6,'44123390',2,'2005-10-03',null);
insert into militantes values(7,'08774976',9,'1994-09-14',null);
insert into militantes values(3,'07768359',9,'1971-01-01','1919-04-17');


-- Poblar tabla politicos_cargos_ocupados
insert into politicos_cargos_ocupados values('10001088',1,9,'1994-08-23','2000-11-21','Renuncia de su padre a la presidencia');
insert into politicos_cargos_ocupados values('10001088',2,8,'2006-07-26','2011-07-26','Fin de su mandato como congresita');
insert into politicos_cargos_ocupados values('06466585',3,7,'2011-01-01','2014-12-31','Fin de su mandato');
insert into politicos_cargos_ocupados values('06466585',3,7,'2019-01-01','2019-08-20','Sentencia por corrupción');
insert into politicos_cargos_ocupados values('10000000',6,5,'1978-07-28','1979-08-02','Fin de mandato');
insert into politicos_cargos_ocupados values('20000000',6,10,'1978-07-28','1980-07-28','Fin de mandato');
insert into politicos_cargos_ocupados values('20000000',4,11,'1964-01-01','1969-12-31','Fin de mandato');
insert into politicos_cargos_ocupados values('20000000',7,2,'1963-07-28','1963-10-28','Fin de mandato');


-- Poblar tabla notas_periodisticas
insert into notas_periodisticas values(1,'https://larepublica.pe/politica/845450-alejandro-toledo-allanan-su-casa-en-camacho-por-caso-odebrecht-fotos/','Juez ordenó 18 meses de prisión preventiva para Toledo',null);
insert into notas_periodisticas values(2,'http://elcomercio.pe/politica/justicia/juez-decidira-si-aprueba-prision-preventiva-alejandro-toledo-noticia-1967089','Keiko Fujimori: PJ dictó 15 meses de prisión preventiva en su contra',null);
insert into notas_periodisticas values(3,'https://larepublica.pe/politica/2020/01/28/keiko-fujimori-hoy-audiencia-en-vivo-ultimas-noticias-de-prision-preventiva-para-lideresa-de-fuerza-popular-por-caso-odebrecht-peru-via-justicia-tv-jose-domingo-perez/','La "Señora K" es Keiko Fujimori',null);
insert into notas_periodisticas values(4,'https://www.idl-reporteros.pe/la-senora-k-es-keiko-fujimori/','Keiko Fujimori, detenida por presunto lavado de activos',null);
insert into notas_periodisticas values(5,'https://www.lavanguardia.com/internacional/20181010/452291955898/keiko-fujimori-detenida-lavado-activos-peru.html','Julio Guzmán es el nuevo viceministro de Mype e Industria',null);
insert into notas_periodisticas values(6,'https://archivo.gestion.pe/noticia/978517/julio-guzman-nuevo-viceministro-mype-industria','Caso Odebrecht: Fiscalía dispone iniciar diligencias preliminares contra Julio Guzmán',null);
insert into notas_periodisticas values(7,'https://andina.pe/agencia/noticia-caso-odebrecht-fiscalia-dispone-iniciar-diligencias-preliminares-contra-julio-guzman-810294.aspx','Julio Guzmán: "Es materialmente imposible que yo haya recibido plata de Odebrecht"',null);
insert into notas_periodisticas values(8,'https://rpp.pe/politica/judiciales/julio-guzman-es-materialmente-imposible-que-yo-haya-recibido-plata-de-odebrecht-noticia-1287182','',null);

-- Poblar tabla politicos_notas_periodisticas
insert into politicos_notas_periodisticas values('08774976','1');
insert into politicos_notas_periodisticas values('08774976','2');
insert into politicos_notas_periodisticas values('10001088','3');
insert into politicos_notas_periodisticas values('10001088','4');
insert into politicos_notas_periodisticas values('10001088','5');
insert into politicos_notas_periodisticas values('09337130','7');
insert into politicos_notas_periodisticas values('09337130','8');















