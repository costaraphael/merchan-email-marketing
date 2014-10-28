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
    .where('listas.usuario_id = :usuario OR (listas.publica = 1 AND usuarios.grupo_usuario_id = :grupo_usuario) OR listas.global = 1',
           usuario: user.id, grupo_usuario: user.grupo_usuario_id)
  end

  def self.by_query(texto)
    nomes = texto.split(' ')
    query = self
    nomes.each do |nome|
      query = query.where('listas.nome LIKE :nome', nome: "%#{nome}%")
    end
    query
  end
end
