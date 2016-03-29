Rails.application.routes.draw do
  root to: 'application#angular'

  resources :autos, only: [:create, :index, :show, :destroy, :update] do
    resources :piezas, only: [:show, :create, :show, :destroy, :update]
  end
end
