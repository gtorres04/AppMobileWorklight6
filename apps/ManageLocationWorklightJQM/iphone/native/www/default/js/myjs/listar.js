
/* JavaScript content from js/myjs/listar.js in folder common */
/**
 * 
 */
function listarPaises(){
	var invocationData = {
			adapter : 'PaisAdapter',
			procedure : 'getPaisAdapters',
			parameters : []
	};
	var options = {
			onSuccess : resultadoExitoso,
			onFailure : resultadoErroneo
	};
	WL.Client.invokeProcedure(invocationData, options);
 }
function resultadoExitoso(resultado){
	removerlistaPaises();
	if(resultado.invocationResult.array){
		var cantidadObjetos=resultado.invocationResult.array.length;
		for (var i = 0; i < cantidadObjetos; i++) {
	 	   $('#listadoPaises').append('<li><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#">'+resultado.invocationResult.array[i].nombre+'</a></li>');
	 	}
		$('#listadoPaises').listview( "refresh" );
	}
}
function resultadoErroneo(resultado){
	alert("Error al listar los Paises-->"+resultado);
}

function removerlistaPaises(){
	$("#listadoPaises li").remove();
}


