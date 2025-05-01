import React from 'react';
import UserProfile from './components/UserProfile';
import Feed from './components/Feed';
import PostCreation from './components/PostCreation';
import Messaging from './components/Messaging';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Instagram Clone</h1>
        <nav>
          {/* Navigation can be added here */}
        </nav>
      </header>
      <main className="p-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <section className="md:col-span-1">
          <UserProfile />
          <Notifications />
        </section>
        <section className="md:col-span-2">
          <PostCreation />
          <Feed />
        </section>
        <section className="md:col-span-1">
          <Messaging />
        </section>
      </main>
    </div>
  );
}

export default App;
