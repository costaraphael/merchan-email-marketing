class Lista < ActiveRecord::Base
  belongs_to :usuario
  has_many :lista_destinatarios
  has_many :destinatarios, through: :lista_destinatarios

  def to_s
    nome
  end
end
