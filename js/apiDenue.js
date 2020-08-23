var token = '762b286c-8f09-4136-a0ba-cd3ca27e5718';
         
var urlApiBusqueda = "https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/#condicion/#latitud,#longitud/#metros/#token";
var vecNombres = [
'id de establecimiento',
'Nombre de la unidad económica:',
'Razón social:',
'Nombre de la clase de actividad:',
'Personal ocupado (estrato):',
'Tipo de vialidad:',
'Nombre de la vialidad:',
'Número exterior o km:',
'Número o letra interior:',
'Nombre del asentamiento humano:',
'Código postal:',
'Entidad,Municipio,Localidad:',
'Número de teléfono:',
'Correo electrónico:',
'Sitio en Internet:',
'Tipo de unidad económica:',
'Latitud:',
'Longitud:',
'Centro comercial:',
'Tipo de centro comercial:',
'Número de local:'];
 
function llamarApiDenueBus(){
    var condicion = $('#condi').val();
    var longitud = $('#lon').val();
    var latitud = $('#lat').val();
    var metros = $('#mts').val();
    var urlApiBusquedaTmp = urlApiBusqueda.replace('#condicion',condicion);
    urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#latitud',latitud);
    urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#longitud',longitud);
    urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#metros',metros);
    urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#token',token);
     
    $.getJSON( urlApiBusquedaTmp, function( json ) {  
        var codHtml = '';
        for(var i = 0; i < json.length; i++){
        codHtml += '<table style="width:50%;">';
        codHtml += '<tr><th colspan="2">Establecimiento ' + (i + 1) + '</th></tr>';
        codHtml += '<tr><td style="width:50%;" >' + vecNombres[0] + '</td><td style="width:50%;">' + json[i].Id + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[1] + '</td><td style="width:50%;">' + json[i].Nombre + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[2] + '</td><td style="width:50%;">' + json[i].Razon_social + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[3] + '</td><td style="width:50%;">' + json[i].Clase_actividad + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[4] + '</td><td style="width:50%;">' + json[i].Estrato + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[5] + '</td><td style="width:50%;">' + json[i].Tipo_vialidad + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[6] + '</td><td style="width:50%;">' + json[i].Calle + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[7] + '</td><td style="width:50%;">' + json[i].Num_Exterior + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[8] + '</td><td style="width:50%;">' + json[i].Num_Interior + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[9] + '</td><td style="width:50%;">' + json[i].Colonia + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[10] + '</td><td style="width:50%;">' + json[i].CP + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[11] + '</td><td style="width:50%;">' + json[i].Ubicacion + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[12] + '</td><td style="width:50%;">' + json[i].Telefono + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[13] + '</td><td style="width:50%;">' + json[i].Correo_e + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[14] + '</td><td style="width:50%;">' + json[i].Sitio_internet + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[15] + '</td><td style="width:50%;">' + json[i].Tipo + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[16] + '</td><td style="width:50%;">' + json[i].Latitud + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[17] + '</td><td style="width:50%;">' + json[i].Longitud + 
'</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[18] + '</td><td style="width:50%;">' + json[i].CentroComercial + '</td></tr>'+
        '<tr><td style="width:50%;" >' + vecNombres[19] + '</td><td style="width:50%;">' + json[i].TipoCentroComercial + '</td></tr>'+
        '<tr><td style="width:50%;" >' +vecNombres[20] + '</td><td style="width:50%;">' + json[i].NumLocal +  
'</td></tr>'
        codHtml += '<tr><td></td></tr></table><br><br>';
        }
         
        $('#tabDenue').html(codHtml);
    }); 
}  