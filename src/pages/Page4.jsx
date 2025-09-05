import React from 'react'
import { Link } from 'react-router-dom'

export default function Page4() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-4xl font-bold">Page 4</h1>
        <p className="mt-4 text-white/70">This is the placeholder for Page4. We'll design details after you approve the home layout.</p>
        <div className="mt-6">
          <Link to="/" className="text-accent underline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
