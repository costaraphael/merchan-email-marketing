class GrupoUsuariosController < ApplicationController
  before_action :set_grupo_usuario, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  # GET /campanhas
  # GET /campanhas.json
  def index
    @grupo_usuarios = GrupoUsuario.all
  end

  # GET /campanhas/1.json
  def show
    respond_to do |format|
      format.json { render json: @grupo_usuario }
    end
  end

  def new
    @grupo_usuario = GrupoUsuario.new
  end

  def edit
  end

  def create
    @grupo_usuario = GrupoUsuario.new(grupo_usuario_params)

    respond_to do |format|
      if @grupo_usuario.save
        format.html do
          redirect_to destinatarios_path, notice: {
              type: 'success',
              message: "#{@grupo_usuario.nome} adicionado com sucesso"
          }
        end
        format.json { render :show, status: :created, location: @grupo_usuario }
      else
        format.html { render :new }
        format.json { render json: @grupo_usuario.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @grupo_usuario.update(grupo_usuario_params)
        format.html do
          redirect_to destinatarios_path, notice: {
              type: 'info',
              message: "#{@grupo_usuario} atualizado com sucesso."
          }
        end
        format.json { render :show, status: :ok, location: @grupo_usuario }
      else
        format.html { render :edit }
        format.json { render json: @grupo_usuario.errors, status: :unprocessable_entity }
      end
    end
  end


  private
  def set_grupo_usuario
    @grupo_usuario = GrupoUsuario.find(params[:id])
  end

  def grupo_usuario_params
    params.require(:grupo_usuario).permit(:nome)
  end
end
