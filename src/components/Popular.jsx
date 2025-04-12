
import { star } from "../assets/icons"
const Popular = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">

       <img src={imgURL} alt={name} 
       className="w-[280px] h-[280px]"
       
       />

       <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="star" 
           
          />
          <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
       </div>
       <h3 className="mt-3 leading-normal font-semibold text-2xl font-palanquin">{name}</h3>
       <p className="leading-normal text-xl font-mono font-bold text-coral-red">{price}</p>
    </div>
  )
}

export default Popular 