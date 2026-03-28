'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder="新しいタスクを入力..."
        className="input-field"
      />
      <button
        onClick={submit}
        disabled={!text.trim()}
        className="add-btn"
        aria-label="タスクを追加"
      >
        <Plus size={20} strokeWidth={2.5} />
      </button>
    </>
  );
}
