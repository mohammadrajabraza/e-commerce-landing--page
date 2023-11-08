import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      {/* Four sections container start */}
      <div className="flex justify-between items-start max-lg:flex-col flex-wrap gap-20">

        {/* Nike and Social Section start */}
        <div key="brand-section" className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center mt-8 gap-5">
            {
              socialMedia.map((icon) => (
                <div className="flex items-center justify-center bg-white h-12 w-12 rounded-full">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))
            }
          </div>

        </div>
        {/* Nike and Social Section end */}

        {/* Other three sections container start */}
        <div key="site-menu-section" className="flex flex-1 flex-wrap lg:gap-10 gap-20 justify-between">
          {
            footerLinks.map((section) => (
              <div
                key={section}
              >
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li key={link.name} className="mt-2 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray cursor-pointer">
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        {/* Other three sections container end */}

      </div>
      {/* Four sections container end */}

      {/* Copyright section container start */}
      <div className="flex justify-between max-sm:flex-col max-sm:items-center text-white-400 mt-24">
        <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" height={20} width={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>
          Terms & Conditions
        </p>
      </div>
      {/* Copyright section container end */}
    </footer>
  )
}

export default Footer
