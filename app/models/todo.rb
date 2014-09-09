class Todo < ActiveRecord::Base
  # attr_accessible :description, :completed, :user_id
  belongs_to :user
  after_create :send_webhook
  after_save :send_webhook
  after_update :send_webhook

  def delete
    super
    send_webhook
  end

  def send_webhook
    HTTParty.get("http://localhost:2020/update_todos?userid=#{self.user_id}")
  end
end
