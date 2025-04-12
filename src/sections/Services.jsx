import { services } from "../constants";
import Servicecard from "../components/Servicecard";
const Services = () => {
  return (
    <section id="services"
    className="flex max-container justify-center flex-wrap gap-9"
    >
      {services.map((service)=>(
            <Servicecard
             key={service.label}{...service}
            />

      ))}



    </section >


  )
}

export default Services