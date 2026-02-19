import LoginForm from "@/components/forms/LoginForm"

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-linear-to-r from-[#EFF6FF] to-#FFFFFF px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="mb-8">

            <h2 className="text-3xl font-bold text-foreground mb-1">
              Welcome back
            </h2>
            <p className="text-muted-foreground text-md">
              Log in to continue learning
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden sm:flex flex-1 bg-linear-to-br from-[#1C398E] to-[#193CB8] items-center justify-center px-12 py-12">
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold mb-4">
            Thousands of courses waiting for you
          </h2>
          <p className="text-white/90 mb-8">
            Join a community of 2 million learners and start your learning journey today.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Learn anytime, anywhere</h3>
                <p className="text-sm text-white/80">
                  Access any course anytime
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Recognized certificates</h3>
                <p className="text-sm text-white/80">
                  Enhance your professional value
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Expert instructors</h3>
                <p className="text-sm text-white/80">
                  Learn from the best in the industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
