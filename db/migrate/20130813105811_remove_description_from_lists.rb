class RemoveDescriptionFromLists < ActiveRecord::Migration[4.2]
  def change
  	remove_column :lists, :description
  end
end
