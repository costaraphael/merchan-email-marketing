# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$('.add_destinatario_destinatario').select2
    placeholder: "Clique aqui para buscar um destinatário"
    minimumInputLength: 3
    ajax:
        url: "/destinatarios.json",
        dataType: 'json'
        data: (term) ->
            by_query: term
        results: (destinatarios) -> # parse the results into the format expected by Select2.
            data = []
            for destinatario in destinatarios
                data.push
                    id: destinatario.id
                    text: destinatario.nome + ' <' + destinatario.email + '>'
            results: data
