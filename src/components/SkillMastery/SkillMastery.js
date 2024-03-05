import React, { useEffect, useState } from 'react';
import skillObject from "../../ultis/skillInfo";

const SkillList = () => {
  const [animate, setAnimate] = useState(skillObject.map(() => false));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate((prevAnimate) => prevAnimate.map(a => !a));
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="pt-16 pb-24 ">
      <div className="max-w-5xl mx-auto  hover:bg-slate-500 duration-200 rounded-badge p-12">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillObject.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: animate[index] ? `${skill.progress}%` : '0%',
                    transition: 'width 2s ease-in-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
