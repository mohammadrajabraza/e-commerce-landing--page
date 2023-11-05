const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
        ${
          backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
        }
      `}>
      {label}

      {
        iconURL && <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full h-5 w-5"
        />  
      }
      
    </button>
  )
}

export default Button
