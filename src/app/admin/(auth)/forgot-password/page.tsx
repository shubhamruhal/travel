'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your forgot password logic here
    setMessage('If an account exists with this email, you will receive password reset instructions.');
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left panel with background image */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-[600px]">
        <Image
          src="/images/hero.jpg"
          alt="Forgot Password Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right panel with form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Adventure Aura
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-600">Forgot Password</h2>
            <p className="mt-2 text-sm text-gray-500">Enter your email to reset your password</p>
          </div>

          {message && <p className="text-green-600 text-sm text-center">{message}</p>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Send Reset Instructions
          </button>

          <div className="text-center">
            <a href="/login" className="text-orange-600 hover:text-orange-500">
              Back to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
