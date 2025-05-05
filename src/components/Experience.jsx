import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="mb-20">
            <h2 className="section-title text-3xl font-bold mb-10 text-center relative">
                <span className="bg-darker px-4 relative z-10">Work Experience</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 -z-0"></span>
            </h2>
            <div className="space-y-8">
                <div className="card bg-darker p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold text-primary">Amateur Software Developer</h3>
                        <span className="text-gray-400">2024 - 2025</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Tech Solutions.</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Developed and maintained web applications using React and Node.js</li>
                        <li>Collaborated with cross-functional teams to implement new features</li>
                        <li>Optimized database queries, improving application performance by 30%</li>
                        <li>Participated in code reviews and agile development processes</li>
                    </ul>
                </div>
                
                <div className="card bg-darker p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold text-primary">Retail Sales Assistant</h3>
                        <span className="text-gray-400">2020 - 2024</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Techno Stationery Inc.</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Strong expertise in Retail Sales, Sales Techniques, and Account Management for B2C/B2B environments.</li>
                        <li>Experience in Store Management, Merchandising and Inventory Management.</li>
                        <li>Skills in B2C Marketing, Communication, and Product Support.</li>
                        <li>Focus on Active Learning and continuous skill development.</li>
                    </ul>
                </div>

                <div className="card bg-darker p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold text-primary">Freelance Designer/Developer</h3>
                        <span className="text-gray-400">2023 - present</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Self-Employed</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Designed custom websites for small businesses and startups</li>
                        <li>Created responsive designs with HTML, CSS, and JavaScript</li>
                        <li>Implemented SEO strategies to improve client visibility</li>
                        <li>Managed project timelines and client communications</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;