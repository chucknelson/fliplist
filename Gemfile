source 'https://rubygems.org'

#use specific version of ruby
ruby '2.6.6'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.0'

group :development do
  # solargraph ruby language server
  gem "solargraph", "~> 0.39.15"
  # cool interactive console that can be used if a page errors out
  gem 'web-console', '~> 4.0'
  # required for listening to file changes during development
  gem 'listen', '~> 3.2'
  # gems for debugging
  gem 'ruby-debug-ide', '~> 0.7.2'
  gem 'debase', '~> 0.2.4.1'
  # rubocop for linting
  gem 'rubocop', '~> 0.89.0', require: false
  gem 'rubocop-rails', '~> 2.7.1', require: false
end

# Use SimpleCov for test coverage
group :test do
  # Use sqlite3 as the database for tests
  gem 'sqlite3', '~> 1.4'
  # assigns has been extracted to a gem as of Rails 5.0
  gem 'rails-controller-testing', '~> 1.0'
  gem 'simplecov', '~> 0.17', require: false
  # gems for system tests
  gem 'capybara', '~> 3.0'
  gem 'selenium-webdriver', '~> 3.0'
end

# Added in Rails 5.2 to improve app boot time
gem 'bootsnap', '~> 1.4'

# Use postgres as the database to minimize compatability issues with Heroku
gem 'pg', '~> 1.1'

# Webpacker for javascript packaging
gem 'webpacker', '~> 4.2'

# Use SCSS for stylesheets
gem 'sassc-rails', '~> 2.1'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.9'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1'

# Use puma for app server
gem 'puma', '~> 4.3'
