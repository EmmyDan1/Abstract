import Button from '../ui/Button'

const PricingBar = () => {
  return (
    <section className=" bg-[#dadbf1]">
      <div className="flex flex-col py-36 ">
        <h1 className="text-5xl font-inter text-center font-medium mb-12">Level up your work flow</h1>
        <Button className='bg-blue-900  w-2/3 mx-auto  py-3 text-white rounded-md hover:bg-blue-500 md:w-48' >
          View Pricing Plans
        </Button>
      </div>
    </section>
  );
};

export default PricingBar;
 