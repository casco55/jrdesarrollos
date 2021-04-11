
<?php

function registro(){    
   require ('conexion.php');
        $nombre_contacto = $conexion->real_escape_string($_POST['nombre_contacto']);
        $fono_contacto = $conexion->real_escape_string($_POST['fono_contacto']);
        $mail_contacto = $conexion->real_escape_string($_POST['mail_contacto']);
        $solicitud_contacto = $conexion->real_escape_string($_POST['solicitud_contacto']);
        
          
      
        $insertar = "INSERT INTO registros (nombre,fono,email,descripcion,fecha,hora) VALUES ('$nombre_contacto','$fono_contacto','$mail_contacto','$solicitud_contacto',curdate(),curtime())";
        $resultado = mysqli_query($conexion,$insertar)
        or die (2);
        echo "exito";
      }
  
  registro();
     ?>