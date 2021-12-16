$(document).ready(function(){
  $('#calculador_volumen').click(calculo);
});

function calculo(){
  
var tabla_volumen = new Array(6);

var vnivel,vpeso,vedad,vforma_fisica,vvolumen;

for(var i = 0;i<tabla_volumen.length;i++){
  tabla_volumen[i] = new Array(6);
}

tabla_volumen[0][0] = 14;
tabla_volumen[0][1] = 15.60;
tabla_volumen[0][2] = 17.10;
tabla_volumen[0][3] = 18;
tabla_volumen[0][4] = 18.70;
tabla_volumen[0][5] = 19.80;

for(var i = 6;i<16;i++){
  tabla_volumen[0][i] = tabla_volumen[0][i-1]+1.65;
}

tabla_volumen[1][0] = 15.05;
tabla_volumen[1][1] = 16.40;
tabla_volumen[1][2] = 18;
tabla_volumen[1][3] = 19;
tabla_volumen[1][4] = 19.80;
tabla_volumen[1][5] = 21;

for(var i = 6;i<16;i++){
  tabla_volumen[1][i] = tabla_volumen[1][i-1]+1.75;
}

tabla_volumen[2][0] = 15.75;
tabla_volumen[2][1] = 17.20;
tabla_volumen[2][2] = 18.90;
tabla_volumen[2][3] = 20.50;
tabla_volumen[2][4] = 21.45;
tabla_volumen[2][5] = 22.80;

for(var i = 6;i<16;i++){
  tabla_volumen[2][i] = tabla_volumen[2][i-1]+1.90;
}

tabla_volumen[3][0] = 16.80;
tabla_volumen[3][1] = 18.80;
tabla_volumen[3][2] = 20.70;
tabla_volumen[3][3] = 22.50;
tabla_volumen[3][4] = 23.65;
tabla_volumen[3][5] = 25.20;

for(var i = 6;i<16;i++){
  tabla_volumen[3][i] = tabla_volumen[3][i-1]+2.10;
}

tabla_volumen[4][0] = 21;
tabla_volumen[4][1] = 23.60;
tabla_volumen[4][2] = 26.10;
tabla_volumen[4][3] = 28.50;
tabla_volumen[4][4] = 30.25;
tabla_volumen[4][5] = 32.40;

for(var i = 6;i<16;i++){
  tabla_volumen[4][i] = tabla_volumen[4][i-1]+2.70;
}

tabla_volumen[5][0] = 25.90;
tabla_volumen[5][1] = 29.20;
tabla_volumen[5][2] = 32.40;
tabla_volumen[5][3] = 35.50;
tabla_volumen[5][4] = 37.95;
tabla_volumen[5][5] = 40.80;

for(var i = 6;i<16;i++){
  tabla_volumen[5][i] = tabla_volumen[5][i-1]+3.40;
}

vnivel  =  $('#nivel').val();
vpeso  =  $('#peso').val();
vedad  =  $('#edad').val();
vforma_fisica  =  $('#forma_fisica').val();
vvolumen  =  (tabla_volumen[vnivel][vpeso])*(parseFloat('1.'+vedad))*(parseFloat('1.'+vforma_fisica));

$('#resultado').slideDown("slow");
$( ".form-control" ).change(function() {
  $('#resultado').slideUp("slow");
});

$('#tablas_recomendadas').hide();
$('.volumen').html(vvolumen.toFixed(2));tablas_recomendadas();

}

function tablas_recomendadas(){
  var volumen_ideal = parseFloat($('#volumen_ideal').html());
  $.ajax({url:baseDir+'resultado',data:{volumen:volumen_ideal,},success:function(output){
    if(!output){
      $('#tablas_recomendadas').show();$('#tablas_recomendadas').html('<p id = "resultado2">El volumen adecuado de tabla para ti es de <span class = "volumen">'+volumen_ideal.toFixed(2)+'</span> litros.</p>');
  }else{
    $('#resultado').show();
    $('#tablas_recomendadas').show();
    $('#tablas_recomendadas').html(output);}},}).done(function(){totalCompareButtons();compareButtonsStatusRefresh();
      var AlbertoCustomAjax  =  new $.AlbertoCustomAjax();
      AlbertoCustomAjax.processAjax()

;})

;}