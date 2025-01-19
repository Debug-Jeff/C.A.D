// src/App.tsx
import React from 'react';
import { Feed } from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-turquoise-dark">FunFeed</h1>
        </div>
      </header>
      
      <main className="pt-20 pb-8 max-w-5xl mx-auto px-4">
        <Feed />
      </main>
    </div>
  );
}

export default App;