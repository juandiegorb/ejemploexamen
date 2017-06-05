<?php

class contacto {

    private $id;
    private $foto;
    private $nombre;
    private $apellido;
    private $telefono;
    private $correo;
    private $create_at;
    private $update_at;
    private $delete_at;

    function getId() {
        return $this->id;
    }

    function getFoto() {
        return $this->foto;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getApellido() {
        return $this->apellido;
    }

    function getTelefono() {
        return $this->telefono;
    }

    function getCorreo() {
        return $this->correo;
    }

    function getCreate_at() {
        return $this->create_at;
    }

    function getUpdate_at() {
        return $this->update_at;
    }

    function getDelete_at() {
        return $this->delete_at;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setFoto($foto) {
        $this->foto = $foto;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setApellido($apellido) {
        $this->apellido = $apellido;
    }

    function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    function setCorreo($correo) {
        $this->correo = $correo;
    }

    function setCreate_at($create_at) {
        $this->create_at = $create_at;
    }

    function setUpdate_at($update_at) {
        $this->update_at = $update_at;
    }

    function setDelete_at($delete_at) {
        $this->delete_at = $delete_at;
    }

}
