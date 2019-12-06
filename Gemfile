source 'https://rubygems.org'

#use specific version of ruby
ruby '2.5.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.0'

group :development do
  # cool interactive console that can be used if a page errors out
  gem 'web-console', '~> 4.0'
  # required for listening to file changes during development
  gem "listen", "~> 3.2"
end

# Use SimpleCov for test coverage
group :test do
  # Use sqlite3 as the database for tests
  gem 'sqlite3', '~> 1.4'
  # assigns has been extracted to a gem as of Rails 5.0
  gem 'rails-controller-testing', '~> 1.0'
  gem 'simplecov', '~> 0.17', :require => false
end

# Added in Rails 5.2 to improve app boot time
gem "bootsnap", "~> 1.4"

# Use postgres as the database to minimize compatability issues with Heroku
gem 'pg', '~> 1.1'

# Webpacker for javascript packaging
gem 'webpacker', '~> 4.2'

# Use SCSS for stylesheets
gem 'sassc-rails', '~> 2.1'

# Use CoffeeScript for .js.coffee assets and views
# TODO: Move away from coffee and switch to modern javascript
gem 'coffee-rails', '~> 5.0'

# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.0'
gem 'jquery-ui-rails', '~> 4.0'

#jquery UI touch punch to enable sorting on the iPhone / touch screens
gem 'touchpunch-rails', '~> 1.0'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks', '~> 2.5' # 2.x is last version supported by jquery-turbolinks
# gem to allow jquery binding to work easily with turbolinks
gem 'jquery-turbolinks', '~> 2.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.9'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1'

# Use puma for app server
gem 'puma', '~> 4.3'
