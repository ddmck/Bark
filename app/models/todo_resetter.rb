class TodoResetter
  include ::ScheduledJob

  def perform
    puts "#####"
    puts "Refreshing Todos"
    puts "#####"
    Todo.all.each {|todo| todo.completed = false; todo.save}
  end

  def self.time_to_recur(last_run_at)
    last_run_at + 1.minutes
  end
end