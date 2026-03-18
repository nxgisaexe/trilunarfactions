import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Eye, EyeOff, Lock } from 'lucide-react';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const GOOGLE_SHEET_EMBED_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT6YZAZ6q6upGWJVcC6er8W6odleAr-6EnH1q7i1UHfM-EsdlE2LB443E-fQmohFFCiBGmw9g7lcrWl/pubhtml';

interface AdminPanelProps {
  onBack: () => void;
}

export function AdminPanel({ onBack }: AdminPanelProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-indigo-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-purple-400/30 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-200 via-blue-300 to-purple-200 bg-clip-text text-transparent">
              ADMIN ACCESS
            </h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border-purple-400/30 text-white placeholder:text-white/50 pr-10"
                  placeholder="Admin password..."
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-purple-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full py-4 sm:py-6 text-base sm:text-lg border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-700 hover:to-indigo-700 font-bold uppercase"
            >
              Login
            </Button>
          </form>

          <Button
            onClick={onBack}
            variant="ghost"
            className="w-full mt-4 text-purple-200 hover:text-purple-100 hover:bg-white/5"
          >
            ← Return
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      <div className="bg-black/30 border-b border-purple-400/20 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-blue-300 to-purple-200 bg-clip-text text-transparent">
          LUNAR FACTIONS - Results
        </h1>
        <Button
          onClick={onBack}
          className="w-full py-3 sm:py-6 text-xs sm:text-lg border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-700 hover:to-indigo-700 font-bold uppercase"
          >
          ← Return
        </Button>
      </div>

      <div className="flex-1 p-4">
        <div className="h-full rounded-lg overflow-hidden border-2 border-purple-400/30 shadow-lg">
          <iframe
            src={GOOGLE_SHEET_EMBED_URL}
            className="w-full h-full"
            style={{ minHeight: 'calc(100vh - 120px)' }}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}