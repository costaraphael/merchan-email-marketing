class Mensagem < ActiveRecord::Base
  belongs_to :campanha
  has_and_belongs_to_many :destinatarios

  def self.atrasadas
    self.where('enviada = 0 AND envio <= :agora', agora: Time.now)
  end
end
