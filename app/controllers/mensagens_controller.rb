class MensagensController < ApplicationController
  before_action :set_mensagem, only: [:show, :edit, :update, :destroy]
  before_action :set_campanha

  # GET /mensagens
  # GET /mensagens.json
  def index
    @mensagens = @campanha.mensagens
  end

  # GET /mensagens/1
  # GET /mensagens/1.json
  def show
  end

  # GET /mensagens/new
  def new
    @mensagem = Mensagem.new
  end

  # GET /mensagens/1/edit
  def edit
  end

  # POST /mensagens
  # POST /mensagens.json
  def create
    @mensagem = @campanha.mensagens.create(mensagem_params)

    respond_to do |format|
      if @mensagem.save
        format.html { redirect_to campanha_mensagem_path(@campanha, @mensagem), notice: 'Mensagem was successfully created.' }
        format.json { render :show, status: :created, location: @mensagem }
      else
        format.html { render :new }
        format.json { render json: @mensagem.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mensagens/1
  # PATCH/PUT /mensagens/1.json
  def update
    respond_to do |format|
      if @mensagem.update(mensagem_params)
        format.html { redirect_to campanha_mensagem_path(@campanha, @mensagem), notice: 'Mensagem was successfully updated.' }
        format.json { render :show, status: :ok, location: @mensagem }
      else
        format.html { render :edit }
        format.json { render json: @mensagem.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mensagens/1
  # DELETE /mensagens/1.json
  def destroy
    @mensagem.destroy
    respond_to do |format|
      format.html { redirect_to campanha_mensagens_path(@campanha), notice: 'Mensagem was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_mensagem
    @mensagem = Mensagem.find(params[:id])
  end

  def set_campanha
    @campanha = Campanha.find(params[:campanha_id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def mensagem_params
    params.require(:mensagem).permit(:enviada, :envio, :texto)
  end
end
