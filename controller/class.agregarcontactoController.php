<?php

class agregarcontacto extends controllerExtended {

    public function main(\request $request) {
        try {
            $this->loadTableUsuario();
            
            $contactos = new contacto();
            $contactos->setFoto($request->getParam('foto'));
            $contactos->setNombre($request->getParam('nombre'));
            $contactos->setApellido($request->getParam('apellido'));
            $contactos->setTelefono($request->getParam('telefono'));
            $contactos->setCorreo($request->getParam('correo'));


            $contactoDAO = new contactoDAOExt($this->getConfig());
            $respuesta1 = $contactoDAO->insert($contactos);
            $respuesta2 = array(
                'code' => (count($respuesta1) > 0) ? 200 : 500,
                'datos' => $respuesta1
            );

            $this->setParam('rsp', $respuesta2);
            $this->setView('imprimirJson');
        } catch (Exception $exc) {
            echo $exc->getMessage();
        }
    }

    private function loadTableUsuario() {
        require $this->getConfig()->getPath() . 'model/table/table.contacto.php';
        require $this->getConfig()->getPath() . 'model/interface/interface.contacto.php';
        require $this->getConfig()->getPath() . 'model/DAO/class.contactoDAO.php';
        require $this->getConfig()->getPath() . 'model/extended/class.contactoDAOExt.php';
    }

}
