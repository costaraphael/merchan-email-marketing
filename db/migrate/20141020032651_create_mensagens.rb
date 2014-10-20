class CreateMensagens < ActiveRecord::Migration
  def change
    create_table :mensagens do |t|
      t.references :campanha, index: true
      t.boolean :enviada
      t.datetime :envio
      t.text :texto

      t.timestamps
    end
  end
end
