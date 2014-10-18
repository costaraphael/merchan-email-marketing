class AddIdentificadorToRole < ActiveRecord::Migration
  def change
    add_column :roles, :identificador, :string
  end
end
