import Navbar from '../components/Navbar';
export default function Contact() {
  return (
    
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">Have questions? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Name" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Email" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-bl from-green-500 to-cyan-400 hover:from-green-600 hover:to-cyan-500 text-white py-3 px-9 font-semibold text-base rounded-full shadow-md shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}