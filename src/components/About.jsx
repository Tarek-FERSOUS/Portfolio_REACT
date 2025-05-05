import React from 'react';
import { useCardAnimation } from './CardAnimation';

const About = () => {
    useCardAnimation();

    return (
        <section id="about" className="mb-20">
            <div className="card bg-darker rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">Hi, I'm <span className="text-primary">Tarek</span></h2>
                        <h3 className="text-2xl mb-6">Computer Science Student...</h3>
                        <p className="text-lg mb-6 leading-relaxed">
                            Passionate about software development, artificial intelligence, and creating innovative solutions to real-world problems. Currently pursuing my degree while working on exciting projects and self development.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="/files/Resume Tarek FERSOUS EN.pdf" 
                               className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                               target="_blank"
                               rel="noopener noreferrer"
                               download>
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" 
                             alt="Developer Illustration" 
                             className="w-full max-w-md rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;