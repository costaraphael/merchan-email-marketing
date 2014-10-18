class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.string :nome
      t.string :login
      t.string :senha
      t.string :salt
      t.references :grupo_usuario, index: true

      t.timestamps
    end
  end
end
