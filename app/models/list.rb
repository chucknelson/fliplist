class List < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy

  validates :user, presence: true
  validates :title, presence: true, length: { minimum: 5 }

  def completed?
    self.items_remaining == 0 && self.items.exists? 
  end

  def update_items_remaining
    self.update(items_remaining: self.items.where(completed: false).size)
  end

end
