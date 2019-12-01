# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

# NOTE: As of 2019-12-01, this schema has been generated running 'rails db:migrate RAILS_ENV=test'
# It reflects the test database implementation (sqlite3)
# To have it reflect the development and production databse (postgres), we'd need
# to run tests against postgres as well, which I don't want to do right now...?
# Known issue: https://github.com/rails/rails/issues/26209

ActiveRecord::Schema.define(version: 2016_08_17_022150) do

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "list_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "completed", default: false, null: false
    t.integer "sort_order"
    t.index ["list_id"], name: "index_items_on_list_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "user_id"
    t.integer "items_remaining", default: 0
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
