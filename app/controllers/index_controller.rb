class IndexController < ApplicationController
  def index
  end

  def login
    render layout: false
  end

  def logar
    user = Usuario.where('login = :login', login: login_params[:login]).take

    if user.senha == Digest::SHA1.hexdigest("#{user.salt}--#{login_params[:senha]}")
      if user.ativo?
        cookies[:login] = {:value => user.id, :expires => Time.now + 900}
        redirect_to root_path
        return
      end
      redirect_to :login, notice: 'Acesso desativado.'
    else
      redirect_to :login, layout: false, notice: 'Dados incorretos.'
    end
  end

  def dados_pessoais
    @active_user.senha = nil
  end

  def salvar_dados_pessoais

    params = dados_pessoais_params
    logger.info params[:senha]
    if params[:senha].empty?
      params.except! :senha, :senha_confirmation
    else
      senha_confirmada = params[:senha_confirmation] == params[:senha]

      params[:salt] = Digest::SHA1.hexdigest("#{Time.now.utc}--#{params[:senha]}")
      params[:senha] = Digest::SHA1.hexdigest("#{params[:salt]}--#{params[:senha]}")
      params[:senha_confirmation] = params[:senha] if senha_confirmada

    end
    respond_to do |format|
      if @active_user.update(params)
        format.html do
          redirect_to root_path, notice: {
              type: 'success',
              message: 'Dados atualizados com sucesso'
          }
        end
        format.json { render status: :created }
      else
        format.html { render :dados_pessoais }
        format.json { render json: @active_user.errors, status: :unprocessable_entity }
      end
    end
  end

  def logout
    cookies.delete :login
    redirect_to root_path
  end

  private
  def login_params
    params.require(:login).permit(:login, :senha)
  end

  def dados_pessoais_params
    params.require(:usuario).permit(:nome, :email, :senha, :senha_confirmation,:assinatura)
  end

end
