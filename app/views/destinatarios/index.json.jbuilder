json.array!(@destinatarios) do |destinatario|
  json.extract! destinatario, :id, :nome, :email
end
