<?php

interface IRol {

    public function select();

    public function selectById($id);

    public function insert(usuario $rol);

    public function update(usuario $rol);

    public function delete($id, $logico = true);

    }
