import { useInView } from 'react-intersection-observer';

const FadeInDiv = ({ children, direction = 'left' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const baseAnimation = 'transition-opacity duration-1000 opacity-0';
  const animationClass = inView ? 'opacity-100' : baseAnimation;
  const translateClass = direction === 'left' ? 'translate-x-[-50px]' : 'translate-x-[50px]';
  const finalClass = `${animationClass} ${inView ? 'translate-x-0' : translateClass}`;

  return (
    <div ref={ref} className={`flex ${finalClass}`}>
      {children}
    </div>
  );
};
