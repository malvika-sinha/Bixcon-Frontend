import Header from "../components/header";
import ServicesBox from "../components/servicesbox";
import StaticButton from "../components/staticButton";
import BodyText from "../components/bodytext";

export default function Services() {
  return (
    <div className="bg-white relative top-[7%] justify-center gap-20 w-screen h-screen pl-40">
    <div className="overflow-hidden relative">
  <div className="text-black text-5xl font-bold leading-tight">
    <div className="inline-block transform-gpu text-[73px] text-[#d10888] animate-fadeIn delay-[200ms]">Our</div>
    <div className="inline-block ml-2 transform-gpu animate-fadeIn delay-[400ms]">Services</div>
  </div>
</div>

    <div className="flex flex-row gap-6 h-2/4 pr-40">
      {/* Box 1 */}
      <div className="relative w-[98%] top-[-10px] left-[6%]  shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[75px] h-[142px] animated-div">
        <ServicesBox
          title="Financial Management"
          subtitle="Cash Flow Management"
          width="w-3/5"
        >
          <StaticButton
            text="Budget"
            textColor="text-black"
            borderColor="border-black"
          />
          <StaticButton
            text="Cost Control"
            textColor="text-white"
            bgColor="bg-black"
          />
          <StaticButton
            text="Payments"
            textColor="text-black"
            bgColor="bg-[#db1f78]"
          />
          <StaticButton
            text="Invoicing"
            textColor="text-black"
            borderColor="border-black"
          />
          <StaticButton
            text="Cash Flow Management"
            textColor="text-black"
            bgColor="bg-[#db1f78]"
          />
        </ServicesBox>
      </div>
      {/* Box 2 */}
      <div className="relative w-[82%] top-[-10px] left-[-2%]  shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[75px] h-[142px] animated-div">
        <ServicesBox
          title="Supply Chain Management"
          subtitle="Automated Reordering"
          width="w-3/5"
        >
          <StaticButton
            text="Budget"
            textColor="text-white"
            bgColor="bg-[#db1f78]"
          />
          <StaticButton
            text="Cost Control"
            textColor="text-white"
            bgColor="bg-black"
          />
          <StaticButton
            text="Payments"
            textColor="text-black"
            borderColor="border-black"
          />
        </ServicesBox>
      </div>
    </div>
    <div className="relative top-[25%] space-y-4">
  <BodyText
    text="We provide the best solution for your dream, still adapt your budget"
    color="text-black"
    className="animate-moveLeftRight"
  />
  <BodyText
    text="and match with requirements about the quality of the project"
    color="text-black"
    className="animate-moveLeftRight delay-500"
  />
</div>

  </div>
  
  );
}
