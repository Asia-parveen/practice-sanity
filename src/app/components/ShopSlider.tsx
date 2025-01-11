import React from 'react';

const ShopSlider = () => {
  return (
    <div className="flex flex-wrap justify-evenly bg-[#FAFAFA] w-full lg:w-[1440px] py-[90px] lg:py-[120px] lg:h-[200px] mt-[40px] lg:mb-[40px] px-4 sm:px-0">
      {/* Column 1 */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto gap-2 text-center sm:text-left">
        <h2 className="font-bold">Free Delivery</h2>
        <p className="font-semibold opacity-[0.6]">business dolor sit amet.</p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto gap-2 text-center sm:text-left">
        <h2 className="font-bold">90 Days Returns</h2>
        <p className="font-semibold opacity-[0.6]">Filter tables dolor sit amet.</p>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto gap-2 text-center sm:text-left">
        <h2 className="font-bold">Secure Payment</h2>
        <p className="font-semibold opacity-[0.6]">lexury dolor sit amet.</p>
      </div>
    </div>
  );
};

export default ShopSlider;