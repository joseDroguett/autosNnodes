Rails.application.routes.draw do
  root to: 'application#angular'

  resources :autos, only: [:create, :index, :show] do
    resources :piezas, only: [:show, :create]
  end
end
