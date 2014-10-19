class DestinatariosController < ApplicationController
  before_action :set_destinatario, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  has_scope :by_query

  # GET /destinatarios
  # GET /destinatarios.json
  def index
    @destinatarios = apply_scopes(Destinatario).all
  end

  # GET /destinatarios/1
  # GET /destinatarios/1.json
  def show
  end

  # GET /destinatarios/new
  def new
    @destinatario = Destinatario.new
  end

  # GET /destinatarios/1/edit
  def edit
  end

  # POST /destinatarios
  # POST /destinatarios.json
  def create
    @destinatario = Destinatario.new(destinatario_params)

    respond_to do |format|
      if @destinatario.save
        format.html { redirect_to @destinatario, notice: 'Destinatario was successfully created.' }
        format.json { render :show, status: :created, location: @destinatario }
      else
        format.html { render :new }
        format.json { render json: @destinatario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /destinatarios/1
  # PATCH/PUT /destinatarios/1.json
  def update
    respond_to do |format|
      if @destinatario.update(destinatario_params)
        format.html { redirect_to @destinatario, notice: 'Destinatario was successfully updated.' }
        format.json { render :show, status: :ok, location: @destinatario }
      else
        format.html { render :edit }
        format.json { render json: @destinatario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /destinatarios/1
  # DELETE /destinatarios/1.json
  def destroy
    @destinatario.destroy
    respond_to do |format|
      format.html { redirect_to destinatarios_url, notice: 'Destinatario was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_destinatario
      @destinatario = Destinatario.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def destinatario_params
      params.require(:destinatario).permit(:nome, :email, :status, :sexo)
    end
end
