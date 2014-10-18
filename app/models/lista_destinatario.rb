class ListaDestinatario < ActiveRecord::Base
  belongs_to :lista
  belongs_to :destinatario
end
