class MensagensController < ApplicationController
  before_action :set_mensagem, only: [:show, :edit, :update, :destroy, :visualizada]
  before_action :set_campanha

  # GET /mensagens
  # GET /mensagens.json
  def index
    @mensagens = Mensagem.where campanha: @campanha
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
    @mensagem.envio = @mensagem.envio.strftime '%d/%m/%Y %H:%M'
  end

  def visualizada
    respond_to do |format|
      format.png { render text: 'foi' }
    end
  end

  # POST /mensagens
  # POST /mensagens.json
  def create
    @mensagem = @campanha.mensagens.create(mensagem_params)

    @mensagem.enviada = false

    respond_to do |format|
      if @mensagem.save
        format.html do
          redirect_to campanha_mensagem_path(@campanha, @mensagem), notice: {
              type: 'info',
              message: 'Mensagem adicionada com sucesso.'
          }
        end
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
        format.html do
          redirect_to campanha_mensagem_path(@campanha, @mensagem), notice: {
              type: 'info',
              message: 'Mensagem atualizada com sucesso.'
          }
        end
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
      format.html do
        redirect_to campanha_mensagens_path(@campanha), notice: {
            type: 'info',
            message: 'Mensagem removida com sucesso.'
        }
      end
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
    params.require(:mensagem).permit(:envio, :texto)
  end
end
