class Usuario < ActiveRecord::Base
  belongs_to :grupo_usuario
  belongs_to :role

  has_many :listas

  validates :senha, confirmation: {message: '^Os campos senha e confirmar senha devem ser iguais'}
  validates :senha, presence: {message: 'não pode ser nulo'}
  validates :login, presence: {message: 'não pode ser nulo'}
  validates :login, uniqueness: {message: 'já está sendo utilizado'}
  validates :nome, presence: {message: 'não pode ser nulo'}

  def to_s
    self.nome
  end

  def ativo?
    self.ativo
  end
end
