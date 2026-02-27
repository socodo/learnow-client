import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Code, Clock, Award, TrendingUp, Palette, Briefcase, Camera, Lightbulb, Users, Globe, Users2, Star } from 'lucide-react';


export default function Home() {
  return (
    <div className="bg-[#FFFFFF] flex-col flex min-h-screen">
      <div className="bg-linear-to-br from-blue-50 to-white w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="space-y-4 flex-1 text-center lg:text-left">
            <h1 className="text-blue-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Learn new skills, open new future
            </h1>
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg md:text-xl">
              Explore thousands of courses from top experts
            </p>
            <Link href="/explore">
              <Button className="mt-5 text-white bg-[#FE9A00] border border-[#FE9A00] text-base sm:text-lg hover:bg-orange-600 transition-all px-6 py-2">
                Explore now
              </Button>
            </Link>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <Image
              src="/images/hero.jpg"
              alt="Hero image"
              width={600}
              height={400}
              priority
              className="rounded-2xl border-16 border-blue-900 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-20 border-b">
        <h1 className="text-center text-gray-600 text-base font-normal leading-6 my-8 ">Trusted by 500+ leading companies:</h1>
        <div className="flex max-w-5xl mx-auto justify-between flex-wrap">
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">H</div>
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">C</div>
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">M</div>
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">U</div>
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">T</div>
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">C</div>
          <div className="py-3 px-8 bg-[#F3F4F6] text-gray-600 font-bold text-3xl border rounded-2xl leading-9">N</div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-4 py-12 md:py-16 lg:py-20">
        <h2 className="text-center text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16">
          Top Popular Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-48 max-w-7xl mx-auto">
          {/* Programming */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Code className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-blue-800 text-center">Programming</span>
          </div>

          {/* Marketing */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Marketing</span>
          </div>

          {/* Design */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-purple-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Design</span>
          </div>

          {/* Business */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Business</span>
          </div>

          {/* Photography */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Photography</span>
          </div>

          {/* Personal Development */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Personal Development</span>
          </div>

          {/* Human Resources */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Human Resources</span>
          </div>

          {/* Languages */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-600" />
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center group-hover:text-blue-800">Languages</span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-4 py-12 md:py-16 lg:py-20 ">
        <h1 className="text-center text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 ">Why learn on LearNow</h1>
        <div className="flex px-48 justify-around">
          <div className="group flex flex-col max-w-96 items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Clock className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-gray-900 text-xl font-bold leading-7">Learn at your own pace</h2>
            <p className="text-gray-600 text-base font-normal leading-6">Lifetime access, learn anytime, anywhere on any device</p>
          </div>

          <div className="group flex flex-col max-w-96 items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FEF3C6] flex items-center justify-center transition-transform group-hover:scale-110">
              <Award className="text-[#E17100] w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-gray-900 text-xl font-bold leading-7">Recognized certificates</h2>
            <p className="text-gray-600 text-center text-base font-normal leading-6">Earn completion certificates from top experts</p>
          </div>

          <div className="group flex flex-col max-w-96 items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#DCFCE7] flex items-center justify-center transition-transform group-hover:scale-110">
              <Users2 className="text-[#00A63E] w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-gray-900 text-xl font-bold leading-7">Learning community</h2>
            <p className="text-gray-600 text-base font-normal leading-6 text-center">Join a community of over 2 million learners worldwide.</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2/3 mx-auto bg-[#F9FAFB] my-20 rounded-2xl shadow-xl py-8">
        <h1 className="text-center text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16">What learners say about us</h1>

        <div className="w-full flex gap-10 px-10 py-4">

          <div className="flex-1 hover:scale-110  transform transition duration-300 flex flex-col justify-between py-10 px-6 rounded-2xl shadow-2xl bg-[#FFFFFF]">
            <div className="ml-10 leading-6 flex flex-col gap-2 py-2 mb-2">
              <h2 className="text-gray-900 text-base font-bold">Nguyen Minh Tuan</h2>
              <p className="text-gray-700 text-sm font-normal">Frontend Developer</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex text-amber-400 gap-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-gray-700 text-base font-normal leading-6 italic">&quot;Thanks to LearnNow, I successfully transitioned my career from marketing to programming. The courses are very detailed and easy to understand, instructors are enthusiastic in support.&quot;</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between  hover:scale-110  transform transition duration-300 py-10 px-6 rounded-2xl shadow-2xl bg-[#FFFFFF]">
            <div className="ml-10 leading-6 flex flex-col gap-2 py-2 mb-2">
              <h2 className="text-gray-900 text-base font-bold">Tran Thi Huong</h2>
              <p className="text-gray-700 text-sm font-normal">Digital Marketer</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex text-amber-400 gap-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-gray-700 text-base font-normal leading-6 italic">&quot;The marketing courses on LearnNow helped me improve my skills and double my salary in just 6 months. The most worthwhile investment ever!&quot;</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between py-10 px-6  hover:scale-110  transform transition duration-300 rounded-2xl shadow-2xl bg-[#FFFFFF]">
            <div className="ml-10 leading-6 flex flex-col gap-2 py-2 mb-2">
              <h2 className="text-gray-900 text-base font-bold">Le Hoang Nam</h2>
              <p className="text-gray-700 text-sm font-normal">UX/UI Designer</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex text-amber-400 gap-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-gray-700 text-base font-normal leading-6 italic">&quot;I completed 5 design courses and received many freelance projects. The learning community is very helpful, always willing to share experiences.&quot;</p>
            </div>
          </div>
        </div>


      </div>

      <div className="w-full bg-linear-to-br py-24 from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-white text-4xl font-bold leading-10">Become an instructor today</h1>
            <h2 className="text-blue-100 text-xl font-normal leading-7">Share your knowledge and earn passive income.</h2>
            <Link href="teaching">
              <Button className="text-white text-xl font-normal leading px-10 py-6 bg-amber-400 rounded-2xl">
                Start teaching
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
