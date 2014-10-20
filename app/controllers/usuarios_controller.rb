class UsuariosController < ApplicationController
  before_action :set_usuario, only: [:edit, :update, :destroy]
  respond_to :html
  load_and_authorize_resource

  def index
    @usuarios = Usuario.where('id != :usuario', usuario: @active_user.id)
    respond_with(@usuarios)
  end


  def new
    @usuario = Usuario.new
    respond_with(@usuario)
  end

  def edit
  end

  def create
    @usuario = Usuario.new(usuario_params)
    senha_confirmada = @usuario.senha_confirmation == @usuario.senha

    @usuario.salt = Digest::SHA1.hexdigest("#{Time.now.utc}--#{@usuario.senha}")
    @usuario.senha = Digest::SHA1.hexdigest("#{@usuario.salt}--#{@usuario.senha}")

    @usuario.senha_confirmation = @usuario.senha if senha_confirmada

    @usuario.ativo = true
    if @usuario.save
      redirect_to usuarios_path, notice: {
          type: 'success',
          message: "Usuário #{@usuario} criado com sucesso."
      }
    else
      render :new
    end
  end

  def update
    if @usuario.update(usuario_params)
      redirect_to usuarios_path
    else
      render :new
    end
  end

  def destroy
    logger.info 'oi'
    @usuario.ativo = !@usuario.ativo
    if @usuario.save
      redirect_to usuarios_path, notice: {
          type: "#{ @usuario.ativo ? 'success' : 'warning'}",
          message: "Usuário #{@usuario} #{@usuario.ativo? ? 'ativado' : 'desativado'} com sucesso."
      }
    else
      redirect_to usuarios_path, notice: {
          type: 'danger',
          message: "Não foi possível #{@usuario.ativo? ? 'desativar' : 'ativar'} o usuário #{@usuario}."
      }
    end
  end

  private
  def set_usuario
    @usuario = Usuario.find(params[:id])
  end

  def usuario_params
    params.require(:usuario).permit(:nome, :login, :senha, :senha_confirmation, :grupo_usuario_id, :role_id, :email)
  end
end
