<?php

class usuarioDAOExt extends usuarioDAO {

  public function search($alias, $contrasena) {
    $sql = 'SELECT usu_id, usu_alias, usu_contrasena, rol_id FROM usuario WHERE usu_alias = :alias AND usu_contrasena = :contrasena';
    $params = array(
        ':alias' => $alias,
        ':contrasena' => $contrasena,
    );
    
    return $this->query($sql, $params);
  }

}
