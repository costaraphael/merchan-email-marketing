class Campanha < ActiveRecord::Base
  belongs_to :criador, class_name: 'Usuario'

  has_many :mensagens
end
