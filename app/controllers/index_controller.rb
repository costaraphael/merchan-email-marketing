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

  def logout
    cookies.delete :login
    redirect_to root_path
  end

  private
  def login_params
    params.require(:login).permit(:login, :senha)
  end
end
