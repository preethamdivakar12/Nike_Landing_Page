import Reviewcard from "../components/Reviewcard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      
     <h3 className="font-palanquin text-4xl font-bold text-center">
         What Our <span className="text-coral-red">Customers</span>  Say?
     </h3>
     <p className="info-text m-auto mt-4 text-center max-w-lg">Here is genuine stories from our Customers.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
             {reviews.map((review)=>(
                <Reviewcard
                key={review.customerName}{...review}
               
                
                />


             ))}

      </div>

    </section>
  )
}

export default CustomerReviews