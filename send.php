<?php

$req_name = $_POST['name'];
$req_mail = $_POST['email'];
$req_phone = $_POST['phone'];
$req_service = $_POST['service'];
$req_query = $_POST['query'];


$services = array("Lavado de Muebles y Tapicerias", "Pulido, Encerado y Cristalizado de pisos", "Limpieza general", "Terminación de obra", "Servicio subcontratado de aseo diario");


$sbj = "[LIV] $req_name ha solicitado información";

$msg = "Nombre: $req_name<br />";
$msg .= "Mail: $req_mail<br />";
$msg .= "Teléfono: $req_phone<br />";
$msg .= "Servicio: $services[$req_service]<br />";
$msg .= "Solicitud: $req_query<br />";


echo json_encode(array('sbj' => $sbj,'msg' => $msg,'success' => true));