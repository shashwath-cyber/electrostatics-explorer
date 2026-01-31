import type { FC } from 'react';
import { useState } from 'react';

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<'home' | 'features' | 'about'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12 py-6 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-blue-400">⚡ Electrostatics Explorer</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded transition ${
                activeTab === 'home' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 py-2 rounded transition ${
                activeTab === 'features' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded transition ${
                activeTab === 'about' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>
          </div>
        </nav>

        {/* Home Tab */}
        {activeTab === 'home' && (
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Explore Electrostatics Interactively
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Learn the fundamental principles of electric fields, forces, and potentials through interactive demonstrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg p-6 border border-blue-500 hover:border-blue-400 transition">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Simulations</h3>
                <p className="text-slate-300">Run interactive physics simulations to visualize electric fields and forces in real-time</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-purple-500 hover:border-purple-400 transition">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Learning Modules</h3>
                <p className="text-slate-300">Comprehensive tutorials covering Coulomb's law, electric potential, and more</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-green-500 hover:border-green-400 transition">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Experiments</h3>
                <p className="text-slate-300">Conduct virtual experiments and test your understanding of electrostatic principles</p>
              </div>
            </div>
          </section>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">✓ Interactive Field Visualizations</h3>
                <p className="text-slate-300">See electric fields represented with beautiful gradient visualizations and vector displays</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">✓ Real-time Calculations</h3>
                <p className="text-slate-300">Watch calculations update in real-time as you adjust charges and distances</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">✓ Educational Explanations</h3>
                <p className="text-slate-300">Each simulation comes with detailed explanations of the physics principles involved</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">✓ Mobile Responsive</h3>
                <p className="text-slate-300">Access the explorer from any device - desktop, tablet, or smartphone</p>
              </div>
            </div>
          </section>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <section>
            <h2 className="text-3xl font-bold mb-8">About Electrostatics Explorer</h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 space-y-4">
              <p className="text-slate-300 text-lg">
                Electrostatics Explorer is an educational platform designed to make learning physics fun and interactive.
              </p>
              <p className="text-slate-300 text-lg">
                Our mission is to help students understand complex concepts in electrostatics through visual demonstrations and hands-on experiments.
              </p>
              <p className="text-slate-300 text-lg">
                Built with React, Vite, and Tailwind CSS for a modern, fast, and responsive learning experience.
              </p>
              <p className="text-slate-400 mt-6 pt-6 border-t border-slate-700">
                Version 1.0 | © 2025 Educational Physics Platform
              </p>
            </div>
          </section>
        )}

        {/* Interactive Counter Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">🎮 Try Interactive Counter</h3>
          <div className="text-7xl font-bold mb-8 text-white drop-shadow-lg">{count}</div>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setCount(Math.max(0, count - 1))}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold text-white transition transform hover:scale-105"
            >
              ➖ Decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg font-bold text-white transition transform hover:scale-105"
            >
              🔄 Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold text-white transition transform hover:scale-105"
            >
              ➕ Increase
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 py-8 border-t border-slate-700">
          <p className="mb-2">🚀 Electrostatics Explorer | Built with React + Vite + Tailwind CSS</p>
          <p className="text-sm">Made with ❤️ for physics students everywhere</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
