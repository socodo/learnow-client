import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden items-center justify-center sm:flex flex-1 bg-linear-to-br from-[#1C398E] to-[#193CB8]">
        <div className="max-w-md text-white flex-wrap px-10">
          <h2 className="text-3xl font-bold mb-4">Start your learning journey</h2>
          <p className="text-white/90 mb-8">Create a free account and explore thousands of courses from top experts.</p>


          <div className="grid grid-cols-2 gap-4">
            <div className="px-6 pt-6 pb-4 rounded-2xl bg-blue-800/50">
              <p className="text-2xl font-bold">2M+</p>
              <p className="text-sm">Global learners</p>
            </div>

            <div className="px-6 pt-6 pb-4 rounded-2xl bg-blue-800/50">
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm">Courses</p>
            </div>

            <div className="px-6 pt-6 pb-4 rounded-2xl bg-blue-800/50">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Instructors</p>
            </div>

            <div className="px-6 pt-6 pb-4 rounded-2xl bg-blue-800/50">
              <p className="text-2xl font-bold">4.8+</p>
              <p className="text-sm">Average rating</p>
            </div>

          </div>
        </div>
      </div>

      <div className="flex-1 bg-linear-to-r from-[#EFF6FF] to-#FFFFFF flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-foreground mb-1">Create Account</h1>
          <p className="text-muted-foreground text-md mb-8">Completely free, start learning now!</p>
          <SignUpForm></SignUpForm>
        </div>

      </div>
    </div>
  )
}
