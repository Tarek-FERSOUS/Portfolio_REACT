import React from 'react';

const Education = () => {
    return (
        <section id="education" className="mb-20">
            <h2 className="section-title text-3xl font-bold mb-10 text-center relative">
                <span className="bg-darker px-4 relative z-10">Education</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 -z-0"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="card bg-darker p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-primary">Bachelor of Science in Computer Science</h3>
                        <span className="text-gray-400">2021 - 2025</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">University of Algiers</h4>
                    <p className="text-gray-300 mb-4">Bac: 15.36</p>
                    <div className="space-y-2">
                        <p className="font-medium">Qualities:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Proficiency in programming languages such as Java and C for data manipulation.</li>
                            <li>In-depth understanding of algorithms and data structures, enabling efficient processing of databases.</li>
                            <li>Executive member of Octobit Club (IT/design/social media department)</li>
                        </ul>
                        <p className="font-medium">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">Data Structures</span>
                            <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">Algorithms</span>
                            <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">Operation Systems</span>
                            <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">Database Systems</span>
                            <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">Computer Networks</span>
                        </div>
                    </div>
                </div>
                <div className="card bg-darker p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-primary">Industrial Maintenance</h3>
                        <span className="text-gray-400">2021 - 2023</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">University of Ghardaia</h4>
                    <p className="text-gray-300 mb-4">Bac: 14.16/20</p>
                    <div className="space-y-2">
                        <p className="font-medium">Qualities:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Understanding of mechanical systems and components critical for maintenance and troubleshooting in industrial environments.</li>
                            <li>Familiarity with safety protocols and regulations relevant to industrial maintenance, promoting a safe work environment.</li>
                            <li>E-Space Club co-founder and vice-president.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;