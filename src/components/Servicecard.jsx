
const Servicecard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] w-full shadow-2xl px-10 py-16">

       <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full">

        <img src={imgURL} alt={label}
        width={24} height={24} />
       </div>
<h3 className="mt-5 leading-normal font-palanquin text-3xl font-bold">{label}</h3>
<p className="mt-3 break-words font-montserrat text-xl text-slate-gray leading-normal">{subtext}</p>
    </div>
  )
}

export default Servicecard