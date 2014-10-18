json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :nome, :login, :senha, :salt, :grupo_usuario_id
  json.url usuario_url(usuario, format: :json)
end
