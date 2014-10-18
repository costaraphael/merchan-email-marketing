class Destinatario < ActiveRecord::Base
  def to_s
    "#{self.nome} <#{self.email}>"
  end
end
