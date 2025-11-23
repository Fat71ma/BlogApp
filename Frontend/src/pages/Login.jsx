import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [type, setType] = useState("login"); // 'login' or 'signup'

  const handleSubmit = (e) => {
    e.preventDefault();
    // no-op: design only
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      
      {/* 1. LEFT SIDE - IMAGE (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative justify-center items-center">
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay for text readability */}
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Library"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-white px-12 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            "I saw the world open wide."
          </h2>
          <p className="text-lg text-gray-200 font-light">
            Join the Blueverse community and share your story.
          </p>
        </div>
      </div>

      {/* 2. RIGHT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 relative">
        
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 text-sm text-gray-500 hover:text-black flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          Back to Home
        </Link>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              {type === "login" ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-gray-500 text-sm">
              {type === "login" 
                ? "Enter your details to access your stories." 
                : "Start your journey with Blueverse today."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Name Field (Signup Only) */}
            {type === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Forgot Password (Login Only) */}
            {type === "login" && (
              <div className="flex justify-end">
                <a href="#" className="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              {type === "login" ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center text-sm">
            <p className="text-gray-600">
              {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setType(type === "login" ? "signup" : "login")}
                className="font-bold text-gray-900 hover:underline ml-1"
              >
                {type === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;