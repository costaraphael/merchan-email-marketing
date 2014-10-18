class CreateDestinatarios < ActiveRecord::Migration
  def change
    create_table :destinatarios do |t|
      t.string :nome
      t.string :email
      t.boolean :status
      t.string :sexo

      t.timestamps
    end
  end
end
