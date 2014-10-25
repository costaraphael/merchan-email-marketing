json.array!(@campanhas) do |campanha|
  json.extract! campanha, :id, :nome, :criador_id
  json.url campanha_url(campanha, format: :json)
  json.mensagens campanha_mensagens_url(campanha)
end
