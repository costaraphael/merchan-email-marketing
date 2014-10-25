json.extract! @campanha, :id, :nome, :descricao
json.mensagens do
  json.array!(@campanha.mensagens) do |mensagem|
    json.extract! mensagem, :id, :enviada, :envio
    json.url campanha_mensagem_url(@campanha, mensagem)
  end
end

