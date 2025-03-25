import { KeyboardEvent, useState } from "react";
import { TodoItemType } from "../../types";
import { generateItemId } from "../../utils";

interface AddItemProps {
  onAddItem: (item: TodoItemType) => void;
}

export const AddItem = ({ onAddItem }: AddItemProps) => {
  const [newItemDescription, setNewItemDescription] = useState("");

  const addItem = () => {
    if (!newItemDescription) {
      return;
    }
    const newItem: TodoItemType = {
      description: newItemDescription,
      isCompleted: false,
      id: generateItemId(),
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
