class PiezasController < ApplicationController
	def create
    auto = Auto.find(params[:auto_id])
    pieza = auto.piezas.create(pieza_params)
    respond_with auto, pieza
  end

  def show
    respond_with Pieza.find(params[:id])
  end

  def destroy
  	pieza = Pieza.find(params[:id])  	
    pieza.destroy
    respond_with pieza
  end

  def update
    pieza = Pieza.find(params[:id])
    if pieza.update(pieza_params)
      respond_with pieza
    end
  end

  private
  def pieza_params
    params.require(:pieza).permit(:nombre,:cantidad)
  end
end
