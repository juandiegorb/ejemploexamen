<?php

class usuarioDAOExt extends usuarioDAO {

  public function search($usuario, $contrasena) {
    $sql = 'SELECT usu_id, usu_alias, usu_contrasena FROM usuario WHERE usu_usuario = :user AND usu_contrasena = :pass';
    $params = array(
        ':user' => $usuario,
        ':pass' => $contrasena,
    );
    
    return $this->query($sql, $params);
  }

}
