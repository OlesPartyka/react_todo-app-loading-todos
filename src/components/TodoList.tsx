import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodosContext } from '../TodosContext';
import { Filtering } from '../types/Filtering';

export const TodoList: React.FC = () => {
  const { todos, filtering } = useContext(TodosContext);

  const visibleTodos = (currentFiltering: Filtering) => {
    switch (currentFiltering) {
      case Filtering.ALL:
        return todos;
      case Filtering.ACTIVE:
        return todos.filter(todo => !todo.completed);
      case Filtering.COMPLETED:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos(filtering).map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </section>
  );
};