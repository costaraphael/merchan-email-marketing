class Lista < ActiveRecord::Base
  belongs_to :usuario
  has_many :lista_destinatarios
  has_many :destinatarios, through: :lista_destinatarios

  def to_s
    nome
  end

  # @param [Usuario] user
  def self.listas_visiveis_para(user)
    self
    .joins(:usuario)
    .where('usuario_id = :usuario OR (publica = 1 AND grupo_usuario_id = :grupo_usuario) OR global = 1',
           usuario: user.id, grupo_usuario: user.grupo_usuario_id)
  end
end
