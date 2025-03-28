import { KeyboardEvent, useState } from "react";
import { TodoItemType } from "../../types";

interface AddItemProps {
  onAddItem: (item: TodoItemType) => void;
}

export const AddItem = ({ onAddItem }: AddItemProps) => {
  const [newItemDescription, setNewItemDescription] = useState("");

  const addItem = () => {
    if (!newItemDescription.trim()) {
      return;
    }
    const newItem: TodoItemType = {
      description: newItemDescription,
      isCompleted: false,
    };
    onAddItem(newItem);
    setNewItemDescription("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  return (
    <div className="add-item-container">
      <input
        value={newItemDescription}
        onChange={(event) => setNewItemDescription(event.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Add a new item"
      />
      <button onClick={() => addItem()}>Add</button>
    </div>
  );
};
