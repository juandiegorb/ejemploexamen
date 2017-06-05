<?php

class usuario {

    private $id;
    private $alias;
    private $contrasena;
    private $create_at;
    private $update_at;
    private $delete_at;
    private $rol;

    function getId() {
        return $this->id;
    }

    function getAlias() {
        return $this->alias;
    }

    function getContrasena() {
        return $this->contrasena;
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

    function getRol() {
        return $this->rol;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setAlias($alias) {
        $this->alias = $alias;
    }

    function setContrasena($contrasena) {
        $this->contrasena = $contrasena;
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

    function setRol($rol) {
        $this->rol = $rol;
    }

}
