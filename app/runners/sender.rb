class Sender
  def self.check_messages
    mensagens = Mensagem.atrasadas
    exec "echo '#{Time.now.strftime '%d/%m/%Y às %H:%M'} Total de mensagens: #{mensagens.size}'"
  end
end