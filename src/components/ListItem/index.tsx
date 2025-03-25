import React from "react";
import { TodoItemType } from "../../types";

interface ListItemProps {
  item: TodoItemType;
  onToggleComplete: (item: TodoItemType) => void;
  onRemoveItem: (item: TodoItemType) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  item,
  onToggleComplete,
  onRemoveItem,
}) => (
  <li>
    <input
      type="checkbox"
      checked={item.isCompleted}
      onChange={() => onToggleComplete(item)}
      aria-label={`Mark "${item.description}" as ${
        item.isCompleted ? "Not completed" : "done"
      }`}
    />
    <span
      style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
    >
      {item.description}
    </span>
    <button
      onClick={() => onRemoveItem(item)}
      aria-label={`Remove ${item.description}`}
    >
      Remove
    </button>
  </li>
);
