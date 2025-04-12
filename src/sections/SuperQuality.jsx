import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="contact-us"
       className="flex justify-between items-center gap-10 w-full max-lg:flex-col max-container"
    >
      
<div className="flex flex-1 flex-col">
    <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
    <p className="info-text mt-4 lg:max-w-lg">Experience unmatched comfort and style with our premium collection of shoes, designed for every occasion.
      Crafted with precision and top-quality materials to ensure durability and elegance.

    <br/><br/>
    Step into style and comfort with our superior quality shoes, made to last.</p>
       <div className="mt-8">

      <button className="bg-coral-red rounded-full py-2 px-5 text-white font-mono">
        View Details
       </button>
       </div>
</div>
<div className="flex-1 flex justify-center items-center" >
  <img src={shoe8}
  
  alt="shoe8"
  width={570}
  height={522}
  className="object-contain" />
</div>
      




    </section>
  )
}

export default SuperQuality