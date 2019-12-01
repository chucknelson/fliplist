class AddCompletedToItems < ActiveRecord::Migration[4.2]
  def change
    add_column :items, :completed, :boolean, default: false, null: false
  end
end
