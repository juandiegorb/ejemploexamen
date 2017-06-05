<?php

class contactoDAOExt extends contactoDAO {

    public function search($nombre, $apellido, $telefono) {
        $sql = 'SELECT con_foto, con_nombre, con_apellido, con_telefono, con_correo FROM contacto WHERE con_nombre = :nombre OR con_apellido = :apellido OR con_telefono = :telefono';
        $params = array(
            ':nombre' => $nombre,
            ':apellido' => $apellido,
            ':telefono' => $telefono,
        );

        return $this->query($sql, $params);
    }

}
