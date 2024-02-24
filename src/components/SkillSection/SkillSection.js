import SKillIcon from "../UI/SkillIcon/SkillIcon";
import ArrowLeft from "../../images/arrowLeft.svg";
import ArrowRight from "../../images/arrowRight.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import skillObject from "../../ultis/skillInfo";

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
        <div className="flex items-center pt-14 pl-24">
          <h2 className="font-[Playfair] text-4xl inline-block align-middle">
            Skills : MERN - STACK
          </h2>
        </div>
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
              spaceBetween: 2,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="w-[80%]"
        >
          {skillObject.map((skill, index) => {
            return (
              <SwiperSlide key={index} className="w-[90%] py-20">
                <SKillIcon skill={skill} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center gap-[250px]  pb-12">
          <img
            src={ArrowLeft}
            className="w-[100px] h-[100px] transform rotate-180 arrow-animate"
            alt="Animated arrow"
          />
          <img
            src={ArrowRight}
            className="w-[100px] h-[100px] arrow-animate transform rotate-180"
            alt="Animated arrow"
          />
        </div>
      </section>
    </>
  );
};

export default SkillSection;
