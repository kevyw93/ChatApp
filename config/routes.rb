Rails.application.routes.draw do
  get 'messages/index'

  devise_for :users
  resources :chat_rooms, only:[:index, :create, :show, :new]
  root 'chat_room#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
