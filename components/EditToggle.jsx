import { useState } from "react";

export default function EditToggle({ onToggle }) {
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    const newState = !editing;
    setEditing(newState);
    onToggle(newState);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      {editing ? "Salir de Edición" : "Modo Edición"}
    </button>
  );
}
