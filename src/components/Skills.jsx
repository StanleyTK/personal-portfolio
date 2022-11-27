import React from 'react';
import Title from './Title';
function Skills() {
   return (
    <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
            <Title>Skills</Title>
            <p>&nbsp;</p>


            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">Java</span>  
            <p>&nbsp;</p>
            <div class="container">
                <div class="skills java"></div>
            </div>
            <p>&nbsp;</p>
       

            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">Python</span>  
            <p>&nbsp;</p>
            <div class="container">
                <div class="skills python"></div>
            </div>
            <p>&nbsp;</p>

            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">JavaScript</span> 
            <p>&nbsp;</p>
            <div class="container">
                <div class="skills js"></div>
            </div>
            <p>&nbsp;</p>

            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">HTML</span> 
            <p>&nbsp;</p>
            <div class="container">
                <div class="skills html"></div>
            </div>
            <p>&nbsp;</p>

          
          
       


  
        
        </div>
    </div>
   )
}

export default Skills;