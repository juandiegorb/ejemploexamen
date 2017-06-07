<?php

class identificar extends controllerExtended {

    public function main(\request $request) {
        try {
            $this->loadTableUsuario();
            if ($request->getParam('accion') === 'guardar') {
                $contactos = new contacto();
                $contactos->setFoto('a');
                $contactos->setNombre($request->getParam('nombre'));
                $contactos->setApellido($request->getParam('apellido'));
                $contactos->setTelefono($request->getParam('telefono'));
                $contactos->setCorreo($request->getParam('correo'));


                $contactoDAO = new contactoDAOExt($this->getConfig());
                $respuesta1 = $contactoDAO->insert($contactos);
                $respuesta2 = array(
                    'code' => (count($respuesta1) > 0) ? 200 : 500,
                    'datos' => $respuesta1,
                    'mensaje' => 'ingresado'
                );

                $this->setParam('rsp', $respuesta2);
                $this->setView('imprimirJson');
            }
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
