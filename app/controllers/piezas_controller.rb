class PiezasController < ApplicationController
	def create
    auto = Pieza.find(params[:auto_id])
    pieza = auto.piezas.create(pieza_params)
    respond_with auto, pieza
  end

  private
  def pieza_params
    params.require(:pieza).permit(:nombre,:cantidad)
  end
end
