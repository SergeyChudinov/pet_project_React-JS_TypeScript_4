import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm2: React.FunctionComponent<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
        ref={ref}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
