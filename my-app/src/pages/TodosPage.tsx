import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoForm2 } from "../components/TodoForm2"; // Удалить в продакшен версии
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfces";

// declare var confirm: (question: string) => boolean; // теперь можем удалить window внизу

export const TodosPage: React.FC = () => {
	  const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      const saved = JSON.parse(
        localStorage.getItem("todos") || "[]"
      ) as ITodo[];
      // setTodos(saved);
      todos.length === 0 && setTodos((todos) => [...todos, ...saved]);
      // eslint-disable-next-line
    }, []);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false,
      };
      setTodos((prev) => [newTodo, ...prev]);
    };

    const toggleHandler = (id: number) => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return {
              title: todo.title,
              id: todo.id,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    };

    // const toggleHandler = (id: number) => {
    //   setTodos((prev) =>
    //     prev.map(todo => {
    //       if (todo.id === id) {
    //         todo.completed = !todo.completed;
    //       }
    //       return todo;
    //     })
    //   )
    // };

    const removeHandler = (id: number) => {
      const shoudRemove = window.confirm(
        "Вы уверены, что хотите удалить элемент?"
      );
      shoudRemove && setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
	return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
}