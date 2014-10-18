class GrupoUsuario < ActiveRecord::Base

  validates :nome, presence: {message: 'não pode ser nulo'}
  validates :nome, uniqueness: {message: 'informado já está sendo utilizado'}

  def to_s
    self.nome
  end
end
