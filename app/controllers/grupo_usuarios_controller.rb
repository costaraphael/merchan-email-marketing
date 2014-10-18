class GrupoUsuariosController < ApplicationController
  before_action :set_grupo_usuario, only: [:show, :edit, :update, :destroy]
  respond_to :html
  load_and_authorize_resource

  def index
    @grupo_usuarios = GrupoUsuario.all
    respond_with(@grupo_usuarios)
  end

  def show
    respond_with(@grupo_usuario)
  end

  def new
    @grupo_usuario = GrupoUsuario.new
    respond_with(@grupo_usuario)
  end

  def edit
  end

  def create
    @grupo_usuario = GrupoUsuario.new(grupo_usuario_params)
    @grupo_usuario.save
    respond_with(@grupo_usuario)
  end

  def update
    @grupo_usuario.update(grupo_usuario_params)
    respond_with(@grupo_usuario)
  end

  def destroy
    @grupo_usuario.destroy
    respond_with(@grupo_usuario)
  end

  private
    def set_grupo_usuario
      @grupo_usuario = GrupoUsuario.find(params[:id])
    end

    def grupo_usuario_params
      params.require(:grupo_usuario).permit(:nome)
    end
end
