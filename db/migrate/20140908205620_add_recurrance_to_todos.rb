class AddRecurranceToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :recurrance, :string
  end
end
