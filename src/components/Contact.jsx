import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <section id="contact" className="mb-20">
            <h2 className="section-title text-3xl font-bold mb-10 text-center relative">
                <span className="bg-darker px-4 relative z-10">Get In Touch</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 -z-0"></span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="card bg-darker p-6 rounded-lg h-full">
                        <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="text-primary mt-1">
                                    <i className="fas fa-envelope text-xl icon-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:tarek.fersous@univ-alger.dz" 
                                       className="text-gray-300 hover:text-primary transition">
                                        tarek.fersous@univ-alger.dz
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="text-primary mt-1">
                                    <i className="fas fa-phone text-xl icon-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <a href="tel:+213675132946" 
                                       className="text-gray-300 hover:text-primary transition">
                                        +213 675 132 946
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="text-primary mt-1">
                                    <i className="fas fa-map-marker-alt text-xl icon-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-gray-300">Algiers, ALGERIA</p>
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <h4 className="font-semibold mb-4">Connect with me</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/tarek-fersous" 
                                       className="skill-pill w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://github.com/Tarek-FERSOUS" 
                                       className="skill-pill w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition">
                                        <i className="fab fa-github "></i>
                                    </a>
                                    <a href="#" 
                                       className="skill-pill w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/tareex__" 
                                       className="skill-pill w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2">
                    <div className="card bg-darker p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="contact-input w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary" 
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="contact-input w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary" 
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    className="contact-input w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary" 
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    className="contact-input w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary" 
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-primary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;