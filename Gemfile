source 'https://rubygems.org'

#use specific version of ruby
ruby '2.5.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'

group :development do
  # cool interactive console that can be used if a page errors out
  gem 'web-console', '~> 3.7' # 3.x is the last version with Rails 5 support
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

group :production do
	gem 'rails_12factor' # required for heroku Rails 4 asset pipeline compatability
end

# Added in Rails 5.2 to improve app boot time
gem "bootsnap", "~> 1.4"

# Use postgres as the database to minimize compatability issues with Heroku
gem 'pg', '~> 1.1'

# Use SCSS for stylesheets
gem 'sassc-rails', '~> 2.1'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 4.2'

# Use CoffeeScript for .js.coffee assets and views
# TODO: Move away from coffee and switch to modern javascript
gem 'coffee-rails', '~> 5.0'

# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.0'
gem 'jquery-ui-rails', '~> 4.0'

#jquery UI touch punch to enable sorting on the iPhone / touch screens
gem 'touchpunch-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# gem to allow jquery binding to work easily with turbolinks
gem 'jquery-turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.0'

# Use puma for app server
gem 'puma'
