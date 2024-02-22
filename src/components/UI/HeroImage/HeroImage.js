
import heroImg from '../../../images/heroImg.jpg'; 

function HeroImage() {
  return (
    <>
      <style>
        {`
       @keyframes blob {
        0% {
          border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
        }
        20% {
          border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
        }
        40% {
          border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
        }
        60% {
          border-radius: 70% 30% 30% 70% / 49% 60% 40% 51%;
        }
        80% {
          border-radius: 30% 70% 70% 30% / 76% 46% 54% 24%;
        }
        100% {
          border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
        }
      }
      .blob-effect {
        animation: blob 7s infinite;
      }
        `}
      </style>
      <div className="relative w-[500px] h-[500px] overflow-hidden rounded-full blob-effect border-black border-4">
        <img src={heroImg} alt="Hero" className="object-cover w-full h-full" />
        <div className=""></div>
      </div>
    </>
  );
}

export default HeroImage;
