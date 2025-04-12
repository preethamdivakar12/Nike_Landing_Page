import { star } from "../assets/icons"

const Reviewcard = ({ imgURL,
        customerName,
        rating,
        feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt="personimg"
        
        width={250}
        height={250}
        className="rounded-full object-cover "
        />
        
        <p className="text-center mt-5 info-text max-w-sm">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2">
            <img src={star} alt="star"
            
            width={24}
            height={24}
            className="object-contain m-0"
            />
<p className="text-center text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="text-center mt-1 text-3xl font-bold font-palanquin">{customerName}</h3>
        
        
    </div>
  )
}

export default Reviewcard