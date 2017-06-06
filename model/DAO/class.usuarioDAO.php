<?php

/**
 * conjunto de funciones para la tabla ces_usuario
 */
class usuarioDAO extends dataSource implements IUsuario {

    /**
     * funcion para hacer borrado logico o permanente
     * @param type $id
     * @param type $logico
     * @return integer
     */
    public function delete($id, $logico = true) {

        if ($logico === true) {
            $sql = 'UPDATE FROM usuario SET usu_delete_at = now() WHERE usu_id = :id';
        } else {
            $sql = 'DELETE FROM usuario WHERE usu_id = :id';
        }

        $params = array(
            ':id' => $id
        );
        return $this->execute($sql, $params);
    }

    /**
     * funcion para insertar nuevo usuario
     * @param \usuario $usuario
     * @return integer
     */
    public function insert(\usuario $usuario) {
        $sql = 'INSERT INTO usuario (usu_alias, usu_contrasena,rol_id,create_at) VALUES (:alias,:contrasena,:rol ,now())';
        $params = array(
            ':alias' => $usuario->getAlias(),
            ':contrasena' => $usuario->getContrasena(),
            ':rol' => $usuario->getRol()
        );
        return $this->execute($sql, $params);
    }

    /**
     * funcion para seleccionar todos los usuarios
     * @return array of stdClass
     */
    public function select() {
        $sql = 'select c.usu_alias,c.usu_contrasena
from usuario as c inner join rol as r on c.rol_id=r.rol_id';
        return $this->query($sql);
    }

    /**
     * funcion para seleccionar uduarios por id
     * @param type $id
     * @return array of stdClass
     */
    public function selectById($id) {
        $sql = 'SELECT usu_alias, usu_contrasena,rol_id id FROM usuario WHERE usu_id = :id';
        $params = array(
            ':id' => $id
        );
        return $this->query($sql, $params);
    }

    /**
     * funcion para actulizar usuarios
     * @param \usuario $usuario
     * @return integer
     */
    public function update(\usuario $usuario) {
        $sql = 'UPDATE usuario SET usu_alias = :alias, usu_contrasena = :contrasena, rol_id = :rol WHERE usu_id = :id';
        $params = array(
            ':alias' => $usuario->getAlias(),
            ':contrasena' => $usuario->getContrasena(),
            ':rol' => $usuario->getRol(),
            ':id' => $usuario->getId()
        );
        return $this->execute($sql, $params);
    }

}
