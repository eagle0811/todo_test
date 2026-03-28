# ToDoアプリ

シンプルで効率的なタスク管理アプリ。

## 機能

- **タスク追加**: 新しいタスクを簡単に追加
- **完了チェック**: タスクを完了としてマーク
- **削除**: 不要なタスクを削除
- **自動保存**: ブラウザのローカルストレージに自動保存
- **日本語対応**: 完全な日本語インターフェース

## 技術スタック

- **Next.js 16** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **localStorage** - データ永続化
- **lucide-react** - アイコン

## セットアップ

### 開発環境

```bash
npm install
npm run dev
```

http://localhost:3000 でアプリが起動します。

### ビルド

```bash
npm run build
npm start
```

## デプロイ

### Vercel へのデプロイ

このプロジェクトは Vercel にそのままデプロイできます。

1. [Vercel](https://vercel.com) にアカウント登録
2. リポジトリを GitHub に push
3. Vercel で新しいプロジェクトを作成してリポジトリを接続
4. 自動的にビルド・デプロイされます

### その他のホスティング

任意の Node.js ホスティング環境にデプロイ可能です：

```bash
npm run build
npm start
```

## 使い方

1. **タスク追加**: テキストボックスに内容を入力して、「追加」ボタンまたは Enter キーで追加
2. **完了**: チェックボックスをクリックしてタスクを完了
3. **削除**: ゴミ箱アイコンをクリックしてタスクを削除

データはブラウザのローカルストレージに自動保存されます。

## プロジェクト構成

```
todo-app/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # メインレイアウト
│   ├── page.tsx          # ホームページ
│   └── globals.css       # グローバルスタイル
├── components/           # React コンポーネント
│   ├── TodoApp.tsx       # メインアプリケーション
│   ├── TodoInput.tsx     # 入力フォーム
│   └── TodoItem.tsx      # タスク項目
├── hooks/                # カスタムフック
│   └── useTodos.ts       # タスク管理フック
├── types/                # TypeScript 型定義
│   └── todo.ts           # Todo 型
├── package.json          # 依存パッケージ
├── tsconfig.json         # TypeScript 設定
├── tailwind.config.ts    # Tailwind CSS 設定
└── next.config.js        # Next.js 設定
```

## ライセンス

MIT
