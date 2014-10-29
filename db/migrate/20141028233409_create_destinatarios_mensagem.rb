class CreateDestinatariosMensagem < ActiveRecord::Migration
  def change
    create_table :destinatarios_mensagens do |t|
      t.integer :destinatario_id
      t.integer :mensagem_id
    end
  end
end
