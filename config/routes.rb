Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get 'wizard' => 'wizard#index'
  get 'panels' => 'panels#index'
  root                   'static_pages#home'
  get    'about'      => 'static_pages#about'
  get    'help'       => 'static_pages#help'
  get    'dashboard'  => 'dashboards#dashboard'
  # Scaffold generated RESTful routes
  resources :messages
  resources :appointments
    post '/appointments/:id/book', to: 'appointments#book'
  resources :subscribers
  resources :users
end
