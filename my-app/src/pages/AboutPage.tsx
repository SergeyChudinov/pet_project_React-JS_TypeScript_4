import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutsPage: React.FC = () => {
	const navigate = useNavigate();

	return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam
        cumque quas doloribus voluptatibus porro magnam optio magni rem enim.
      </p>
      <button onClick={() => navigate("/")} className="btn">
        Обратно к списку дел
      </button>
    </>
  );
};
