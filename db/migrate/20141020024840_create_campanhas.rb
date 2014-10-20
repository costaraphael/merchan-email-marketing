class CreateCampanhas < ActiveRecord::Migration
  def change
    create_table :campanhas do |t|
      t.string :nome
      t.references :criador, index: true

      t.timestamps
    end
  end
end
