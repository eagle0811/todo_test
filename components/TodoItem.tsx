'use client';

import type { Todo } from '@/types/todo';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`todo-item group ${todo.completed ? 'completed' : ''}`}>
      <button
        onClick={() => onToggle(todo.id)}
        className="checkbox"
        aria-label={todo.completed ? '未完了に戻す' : '完了にする'}
      >
        {todo.completed && (
          <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3">
            <path
              d="M1 5l3.5 3.5L11 1"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span onClick={() => onToggle(todo.id)} className="todo-text">
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
        aria-label="削除"
      >
        <Trash2 size={15} />
      </button>
    </li>
  );
}
