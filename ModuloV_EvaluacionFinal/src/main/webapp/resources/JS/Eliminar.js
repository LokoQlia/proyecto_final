/**
 * Funcion de alertar para eliminar un asistente
 */


function preguntar (id){
        	 
        	 if(confirm("Esta seguro de eliminar este asistente")){
        		 window.location.href = "<c:out value='${pageContext.request.contextPath}' />/eliminarasistente/"+id;
        	 }
         }