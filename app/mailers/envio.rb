class Envio < ActionMailer::Base
  default from: 'Ulbra Marketing <no-reply@infodev.ulbrajp.edu.br>'

  # @param [Mensagem] mensagem
  # @param [Destinatario] destinatario
  def enviar(mensagem, destinatario)
    @mensagem = mensagem
    @destinatario = destinatario

    @texto = check_base64_img(mensagem.texto).html_safe
    @assinatura = check_base64_img(mensagem.campanha.criador.assinatura).html_safe

    mail to: "#{destinatario.nome} <#{destinatario.email}>"
  end

  private
  def check_base64_img(html)
    images = html.scan /(?<=<img src="data:).+?(?=")/

    count = 0
    images.each do |image|
      count += 1
      image = {original: image, name: count.to_s}
      data = image[:original].split(',').last
      mime = image[:original].split(';').first
      image[:name] << ".#{mime.split('/').last}"
      attachments.inline[image[:name]] = {
          mime_type: mime,
          encoding: 'Base64',
          content: data
      }
      html.gsub! "data:#{image[:original]}", attachments[image[:name]].url
    end
    html
  end
end
