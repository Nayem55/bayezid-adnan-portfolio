import React from "react";

const About = () => {
  return (
    <section className="w-11/12 sm:w-4/5 mx-auto py-16 pt-[120px] text-gray-900">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Passionate about visual storytelling through Photography, Videography, and Motion Design.  
          <br />I create captivating content that connects with audiences worldwide.
        </p>
      </div>

      {/* Skills & Expertise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {["Photography", "Videography", "Motion Design", "Editing", "Graphic Design", "Creative Direction"].map((skill) => (
          <div key={skill} className="p-6 bg-white shadow-lg rounded-xl text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">My Experience</h3>
        <div className="space-y-6">
          {[
            { year: "2023 - Present", role: "Freelance Photographer & Filmmaker", company: "Self-Employed" },
            { year: "2020 - 2023", role: "Creative Director", company: "XYZ Media Studio" },
            { year: "2017 - 2020", role: "Junior Motion Designer", company: "ABC Design Agency" },
          ].map((exp, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold">{exp.role}</h4>
              <p className="text-gray-600">{exp.company} - {exp.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-6">What Clients Say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: "John Doe", review: "An absolute professional! The best creative work I have ever received." },
            { name: "Sarah Khan", review: "Captured our wedding beautifully! Highly recommend for photography & videography." },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
              <h4 className="text-lg font-semibold mt-4">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
        <p className="text-gray-600 mb-6">Looking for a creative professional? Let's discuss your project.</p>
        <a href="/contact" className="bg-gray-900 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all hover:bg-gray-700">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default About;
