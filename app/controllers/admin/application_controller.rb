class Admin::ApplicationController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  before_action :authenticate_admin!
  before_filter :set_search

  def after_sign_in_path_for(admin)
    admin_home_path
  end

  def set_search
		@q = Animal.search(params[:q])
	end

  layout 'admin'
  
end
