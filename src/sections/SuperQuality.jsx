import { useInView } from 'react-intersection-observer';
import Button from "../components/Button"
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      {/* Left side of section start */}
      <div className="flex flex-1 flex-col">
        <h2 className={`transition duration-[1000ms] font-palanquin text-4xl capitalize font-bold lg:max-w-lg ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[100vh] opacity-0'}`}>
          We provide you <span className="text-coral-red">
            Super
          </span>
          <br />
          <span className="text-coral-red">
            Quality
          </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />

        </div>
      </div>
      {/* Left side of section end */}
      {/* Right side of section start */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
      {/* Right side of section end */}
    </section>
  )
}

export default SuperQuality
