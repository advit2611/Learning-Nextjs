import Length from "@/app/components/Length";

const getTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  return await response.json();
};

const Todos = async () => {
  const todos = await getTodo();
  return (
    <div>
      <h1 className="text-4xl px-2 py-2">Todos</h1>
      <Length todos={todos}/>
      <div className="grid grid-cols-4 gap-3">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo) => (
            <div
              className=" border-2 border-cyan-300 p-3 shadow-white shadow-md rounded-lg"
              key={todo.id}
            >
              <h4>{todo.title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todos;
