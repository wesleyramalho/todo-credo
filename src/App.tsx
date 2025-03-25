import React, { useState } from "react";
import "./App.css";
import { TodoItemType } from "./types";
import { AddItem } from "./components/AddItem";
import { generateItemId } from "./utils";
import { ListItem } from "./components/ListItem";

function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  const addItem = (todoItem: TodoItemType) => {
    const newItem = {
      id: generateItemId(),
      ...todoItem,
    };
    const items: TodoItemType[] = [...todoList];
    items.push(newItem);
    setTodoList(items);
  };

  const removeItem = (todoItem: TodoItemType) => {
    const updatedList = todoList.filter(
      (item: TodoItemType) => item.id !== todoItem.id
    );
    setTodoList(updatedList);
  };

  const toggleCompleteItem = (todoItem: TodoItemType) => {
    const newList = todoList.map((item: TodoItemType) => {
      if (item.id === todoItem.id) {
        return {
          ...item,
          isCompleted: !item?.isCompleted,
        };
      }
      return item;
    });
    setTodoList(newList);
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <AddItem onAddItem={addItem} />
      <ul>
        {todoList.map((item: TodoItemType) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              onToggleComplete={toggleCompleteItem}
              onRemoveItem={removeItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
