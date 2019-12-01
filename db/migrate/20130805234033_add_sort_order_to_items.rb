class AddSortOrderToItems < ActiveRecord::Migration[4.2]
  def change
    add_column :items, :sort_order, :integer
  end
end
