json.array!(@listas) do |lista|
  json.extract! lista, :id, :nome
end
