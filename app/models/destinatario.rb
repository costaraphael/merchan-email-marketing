class Destinatario < ActiveRecord::Base

  def self.by_query(texto)
    nomes = texto.split(' ')
    query = self
    nomes.each do |nome|
      query = query.where('nome LIKE :nome OR email LIKE :nome', nome: "%#{nome}%")
    end
    query
  end

  def to_s
    "#{self.nome} <#{self.email}>"
  end
end
