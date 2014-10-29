class Sender
  def self.check_messages
    mensagens = Mensagem.atrasadas.includes(campanha: {listas: :destinatarios})

    mensagens.each do |mensagem|
      listas = mensagem.campanha.listas
      destinatarios_total = []
      listas.each do |lista|
        destinatarios_total += lista.destinatarios.reject do |destinatario|
          destinatario.inativo or destinatario.in? mensagem.destinatarios or destinatario.in? destinatarios_total
        end
      end
      destinatarios_total.each do |destinatario|
        Envio.enviar(mensagem, destinatario).deliver
        mensagem.destinatarios << destinatario
      end
      mensagem.update enviada: true
      system "echo '#{Time.now} ok'"
    end
  end
end