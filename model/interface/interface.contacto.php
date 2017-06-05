<?php

interface IContacto {

    public function select();

    public function selectById($id);

    public function insert(usuario $contacto);

    public function update(usuario $contacto);

    public function delete($id, $logico = true);

    public function search($nombre, $apellido, $telefono);
}
