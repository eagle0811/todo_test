'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Shift + Enter で送信、Enter だけで改行
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        onAdd(input);
        setInput('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-4 flex gap-3">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="新しいタスクを入力...&#10;(改行: Enter, 送信: Shift+Enter または ボタン)"
        rows={2}
        className="flex-1 glass-input px-4 py-3 rounded-xl transition-all duration-200 text-white resize-none"
      />
      <button
        type="submit"
        className="gradient-button text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 font-semibold h-fit"
      >
        <Plus size={20} />
        <span className="hidden sm:inline">追加</span>
      </button>
    </form>
  );
}
