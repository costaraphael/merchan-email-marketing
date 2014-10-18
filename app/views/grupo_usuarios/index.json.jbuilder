json.array!(@grupo_usuarios) do |grupo_usuario|
  json.extract! grupo_usuario, :id, :nome
  json.url grupo_usuario_url(grupo_usuario, format: :json)
end
