import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfces";
import { TodoWithoutId } from '../interfces';
import axios from "axios";

const url = 'https://react-js-typescript-4-b99bc-default-rtdb.europe-west1.firebasedatabase.app';

declare var confirm: (question: string) => boolean; // теперь можем удалить window внизу

export const TodosPage: React.FC = () => {
	  const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
			fetchHandler();
    }, []);

		const fetchHandler = async () => {
      const res = await axios.get(`${url}/notes.json`);

      if (!res.data) {
        const newTodo: ITodo[] = [];
        setTodos(newTodo);
        return;
      }

      const newTodo: ITodo[] = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });
      setTodos(newTodo.reverse());
    };

    const addHandler = async (title: string) => {
      const todoWithoutId: TodoWithoutId = {
        title: title,
        completed: false,
      };
      const res = await axios.post(`${url}/notes.json`, todoWithoutId);
			 const newTodo: ITodo = {
         ...todoWithoutId,
         id: res.data.name,
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

    const removeHandler = async (id: number) => {
      const shoudRemove = confirm(
        "Вы уверены, что хотите удалить элемент?"
      );
      if (shoudRemove) {
				await axios.delete(`${url}/notes/${id}.json`);
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }
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