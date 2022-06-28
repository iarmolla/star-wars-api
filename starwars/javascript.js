//
$(function() {
    // alert("viculacion de Script js OK")
    //buscamos cuando se dispara el evento click sobre el boton de buscar
    $("#buscar").click(e => {
        buscarPersonaje()
    });
    //capturo el dom y escucho el evento "presionar una tecla"
    $(document).keypress(function(e){
        if(e.which==13){
            buscarPersonaje();
        }
    });
});

function buscarPersonaje(){
    let id_personaje = $("#input_busqueda").val();
    if(id_personaje>=0 && id_personaje!=""){
        getPersonaje(id_personaje);
        $("#input_busqueda").val("");
        $("#input_busqueda").focus(); 
    } 
}

function getPersonaje(id){
    $.ajax({
        type:"get",
        url:`https://swapi.dev/api/people/${id}`,
        success:function(responseAPI){
            $("#agregarLuke").append(generarCard(responseAPI));
        }
    });
}
function generarCard(personajeIsObject){
    let card=
    `
        <tr>
            <td>${personajeIsObject.name}</td>
            <td>${personajeIsObject.height}</td>
            <td>${personajeIsObject.mass}</td>
            <td>${personajeIsObject.hair_color}</td>
            <td>${personajeIsObject.skin_color}</td>
            <td>${personajeIsObject.birth_year}</td>
            <td>${personajeIsObject.eye_color}</td>
            <td>${personajeIsObject.gender}</td>
        </tr>
    `
    return card;
}
window.onload=getPersonaje(5);
