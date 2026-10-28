import { BusFront, CalendarSearch, CloudCheck, Search } from "lucide-react";
import doctorOne from "../assets/doc1.png";
import doctorTwo from "../assets/doc2.png";
import doctorThree from "../assets/doc3.png";
import doctorFour from "../assets/doc4.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="flex md:flex-row flex-col items-center justify-between gap-5 md:gap-10 max-w-300 mx-auto px-4 py-4 md:py-6">
        <div className="space-y-4">
          <h5 className="text-blue-500 font-bold uppercase tracking-wide text-center md:text-start">
            We are here for you
          </h5>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight text-center md:text-start">
            Welcome to Medicares
          </h1>

          <p className="text-gray-600 leading-relaxed text-center md:text-start">
            At Medicares, your health and well-being come first. We provide
            reliable and modern healthcare services designed to support you and
            your loved ones every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer w-full sm:w-fit">
              Contact a Doctor
            </button>

            <button className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 cursor-pointer w-full sm-w-fit">
              Learn More About Us
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-10 w-full md:w-[95%]">
          <div>
            <img
              src={doctorThree}
              alt="Doctor"
              className="bg-[#014bec] rounded-xl"
            />
          </div>

          <div className="flex flex-col items-center gap-5">
            <img
              src={doctorOne}
              alt="Doctor"
              className="bg-[#0335a1] rounded-xl"
            />

            <img
              src={doctorTwo}
              alt="Doctor"
              className="bg-[#e17979] rounded-xl"
            />
          </div>
        </div>
      </section>

      <section id="services" className="max-w-300 mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h1>

          <p className="text-gray-600 mt-3">
            Our patients are our priority. We provide quality healthcare
            services you can trust.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-3 bg-blue-50 p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition">
            <div className="bg-blue-100 p-3 rounded-full">
              <Search size={24} color="#155dfc" />
            </div>
            <p className="font-medium text-gray-800 text-center">
              Find a Specialist
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-100 transition">
            <div className="bg-green-100 p-3 rounded-full">
              <CalendarSearch color="green" />
            </div>
            <p className="font-medium text-gray-800 text-center">
              Book Appointment
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-purple-50 p-4 rounded-lg cursor-pointer hover:bg-purple-100 transition">
            <div className="bg-purple-100 p-3 rounded-full">
              <CloudCheck color="purple" />
            </div>
            <p className="font-medium text-gray-800 text-center">
              Online Consultation
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-red-50 p-4 rounded-lg cursor-pointer hover:bg-red-100 transition">
            <div className="bg-red-100 p-3 rounded-full">
              <BusFront color="orange" />
            </div>
            <p className="font-medium text-gray-800 text-center">
              Emergency Care
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-300 mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              We Truly Care About Your Health
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Medicares, every patient matters. Our team of dedicated doctors
              and healthcare professionals are committed to providing
              compassionate, reliable, and personalized care whenever you need
              it.
            </p>

            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src={doctorFour}
              alt="Doctor"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-12 px-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Subscribe for Latest Doctor Updates
          </h2>

          <p className="text-gray-600">
            Get health tips, doctor availability, and important updates
            delivered straight to your inbox.
          </p>

          <div className="mt-6">
            <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-80 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                id="sendBtn"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full md:w-fit ${
                  transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
