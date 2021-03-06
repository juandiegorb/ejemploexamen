<?php

/**
 * conjunto de funciones para la tabla ces_usuario
 */
class contactoDAO extends dataSource implements IContacto {

    public function delete($id, $logico = true) {

        if ($logico === true) {
            $sql = 'UPDATE contacto SET delete_at = now() WHERE con_id = :id';
            $params = array(
                ':id' => $id
            );
            return $this->execute($sql, $params);
        } else if ($logico === false) {
            $sql = 'DELETE FROM contacto WHERE con_id = :id AND delete_at is NULL';
            $params = array(
                ':id' => $id
            );
            return $this->execute($sql, $params);
        }
    }

    public function insert(\contacto $contacto) {
        $sql = 'INSERT INTO contacto (con_foto, con_nombre, con_apellido, con_telefono, con_correo, create_at) VALUES (:foto, :nombre, :apellido, :telefono, :correo, now())';
        $params = array(
            ':foto' => $contacto->getFoto(),
            ':nombre' => $contacto->getNombre(),
            ':apellido' => $contacto->getApellido(),
            ':telefono' => $contacto->getTelefono(),
            ':correo' => $contacto->getCorreo(),
        );
        return $this->execute($sql, $params);
    }

    public function select() {
        $sql = 'SELECT con_id,con_foto, con_nombre, con_apellido, con_telefono, con_correo FROM contacto WHERE delete_at IS NULL';
        return $this->query($sql);
    }

    public function selectById($id) {
        $sql = 'SELECT con_foto, con_nombre, con_apellido, con_telefono, con_correo FROM contacto WHERE con_id = :id';
        $params = array(
            ':id' => $id
        );
        return $this->query($sql, $params);
    }

    /**
     * funcion para actulizar usuarios
     * @param \contacto $contacto
     * @return integer
     */
    public function update(\contacto $contacto) {
        $sql = 'UPDATE contacto SET con_foto = :foto, con_nombre = :nombre, con_apellido = :apellido, con_telefono = :telefono, con_correo = :correo WHERE con_id = :id';
        $params = array(
            ':id' => $contacto->getId(),
            ':foto' => $contacto->getFoto(),
            ':nombre' => $contacto->getNombre(),
            ':apellido' => $contacto->getApellido(),
            ':telefono' => $contacto->getTelefono(),
            ':correo' => $contacto->getCorreo(),
        );
        return $this->execute($sql, $params);
    }

}
