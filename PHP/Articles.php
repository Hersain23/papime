<?php
require_once "./Conection.php";
class Articles extends Conection{
    
    public function showArticles($category){
        $datos = array();
        try{
            $conection = parent::conection();
            $sql = "SELECT 
            Articulo.Titulo, 
            Articulo.Anio, 
            Articulo.URL_Articulo,
            Articulo.Intervencion,
            Articulo.Efectos, 
            Articulo.Metodologia, 
            Articulo.Temporalidad, 
            Articulo.Sesgos_Probables,
            Articulo.Sesgos_Moderados,
            Articulo.Pais,
            Articulo.Num_Citas, 
            Articulo.Categoria, 
            GROUP_CONCAT(Autor.Nombre_Autor SEPARATOR ', ') AS Autores
            FROM 
            Articulo 
            JOIN 
            ArticuloAutor ON Articulo.ID = ArticuloAutor.ArticuloID 
            JOIN 
            Autor ON ArticuloAutor.AutorID = Autor.AutorID 
            WHERE
            Articulo.Categoria = ?
            GROUP BY 
            Articulo.Titulo
            ORDER BY 
            Articulo.Titulo;
            ";
            $stmt = $conection->prepare($sql);
            $stmt->bind_param("s", $category);
            $stmt->execute();
            $result = $stmt->get_result();

            while($row = $result->fetch_assoc()) {
                $datos[] = $row;
            }
           return $datos;
        }catch(\Throwable $th){
            return $th->getMessage();
        }
        return $datos;
    }
}

$category = $_GET['category'] ?? '';
$obj = new Articles();
$datos = $obj->showArticles($category);
echo json_encode($datos);
?>