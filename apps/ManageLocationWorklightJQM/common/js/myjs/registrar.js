/**
 * 
 */
function registrarPais(){
	alert("ENTRO AL METOD REGISTRAR");
	var codigoPais=$("#codigoPais").val();
	var nombrePais=$("#nombrePais").val();
	var invocationData = {
			adapter : 'PaisAdapter',
			procedure : 'addPaisAdapter',
			parameters : [codigoPais,nombrePais]
	};
	var options = {
			onSuccess : resultadoExitoso,
			onFailure : resultadoErroneo
	};
	WL.Client.invokeProcedure(invocationData, options);
}
function resultadoExitoso(resultado){
	alert("RESULTADO EXITOSO");
	$("#codigoPais").val("");
    $("#nombrePais").val("");
	var cantidadObjetos=resultado.invocationResult.codigo;
	alert("CODIGO-->"+cantidadObjetos);
}
function resultadoErroneo(resultado){
	alert("Error al registrar el pais-->"+resultado);
}