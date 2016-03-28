class PiezasController < ApplicationController
	def create
    auto = Auto.find(params[:auto_id])
    pieza = auto.piezas.create(pieza_params)
    respond_with auto, pieza
  end

  def destroy
  	pieza = Pieza.find(params[:id])  	
    pieza.destroy
    respond_with true
  end

  private
  def pieza_params
    params.require(:pieza).permit(:nombre,:cantidad)
  end
end
