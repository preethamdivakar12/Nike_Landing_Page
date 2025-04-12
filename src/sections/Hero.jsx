import Buttons from "../components/Buttons";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, bigShoe2 } from "../assets/images";
import { useState } from "react";
import Shoecard from "../components/Shoecard";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="Home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">our summer collections</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red mt-3 inline-block">Nike</span> shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Move, Shop, Customise & Celebrate With Us No matter what you feel like doing today, It’s better as a Member
                </p>
                <Buttons label="Shop now" iconURL={arrowRight} />
                <div className="flex justify-start items-start gap-16 flex-wrap w-full mt-20">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoeImg} alt="shoe collections" width={610} height={500} className="object-contain relative z-10" />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <Shoecard
                            key={shoe.bigShoe}
                            imgURL={shoe}
                            changeBigShoeImage={(img) => setBigShoeImg(img)}
                            bigShoeImg={bigShoeImg}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
