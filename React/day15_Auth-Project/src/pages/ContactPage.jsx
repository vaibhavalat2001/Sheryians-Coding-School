import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            We'd love to hear from you. Send us a message or reach out using the details below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
                ></textarea>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Phone className="text-indigo-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">+91 90675 79706</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Mail className="text-indigo-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600">vaibhavgalat123@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5">
              <div className="bg-indigo-100 p-4 rounded-full">
                <MapPin className="text-indigo-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">
                  Malkinhi, Yavatmal, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Clock className="text-indigo-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;