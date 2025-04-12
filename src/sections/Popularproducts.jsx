import Popular from "../components/popular";
import { products } from "../constants";

const Popularproducts = () => {
  return (
    <section id="products"
    className=""
    
    >
      <div className="flex flex-col">

      <h1 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">10,175 inspirational designs, illustrations, and graphic elements from 
        the world’s best designers.</p>
       
      </div>
      <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                    {products.map((product)=>(

                          <Popular 
                             key={product.name}{...product}
                             
                          />

                      ))}

       </div>
      

    </section>
  )
}

export default Popularproducts