import { useState } from "react"
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from "../assets/images"
import { statistics, shoes } from '../constants'

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      {/*---------- Left hero section start ----------*/}
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className={`transition duration-[1500ms] z-10 mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ${ inView ? 'translate-x-0 opacity-100' : 'translate-x-[-100vh] opacity-0' }`}>
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">The New Arrival</span>
          <br />
          <span className="inline-block text-coral-red mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        {/*---------- Stats section start ----------*/}
        <div className="flex items-start justify-starts flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stats) => (
              <CountUp
                start={0}
                end={stats.value > 1000 ? stats.value / 1000: stats.value}
                suffix={stats.value > 1000 ? 'K+' : ''} 
                key={stats.label}
                delay={2}
                duration={3}
              >
                {({ countUpRef }) => (
                  <div>
                    <p className="text-4xl font-palanquin font-bold" ref={countUpRef} />
                    <p className="leading-7 font-montserrat text-slate-gray">{stats.label}</p>
                  </div>
                )}

              </CountUp>
            ))
          }
        </div>
        {/*---------- Stats section end ----------*/}
      </div>
      {/*---------- Left hero section end ----------*/}
      {/*---------- Right hero section start ----------*/}
      <div className="flex-1 flex relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          height={500}
          width={610}
          className="relative object-contain z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {
            shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => { setBigShoeImage(shoe) }}
                  bigShoeImg={bigShoeImage}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
