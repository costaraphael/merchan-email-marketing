class AddAssinaturaToUsuario < ActiveRecord::Migration
  def change
    add_column :usuarios, :assinatura, :text
  end
end
