# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
summer_note = $ '#usuario_assinatura'
summer_note.summernote
  focus: true
  lang: 'pt-BR'
  height: 200
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'italic', 'underline', 'clear']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
    ['table', ['table']],
    ['insert', ['picture', 'link']]
  ]

summer_note.code summer_note.val()

summer_note.closest('form').submit ->
  summer_note.val summer_note.code()
  true