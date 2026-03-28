'use client';

import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function TodoApp() {
  const { todos, isLoaded, addTodo, toggleTodo, deleteTodo } = useTodos();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white/50">読み込み中...</div>
      </div>
    );
  }

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full">
              <CheckCircle2 size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold gradient-text">ToDoアプリ</h1>
          </div>
          <p className="text-white/60 text-lg">シンプルで効率的なタスク管理</p>
        </div>

        {/* 入力フォーム */}
        <div className="mb-8">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* 進捗バー＆サマリー */}
        {totalCount > 0 && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Sparkles size={22} className="text-indigo-300" />
                <span className="text-white/80 font-semibold text-lg">進捗</span>
              </div>
              <span className="text-white font-bold text-2xl">
                {progressPercent}%
              </span>
            </div>
            {/* 進捗バー */}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="text-white/50 text-base mt-4">
              <span className="text-indigo-300 font-semibold text-lg">{completedCount}</span>
              {' / '}
              <span className="text-white/70 text-lg">{totalCount}</span>
              {' 件完了'}
            </p>
          </div>
        )}

        {/* タスク一覧 */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-white/60 text-2xl mb-3 font-medium">タスクはまだありません</p>
              <p className="text-white/40 text-lg">上のフォームから新しいタスクを追加してください</p>
            </div>
          ) : (
            <>
              {/* 未完了タスク */}
              {todos
                .filter((t) => !t.completed)
                .map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}

              {/* 完了タスク */}
              {todos.filter((t) => t.completed).length > 0 && (
                <>
                  <div className="my-6 border-t border-white/10"></div>
                  <h2 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
                    ✓ 完了済み
                  </h2>
                  {todos
                    .filter((t) => t.completed)
                    .map((todo) => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                      />
                    ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
