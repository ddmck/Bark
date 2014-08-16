class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :description
      t.boolean :completed
      t.references :user

      t.timestamps
    end
  end
end
