Rails.application.routes.draw do
  get 'messages/index'

  devise_for :users, controller:{
    session: 'users/sessions',
    registrations: 'users/registrations'
  }
  # root 'chat_rooms#index'
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
  resources :chat_rooms, only:[:new, :create, :show, :index]
  resources :messages
  resources :memberships
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
