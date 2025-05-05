import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="mb-20">
            <h2 className="section-title text-3xl font-bold mb-10 text-center relative">
                <span className="bg-darker px-4 relative z-10">Technical Skills</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 -z-0"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="card bg-darker p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <i className="fas fa-code mr-2"></i> Programming Languages
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>Java</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>C/C++</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>JavaScript</span>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>Python</span>
                                <span>40%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-darker p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <i className="fas fa-laptop-code mr-2"></i> Web Development/Design
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">HTML5</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">CSS3</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">JavaScript</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">React</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Node.js</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">MariaDB</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">REST APIs</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Tailwind CSS</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Git</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Figma</span>
                    </div>
                </div>
                <div className="card bg-darker p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <i className="fas fa-brain mr-2"></i> Data Science & AI
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">SQL</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Python</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Data Visualization</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">NumPy</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">PowerBI</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Matplotlib</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Scikit-learn</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">TensorFlow</span>
                        <span className="skill-pill bg-gray-800 text-gray-200 px-3 py-1 rounded-full">Keras</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;