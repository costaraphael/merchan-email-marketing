class Destinatario < ActiveRecord::Base

  validates :email, presence: {message: 'não pode ser nulo'}
  validates :email, uniqueness: {message: 'informado já está cadastrado!'}
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: 'informado não é válido'}
  validates :nome, presence: {message: 'não pode ser nulo'}
  validates :sexo, presence: {message: 'não pode ser nulo'}

  def sexo_nome
    self.sexo == 'm' ? 'Masculino' : 'Feminino'
  end

  def to_s
    "#{self.nome} <#{self.email}>"
  end

  def inativo
    not self.status
  end

  def self.by_query(texto)
    nomes = texto.split(' ')
    query = self.where status: true
    nomes.each do |nome|
      query = query.where('nome LIKE :nome OR email LIKE :nome', nome: "%#{nome}%")
    end
    query
  end

end
