json.array!(@todos) do |todo|
  json.extract! todo, :id, :description, :completed, :user_id
  json.url todo_url(todo, format: :json)
end
