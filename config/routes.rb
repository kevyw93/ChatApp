Rails.application.routes.draw do
  get 'messages/index'

  devise_for :users
  root 'chat_rooms#index'
  resources :chat_rooms, only:[:new, :create, :show, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
