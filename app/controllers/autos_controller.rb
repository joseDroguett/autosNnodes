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

  private
  def auto_params
    params.require(:auto).permit(:modelo, :marca)
  end
end
