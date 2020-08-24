require 'test_helper'

SYSTEM_TEST_HOST = '0.0.0.0'.freeze
SYSTEM_TEST_PORT = 3001

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium,
            screen_size: [1400, 1400],
            options: {
              # Options for the remote selenium server
              browser: :remote,
              url: 'http://selenium:4444/wd/hub',
              desired_capabilities: :chrome
            }

  # Where Capybara will host the app under test
  Capybara.server_host = SYSTEM_TEST_HOST
  Capybara.server_port = SYSTEM_TEST_PORT

  # URL helpers (e.g., <model>_url) not included by default
  include Rails.application.routes.url_helpers
  default_url_options[:host] = "http://rails:#{SYSTEM_TEST_PORT}"
end
