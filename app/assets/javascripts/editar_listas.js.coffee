# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$('.add_lista_lista_select2').removeClass('form-control').select2(
  placeholder: "Clique aqui para buscar uma lista"
  minimumInputLength: 3
  escapeMarkup: (m) ->
    m
  ajax:
    url: "/listas.json",
    dataType: 'json'
    data: (term) ->
      by_query: term
    results: (listas) -> # parse the results into the format expected by Select2.
      data = []
      for lista in listas
        data.push
          id: lista.id
          text: lista.nome
      results: data
).on 'change', (event) ->
  $('#add_lista_lista_id').val event.val

$('.simple_form.add_lista').on 'submit', ->
  $('.add_lista_lista_select2').select2 'val', undefined