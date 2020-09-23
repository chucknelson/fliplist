require 'simplecov'
SimpleCov.start 'rails'

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../config/environment', __dir__)
require 'rails/test_help'

class ActiveSupport::TestCase
  ActiveRecord::Migration.maintain_test_schema!

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  fixtures :all

  # Add more helper methods to be used by all tests here...

  # Helper for updating a list item, verifying a successful response and reloading affected data.
  # TODO?

  def init_user_session(user)
    session[:user_id] = user.id
  end

  def get_incomplete_item(list)
    list.items.find_by(completed: false)
  end

  def get_completed_item(list)
    list.items.find_by(completed: true)
  end

  # System test helpers
  def sign_in(user)
    visit login_url
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'password' # Default password
    click_button 'Log In'
  end

  def has_focus?(element)
    active_element_id = page.evaluate_script('document.activeElement.id')
    active_element_id == element[:id]
  end
end
