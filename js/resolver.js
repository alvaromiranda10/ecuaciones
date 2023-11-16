var $boton = $('#boton');
var $var1 = $('#a');
var $var2 = $('#b');
var $var3 = $('#c');
var $x1 = $('#x1');
var $x2 = $('#x2');
var $mensaje = $('#mensaje');

$('#boton').on('click', function(){ 

	var a = $var1.val();
	var b = $var2.val();
	var c = $var3.val();
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);

	validaParametros(a,b,c);

 } );


function validaParametros(a,b,c)
	{

		var result=0;
		var x1;
		var x2;


		if (isNaN(a && b && c)) {
			$mensaje.html('ingrese solo numero');
		}
		if (a !=0 && b!=0 && c!=0) {
			result = b*b-4*a*c;
			
				if (result>=0) {
					x1 = (-b + Math.sqrt(result)) / (2 * a);
					x2 = (-b - Math.sqrt(result)) / (2 * a);
					$x1.val(x1);
					$x2.val(x2);
					

				}else{
					$mensaje.html('El valor es negativo');
				}
			
		}else{
			$mensaje.html('Ingrese un numero mayor a cero');
		}
	}