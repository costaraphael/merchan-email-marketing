class AddRoleToUsuario < ActiveRecord::Migration
  def change
    add_column :usuarios, :role_id, :integer
  end
end
