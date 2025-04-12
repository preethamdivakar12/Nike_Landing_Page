import Buttons from "../components/Buttons"

const Subscribe = () => {
  return (
    <section id='subscribe' className="max-container flex max-lg:flex-col justify-between items-center gap-10">

      <h2 className="font-palanquin font-bold text-3xl max-w-sm max-lg:max-w-lg max-lg:text-center">Sign Up for <span className="text-coral-red">Updates </span>& Newletter</h2>
      <div className="flex lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
<input type="text" placeholder="subscibe@nike.com" className="input"/>
       <div className="flex max-sm:justify-end items-center max-sm:w-full">

        <Buttons label='Sign Up' />
       </div>
      </div>


    </section>
  )
}

export default Subscribe