class CreateGrupoUsuarios < ActiveRecord::Migration
  def change
    create_table :grupo_usuarios do |t|
      t.string :nome

      t.timestamps
    end
  end
end
