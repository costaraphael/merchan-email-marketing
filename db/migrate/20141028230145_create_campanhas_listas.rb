class CreateCampanhasListas < ActiveRecord::Migration
  def change
    create_table :campanhas_listas do |t|
      t.integer 'campanha_id'
      t.integer 'lista_id'
    end
  end
end
