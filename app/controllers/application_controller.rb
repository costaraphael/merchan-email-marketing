class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :check_login

  before_filter do
    resource = controller_name.singularize.to_sym
    method = "#{resource}_params"
    params[resource] &&= send(method) if respond_to?(method, true)
  end

  def check_login
    login = cookies[:login]

    if login
      @active_user = Usuario.find(login)
      redirect_to login_path unless @active_user.ativo? or request.original_url == login_url
      cookies[:login] = {value: @active_user.id, expires: Time.now + 900}
    else
      redirect_to login_path unless request.original_url == login_url
    end
  end

  def current_user
    @active_user
  end

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, notice: 'O recurso que você tentou acessar não foi encontrado.'
  end
end
