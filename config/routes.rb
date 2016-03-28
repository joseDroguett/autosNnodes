Rails.application.routes.draw do
  root to: 'application#angular'

  resources :autos, only: [:create, :index, :show, :destroy] do
    resources :piezas, only: [:show, :create, :destroy]
  end
end
