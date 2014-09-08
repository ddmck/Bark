json.array!(@todos) do |todo|
  json.extract! todo, :id, :description, :recurrance, :completed, :user_id
  json.url todo_url(todo, format: :json)
end
