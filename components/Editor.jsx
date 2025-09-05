import { useState } from "react";

export default function Editor({ initialContent, onSave }) {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded-md p-2"
      />
      <button
        onClick={handleSave}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Guardar
      </button>
    </div>
  );
}
