json.array!(@listas) do |lista|
  json.extract! lista, :id, :nome, :usuario_id, :publica, :global
  json.url lista_url(lista, format: :json)
end
