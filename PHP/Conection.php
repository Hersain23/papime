<?php
class Conection{
    public function conection(){
        $servidor = "127.0.0.1:3306";
        $usuario = "u822360935_Admin_Papime";
        $password = "5&n0:sRZ0Dse";
        $baseDatos = "u822360935_PAPIME";

        // Crear conexión
        $conn = new mysqli($servidor, $usuario, $password, $baseDatos);

        // Verificar conexión
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        return $conn;
    }   
}
?>