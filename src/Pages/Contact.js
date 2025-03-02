import React from "react";

const Contact = () => {
  return (
    <section className="w-11/12 sm:w-4/5 mx-auto py-16 pt-[120px] text-gray-900">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Have a project in mind? Let's connect and create something amazing together.
        </p>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white p-8 shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">You can reach out via email or phone.</p>
          <p className="text-gray-900 font-medium">📧 Email: <a href="mailto:your@email.com" className="text-blue-600 hover:underline">your@email.com</a></p>
          <p className="text-gray-900 font-medium">📞 Phone: <a href="tel:+123456789" className="text-blue-600 hover:underline">+123456789</a></p>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Follow Me</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a>
              <a href="https://instagram.com" className="text-blue-600 hover:underline">Instagram</a>
              <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 shadow-lg rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
          </div>
          <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"></textarea>
          <button type="submit" className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg text-lg font-medium transition-all hover:bg-gray-700">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-12">
        <iframe className="w-full h-64 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902921866476!2d90.39063231543174!3d23.75073159479326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAyLjciTiA5MMKwMjMnMjAuMSJF!5e0!3m2!1sen!2sbd!4v1643707237956!5m2!1sen!2sbd"></iframe>
      </div>
    </section>
  );
};

export default Contact;
