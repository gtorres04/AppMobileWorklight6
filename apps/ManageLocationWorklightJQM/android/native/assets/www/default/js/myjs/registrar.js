
/* JavaScript content from js/myjs/registrar.js in folder common */
/**
 * 
 */
function registrarPais(){
	var codigoPais=$("#codigoPais").val();
	var nombrePais=$("#nombrePais").val();
	var invocationData = {
			adapter : 'PaisAdapter',
			procedure : 'addPaisAdapter',
			parameters : [codigoPais,nombrePais]
	};
	var options = {
			onSuccess : resultadoExitosoRegistrar,
			onFailure : resultadoErroneoRegistrar
	};
	WL.Client.invokeProcedure(invocationData, options);
}
function resultadoExitosoRegistrar(resultado){
	$("#codigoPais").val("");
    $("#nombrePais").val("");
	var mensaje=resultado.invocationResult.array[0];
	var codigo=mensaje.codigo;
	var titulo=mensaje.titulo;
	var desc=mensaje.descripcion;
	if(codigo=="OK"){
		confirm("CODIGO-->"+codigo+"\nTITULO: "+titulo+"\nDESCRIPCION: "+desc+"\n");
	}else{
		alert("CODIGO-->"+codigo+"\nTITULO: "+titulo+"\nDESCRIPCION: "+desc+"\n")
	}
	
}
function resultadoErroneoRegistrar(resultado){
	alert("Error al registrar el pais-->"+resultado);
}