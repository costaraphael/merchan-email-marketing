class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.text :nome
      t.timestamps
    end
  end
end
