import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Stanley Kim</h1>
         <p className="text-base md:text-xl mb-3 font-medium"></p>
         <p className="text-sm max-w-xl mb-6 font-bold">
          
            Hi! I am a first year student at Purdue University,
            with expectations to graduate in May 2025! My interests include software development, artificial intelligence, machine learning,
            and data science. Here is my{' '}
            <a
               href="/assets/StanleyKimResume.pdf"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               resume.
            </a>{' '}
            
         </p>
      </div>
   )
}

export default Intro;
