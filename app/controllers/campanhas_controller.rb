class CampanhasController < ApplicationController
  before_action :set_campanha, only: [:show, :edit, :update, :destroy]

  # GET /campanhas
  # GET /campanhas.json
  def index
    @campanhas = Campanha.all
  end

  # GET /campanhas/1
  # GET /campanhas/1.json
  def show
  end

  # GET /campanhas/new
  def new
    @campanha = Campanha.new
  end

  # GET /campanhas/1/edit
  def edit
  end

  # POST /campanhas
  # POST /campanhas.json
  def create
    @campanha = Campanha.new(campanha_params)

    @campanha.criador = @active_user

    respond_to do |format|
      if @campanha.save
        format.html { redirect_to @campanha, notice: 'Campanha was successfully created.' }
        format.json { render :show, status: :created, location: @campanha }
      else
        format.html { render :new }
        format.json { render json: @campanha.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /campanhas/1
  # PATCH/PUT /campanhas/1.json
  def update
    respond_to do |format|
      if @campanha.update(campanha_params)
        format.html { redirect_to @campanha, notice: 'Campanha was successfully updated.' }
        format.json { render :show, status: :ok, location: @campanha }
      else
        format.html { render :edit }
        format.json { render json: @campanha.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /campanhas/1
  # DELETE /campanhas/1.json
  def destroy
    @campanha.destroy
    respond_to do |format|
      format.html { redirect_to campanhas_url, notice: 'Campanha was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_campanha
      @campanha = Campanha.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def campanha_params
      params.require(:campanha).permit(:nome)
    end
end
