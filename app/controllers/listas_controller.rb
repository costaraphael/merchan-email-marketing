class ListasController < ApplicationController
  before_action :set_lista, only: [:show, :edit, :update, :add_destinatario, :remove_destinatario]
  load_and_authorize_resource

  has_scope :by_query

  # GET /listas
  # GET /listas.json
  def index
    @listas = apply_scopes(Lista).listas_visiveis_para @active_user
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
        format.html do
          redirect_to @lista, notice: {
              type: 'info',
              message: "Lista #{@lista} criada com sucesso."
          }
        end
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
        format.html do
          redirect_to @lista, notice: {
              type: 'info',
              message: "Lista #{@lista} alerada com sucesso."
          }
        end
        format.json { render :show, status: :ok, location: @lista }
      else
        format.html { render :edit }
        format.json { render json: @lista.errors, status: :unprocessable_entity }
      end
    end
  end

  def add_destinatario
    lista_destinatario = @lista.lista_destinatarios.where(destinatario_params).take

    @lista.lista_destinatarios.create(destinatario_params) if lista_destinatario.nil?

    render_lista_destinatario
  end

  def remove_destinatario
    lista_destinatarios = @lista.lista_destinatarios.find_by_id params[:id_lista_destinatario]

    lista_destinatarios.destroy unless lista_destinatarios.nil?

    render_lista_destinatario
  end

  private
  def render_lista_destinatario
    respond_to do |format|
      format.js { render 'listas/list_destinatario' }
    end
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_lista
    @lista = Lista.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def lista_params
    params.require(:lista).permit(:nome, :usuario_id, :publica, :global)
  end

  def destinatario_params
    params.require(:add_destinatario).permit(:destinatario_id)
  end
end
