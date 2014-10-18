class CreateListas < ActiveRecord::Migration
  def change
    create_table :listas do |t|
      t.string :nome
      t.references :usuario, index: true
      t.boolean :publica
      t.boolean :global

      t.timestamps
    end
  end
end
