$(document).ready(function(){
  $('#btnGranja').click(function() {
    $('#granja').css('display', 'block');
    $('#tienda').css('display', 'none');
    $('#distribucion').css('display', 'none');
    $('#clientes').css('display', 'none');
    $('#administrativo').css('display', 'none');
  });
});

$(document).ready(function(){
  $('#btnTienda').click(function() {
    $('#granja').css('display', 'none');
    $('#tienda').css('display', 'block');
    $('#distribucion').css('display', 'none');
    $('#clientes').css('display', 'none');
    $('#administrativo').css('display', 'none');
  });
});

$(document).ready(function(){
  $('#btnDistribucion').click(function() {
    $('#granja').css('display', 'none');
    $('#tienda').css('display', 'none');
    $('#distribucion').css('display', 'block');
    $('#clientes').css('display', 'none');
    $('#administrativo').css('display', 'none');
  });
});

$(document).ready(function(){
  $('#btnClientes').click(function() {
    $('#granja').css('display', 'none');
    $('#tienda').css('display', 'none');
    $('#distribucion').css('display', 'none');
    $('#clientes').css('display', 'block');
    $('#administrativo').css('display', 'none');
  });
});

$(document).ready(function(){
  $('#btnAdministrativo').click(function() {
    $('#granja').css('display', 'none');
    $('#tienda').css('display', 'none');
    $('#distribucion').css('display', 'none');
    $('#clientes').css('display', 'none');
    $('#administrativo').css('display', 'block');
  });
});
