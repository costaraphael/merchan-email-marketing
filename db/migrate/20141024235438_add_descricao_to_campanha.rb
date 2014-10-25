class AddDescricaoToCampanha < ActiveRecord::Migration
  def change
    add_column :campanhas, :descricao, :text
  end
end
