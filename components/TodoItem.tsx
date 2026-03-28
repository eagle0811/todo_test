'use client';

import type { Todo } from '@/types/todo';
import { Trash2, Check } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="glass-card group p-5 hover:bg-white/15 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-indigo-400">
      <div className="flex items-center gap-4">
        {/* カスタムチェックボックス */}
        <div
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-10 h-10 rounded-full border-3 flex items-center justify-center transition-all duration-300 cursor-pointer ${
            todo.completed
              ? 'bg-gradient-to-r from-indigo-500 to-violet-500 border-transparent shadow-lg shadow-indigo-500/50'
              : 'bg-white/10 border-indigo-400 shadow-md shadow-indigo-500/40 hover:bg-white/20 hover:border-indigo-300'
          }`}
        >
          {todo.completed && <Check size={24} className="text-white" strokeWidth={3} />}
        </div>

        {/* テキスト - クリック可能 */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-1 text-lg text-left transition-all duration-300 hover:text-indigo-200 cursor-pointer font-medium whitespace-pre-wrap break-words ${
            todo.completed
              ? 'line-through text-white/40'
              : 'text-white'
          }`}
        >
          {todo.text}
        </button>

        {/* 削除ボタン */}
        <button
          onClick={() => onDelete(todo.id)}
          className="flex-shrink-0 text-white/40 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 hover:bg-red-500/20 rounded-lg"
          aria-label="Delete todo"
        >
          <Trash2 size={22} />
        </button>
      </div>
    </div>
  );
}
