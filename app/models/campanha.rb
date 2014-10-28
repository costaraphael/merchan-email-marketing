class Campanha < ActiveRecord::Base
  belongs_to :criador, class_name: 'Usuario'

  has_many :mensagens
  has_and_belongs_to_many :listas
end
