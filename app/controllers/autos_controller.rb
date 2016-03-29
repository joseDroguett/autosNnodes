class AutosController < ApplicationController
	def index
    respond_with Auto.all
  end

  def create
    respond_with Auto.create(auto_params)
  end

  def show
    respond_with Auto.find(params[:id])
  end

  def destroy
    auto = Auto.find(params[:id])   
    auto.destroy
    respond_with auto
  end

  def update
    auto = Auto.find(params[:id])
    auto.update(auto_params)
    respond_with auto
  end

  private
  def auto_params
    params.require(:auto).permit(:modelo, :marca, :latitud, :longuitud)
  end
end
