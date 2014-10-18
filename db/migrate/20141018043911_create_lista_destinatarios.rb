class CreateListaDestinatarios < ActiveRecord::Migration
  def change
    create_table :lista_destinatarios do |t|
      t.references :lista, index: true
      t.references :destinatario, index: true
      t.boolean :ativo

      t.timestamps
    end
  end
end
