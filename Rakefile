# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

# Very simple tasks, so just putting them right in the Rakefile

# Local development
# See https://devcenter.heroku.com/articles/heroku-local
task :local_dev do
  system 'heroku local -f Procfile.dev'
end
