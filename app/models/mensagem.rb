class Mensagem < ActiveRecord::Base
  belongs_to :campanha

  def self.atrasadas
    self.where('enviada = 0 AND envio <= :agora', agora: Time.now)
  end
end
