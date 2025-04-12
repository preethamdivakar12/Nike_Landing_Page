import Buttons from "../components/Buttons";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section id='specialoffers'
     className="flex justify-wrap items-center gap-10 w-full max-xl:flex-col-reverse max-container"
        >
    <div className="flex-1" >
              <img src={offer} alt="offers" 
              className="object-contain w-full"
              width={773}
              height={687}
              />
    </div>
    <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg"><span className="text-coral-red">Special</span> Offers</h2>
        <p className="info-text mt-4 lg:max-w-lg">Experience unmatched comfort and style with our premium collection of shoes, designed for every occasion.
          Crafted with precision and top-quality materials to ensure durability and elegance.
    
        <br/><br/>
        Step into style and comfort with our superior quality shoes, made to last.</p>
           <div className="mt-8 flex gap-6">
    
           <Buttons label="Shop now" iconURL={arrowRight} />
           <button className="bg-white border-blue-400 border-2 rounded-full px-8 text-slate-gray font-palanquin">Learn more</button>
           </div>
    </div>
    


    </section>
  )
}

export default SpecialOffers