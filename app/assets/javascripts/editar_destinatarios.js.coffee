# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
format = (destinatario) ->
  dados = destinatario.text.split '|&|'
  dados[0] + '<br>' + dados[1]

$('.add_destinatario_destinatario_select2').removeClass('form-control').select2(
  placeholder: "Clique aqui para buscar um destinatário"
  minimumInputLength: 3
  formatResult: format
  formatSelection: format
  escapeMarkup: (m) ->
    m
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
          text: destinatario.nome + '|&|' + destinatario.email
      results: data
).on 'change', (event) ->
  $('#add_destinatario_destinatario_id').val event.val

$('.simple_form.add_destinatario').on 'submit', ->
  $('.add_destinatario_destinatario_select2').select2 'val', undefined