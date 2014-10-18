json.array!(@destinatarios) do |destinatario|
  json.extract! destinatario, :id, :nome, :email, :status, :sexo
  json.url destinatario_url(destinatario, format: :json)
end
