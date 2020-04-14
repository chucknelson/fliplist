require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Fliplist
  class Application < Rails::Application
    # Initialize configuration defaults for current Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Get around Sprockets issue with bind mounts? 
    # See: 
    # - https://github.com/research-technologies/dart_provisioning/wiki/Vagrant-and-Rails-with-shared-folders-on-a-Windows-host
    # - https://github.com/rails/sprockets/issues/283
    # - https://github.com/indentlabs/notebook/issues/598
    config.assets.configure do |env|
      env.cache = Sprockets::Cache::FileStore.new(
          File.join(ENV['RAILS_TMP'], 'cache/assets')
      )
    end if ENV['RAILS_TMP']
  end
end
