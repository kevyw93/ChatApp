Rails.application.routes.draw do
  devise_for :users,  controllers: { registrations: 'users/registrations',
                                 sessions: 'users/sessions'
                               },
                  skip: [:registrations, :sessions]
  get 'messages/index'


  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :chat_rooms, only:[:new, :create, :show, :index]
    resources :messages
    resources :memberships
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
