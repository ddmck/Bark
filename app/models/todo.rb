class Todo < ActiveRecord::Base
  # attr_accessible :description, :completed, :user_id
  belongs_to :user
end
