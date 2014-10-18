class Usuario < ActiveRecord::Base
  belongs_to :grupo_usuario
  belongs_to :role

  has_many :listas

  validates :senha, confirmation: {message: '^Os campos senha e confirmar senha devem ser iguais'}
  validates :senha, presence: {message: 'não pode ser nulo'}
  validates :login, presence: {message: 'não pode ser nulo'}
  validates :login, uniqueness: {message: 'informado já está sendo utilizado'}
  validates :email, presence: {message: 'não pode ser nulo'}
  validates :email, uniqueness: {message: 'informado já está sendo utilizado'}
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: 'informado não é válido'}
  validates :nome, presence: {message: 'não pode ser nulo'}

  def to_s
    self.nome
  end

  def ativo?
    self.ativo
  end
end
