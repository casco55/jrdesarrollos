$("#nombre").bind("keypress", function (event) { // Nombre
  let regex = new RegExp("^[a-zA-Z-&-'-'\"' ]+$");
  let key = String.fromCharCode(
    !event.charCode ? event.which : event.charCode
  );
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$("#fono").keypress(function (event) { // Telefono
  if (event.which < 48 || event.which > 57 || this.value.length == 9) {
    return false;
  }
})

function registrar_contacto(){
  const nombre_contacto = $('#nombre').val()
  const fono_contacto = $('#fono').val()
  const mail_contacto = $('#mail').val()
  const solicitud_contacto = $('#solicitud').val()
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var los_elementos_alerta = []; 

  
    if (nombre_contacto == "" || fono_contacto.length < 9 || !emailRegex.test(mail_contacto) || solicitud_contacto == "") {
        if (nombre_contacto == "") {
            $('#nombre').css('border', '3px solid red');
            var nomb = "Nombre";
            los_elementos_alerta.push(nomb);            
         }else{
           $('#nombre').css('border', '0px solid red');
          
         }
         if (fono_contacto.length < 9) {
          $('#fono').css('border', '3px solid red');
          var elfo = "Teléfono válido";
          los_elementos_alerta.push(elfo);
        }else{
          $('#fono').css('border', '0px solid red');
        }
        if (!emailRegex.test(mail_contacto)) {
          $('#mail').css('border', '3px solid red');
          var ele = "Email válido";
          los_elementos_alerta.push(ele);
        }else{
          $('#mail').css('border', '0px solid red');
        }
        if (solicitud_contacto == ""){
          $('#solicitud').css('border', '3px solid red');
          var desc = "Descripción";
          los_elementos_alerta.push(desc);
        }else{
          $('#solicitud').css('border', '0px solid red');
        }

        let mensaje = "Estos campos son obligatorios: \n";
        let comentarios = los_elementos_alerta;
        comentarios.forEach(com => {
            mensaje += com + '\n';
        });
        alert(mensaje);

    } else {
      $('#nombre').css('border', '0px solid red');
      $('#fono').css('border', '0px solid red');
      $('#mail').css('border', '0px solid red');
      $('#solicitud').css('border', '0px solid red');
      $.ajax({
        type: 'POST',
        url: 'php/registro.php',
        data: {'nombre_contacto': nombre_contacto,'fono_contacto': fono_contacto,'mail_contacto': mail_contacto,'solicitud_contacto': solicitud_contacto},
      })
      .done(function(resultado){
         if (resultado = "exito") {
          alert('Hemos recibido sus datos con éxito, le contactaremos a la brevedad');
          nombre.value = "";
          fono.value  = "";
          mail.value = "";
          solicitud.value = "";
        
        } else{
          alert(resultado);
        }
      })   
     .fail(function(){
        alert('Error del servidor');
      }) 
     }
    }