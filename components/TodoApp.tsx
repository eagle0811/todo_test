'use client';

import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

export function TodoApp() {
  const { todos, isLoaded, addTodo, toggleTodo, deleteTodo } = useTodos();

  if (!isLoaded) return null;

  const active = todos.filter((t) => !t.completed);
  const done = todos.filter((t) => t.completed);

  return (
    <div className="page">
      <div className="container">

        {/* ヘッダー */}
        <header className="header">
          <div className="header-top">
            <h1 className="title">My Tasks</h1>
            {active.length > 0 && (
              <span className="counter-badge">{active.length} 件</span>
            )}
          </div>
          <p className="subtitle">今日もタスクをこなしましょう</p>
        </header>

        {/* 入力 */}
        <div className="input-card">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* リスト */}
        {todos.length === 0 ? (
          <div className="empty">
            <span className="empty-icon">✦</span>
            <p>タスクはまだありません</p>
            <p className="empty-sub">上のフォームから追加してください</p>
          </div>
        ) : (
          <div className="lists">
            {active.length > 0 && (
              <ul className="todo-list">
                {active.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </ul>
            )}

            {done.length > 0 && (
              <div className="done-section">
                <p className="done-label">完了済み — {done.length}</p>
                <ul className="todo-list">
                  {done.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={toggleTodo}
                      onDelete={deleteTodo}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
