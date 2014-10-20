json.array!(@mensagens) do |mensagem|
  json.extract! mensagem, :id, :campanha_id, :enviada, :envio, :texto
  json.url mensagem_url(mensagem, format: :json)
end
