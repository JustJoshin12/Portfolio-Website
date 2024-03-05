import SKillIcon from "../UI/SkillIcon/SkillIcon";
import ArrowLeft from "../../images/arrowLeft.svg";
import ArrowRight from "../../images/arrowRight.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import skillObject from "../../ultis/skillInfo";
import SkillList from "../SkillMastery/SkillMastery";

const SkillSection = () => {
  return (
    <>
      <style>
        {`
                @keyframes arrowBounce {
                    0%, 100% {
                      transform: translateX(0);
                    }
                    50% {
                      transform: translateX(10px); /* Adjust the value to control the distance */
                    }
                }
                .arrow-animate {
                    animation: arrowBounce 1s ease-in-out infinite;
                }
            `}
      </style>
      <section id="skills" className="py-24 mt-[-6rem]">
        <div className="text-center pt-14">
          <h2 className="font-[Playfair] text-8xl py-8 tracking-widest">
            Skill Set
          </h2>
          <p className="text-2xl font-[Playfair]">MERN-STACK</p>
        </div>
        <div className="flex items-center py-16">
          <img
            src={ArrowLeft}
            className="w-[70px] h-[70px] transform rotate-180 arrow-animate mx-auto"
            alt="Animated arrow"
          />
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              425: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              800: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="w-[80%] hover:bg-slate-500 duration-200 rounded-badge"
          >
            {skillObject.map((skill, index) => {
              return (
                <SwiperSlide key={index} className="w-[90%] py-16">
                  <SKillIcon skill={skill} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <img
            src={ArrowRight}
            className="w-[70px] h-[70px] arrow-animate transform rotate-180 mx-auto"
            alt="Animated arrow"
          />
        </div>
        <SkillList/>
      </section>
    </>
  );
};

export default SkillSection;
