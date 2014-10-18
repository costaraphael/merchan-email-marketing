class AddAtivoToUsuario < ActiveRecord::Migration
  def change
    add_column :usuarios, :ativo, :boolean
  end
end
