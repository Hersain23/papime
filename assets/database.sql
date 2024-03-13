//Create database 
CREATE DATABASE papime;
USE papime;

CREATE TABLE Autor (
    AutorID INT AUTO_INCREMENT,
    Nombre_Autor TEXT,
    PRIMARY KEY (AutorID)
);

CREATE TABLE Articulo (
    ID INT AUTO_INCREMENT,
    Titulo TEXT,
    Anio YEAR,
    URL_Articulo VARCHAR(100),
    Intervencion TEXT,
    Efectos TEXT,
    Metodologia TEXT,
    Temporalidad TEXT,
    Sesgos_Probables TEXT,
    Sesgos_Moderados TEXT,
    Pais TEXT,
    Num_Citas INT,
    Categoria TEXT,
    PRIMARY KEY (ID)
);

CREATE TABLE ArticuloAutor (
    ArticuloID INT,
    AutorID INT,
    FOREIGN KEY (ArticuloID) REFERENCES Articulo(ID),
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    PRIMARY KEY (ArticuloID, AutorID));

DELIMITER //

CREATE PROCEDURE InsertarDatosArticulo(
    IN p_Nombre_Autor TEXT,
    IN p_Titulo TEXT,
    IN p_Anio YEAR,
    IN p_URL VARCHAR(100),
    IN p_Intervencion TEXT,
    IN p_Efectos TEXT,
    IN p_Metodologia TEXT,
    IN p_Temporalidad TEXT,
    IN p_Sesgos_P TEXT,
    IN p_Sesgos_M TEXT,
    IN p_Pais TEXT,
    IN p_Num_Citas INT,
    IN p_Categoria TEXT
)
BEGIN
    DECLARE v_AutorID INT;
    DECLARE v_ArticuloID INT;

    SELECT AutorID INTO v_AutorID FROM Autor WHERE Nombre_Autor = p_Nombre_Autor;
    IF v_AutorID IS NULL THEN
        INSERT INTO Autor(Nombre_Autor)
        VALUES (p_Nombre_Autor);
        SET v_AutorID = LAST_INSERT_ID();
    END IF;

    SELECT ID INTO v_ArticuloID FROM Articulo WHERE Titulo = p_Titulo;
    IF v_ArticuloID IS NULL THEN
        INSERT INTO Articulo(Titulo, Anio, URL_Articulo, Intervencion, Efectos, Metodologia, Temporalidad, Sesgos_Probables, Sesgos_Moderados, Pais, Num_Citas, Categoria)
        VALUES (p_Titulo, p_Anio, p_URL, p_Intervencion, p_Efectos, p_Metodologia, p_Temporalidad, p_Sesgos_P, p_Sesgos_M, p_Pais, p_Num_Citas, p_Categoria);
        SET v_ArticuloID = LAST_INSERT_ID();
    END IF;

    INSERT IGNORE INTO ArticuloAutor(ArticuloID, AutorID)
    VALUES (v_ArticuloID, v_AutorID);
END //
DELIMITER ;


///////////////////////////////////////


CALL InsertarDatosArticulo('Autor', 
'Titulo', 
2023,
'URL', 
'Intervención', 
'Efectos', 
'Metodología', 
'Temporalidad', 
'SesgosP',
'SesgosM',
'Pais',
10, 
'Categoría');





