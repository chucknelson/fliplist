# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('config/application', __dir__)

Rails.application.load_tasks

# Very simple tasks, so just putting them right in the Rakefile

# Local development
# See https://devcenter.heroku.com/articles/heroku-local
task 'dev:local': :environment do
  system 'heroku local -f Procfile.dev'
end

task 'format:check': :environment do
  system 'yarn prettier . --check --ignore-path .gitignore'
end

task 'format': :environment do
  system 'yarn prettier . --write --ignore-path .gitignore'
end

task 'lint:check': :environment do
  system 'bundle exec rubocop'
  system 'yarn eslint . --ignore-path .gitignore'
end
