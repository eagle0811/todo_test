'use client';

import { useState, useEffect } from 'react';
import type { Todo } from '@/types/todo';

const STORAGE_KEY = 'todos-v2';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTodos(JSON.parse(stored));
      } catch {
        // ignore
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      { id: Date.now().toString(), text: trimmed, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return { todos, isLoaded, addTodo, toggleTodo, deleteTodo };
}
