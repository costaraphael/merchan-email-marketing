class ListasController < ApplicationController
  before_action :set_lista, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  # GET /listas
  # GET /listas.json
  def index
    @listas = Lista
    .joins(:usuario)
    .where('usuario_id = :usuario OR (publica = 1 AND grupo_usuario_id = :grupo_usuario) OR global = 1',
           usuario: @active_user.id, grupo_usuario: @active_user.grupo_usuario_id)
  end

  # GET /listas/1
  # GET /listas/1.json
  def show
  end

  # GET /listas/new
  def new
    @lista = Lista.new
  end

  # GET /listas/1/edit
  def edit
  end

  # POST /listas
  # POST /listas.json
  def create
    @lista = Lista.new(lista_params)
    @lista.usuario = @active_user

    respond_to do |format|
      if @lista.save
        format.html { redirect_to @lista, notice: 'Lista was successfully created.' }
        format.json { render :show, status: :created, location: @lista }
      else
        format.html { render :new }
        format.json { render json: @lista.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /listas/1
  # PATCH/PUT /listas/1.json
  def update
    respond_to do |format|
      if @lista.update(lista_params)
        format.html { redirect_to @lista, notice: 'Lista was successfully updated.' }
        format.json { render :show, status: :ok, location: @lista }
      else
        format.html { render :edit }
        format.json { render json: @lista.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /listas/1
  # DELETE /listas/1.json
  def destroy
    @lista.destroy
    respond_to do |format|
      format.html { redirect_to listas_url, notice: 'Lista was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_lista
    @lista = Lista.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def lista_params
    params.require(:lista).permit(:nome, :usuario_id, :publica, :global)
  end
end
