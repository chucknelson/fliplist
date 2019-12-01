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

ActiveRecord::Schema.define(version: 2016_08_17_022150) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", id: :serial, force: :cascade do |t|
    t.string "name"
    t.integer "list_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "completed", default: false, null: false
    t.integer "sort_order"
    t.index ["list_id"], name: "index_items_on_list_id"
  end

  create_table "lists", id: :serial, force: :cascade do |t|
    t.string "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "user_id"
    t.integer "items_remaining", default: 0
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
