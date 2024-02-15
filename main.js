$(document).ready(function() {
    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const novaTarefa = $('#inserir-nova-tarefa').val()
        const novoItem = $('li').text(novaTarefa)
        $('').appendTo(novoItem)
        $('#inserir-nova-tarefa').val('')
    })

    $("#li-lista").click(function(){
        $("ol").addClass("li-lista");
    });
})

