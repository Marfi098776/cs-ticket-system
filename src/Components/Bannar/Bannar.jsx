import React from 'react';


const Bannar = () => {
    return (
        <div className='w-177 h-62.5 mx-auto mt-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* In Progress */}
                <div className="relative overflow-hidden rounded-xl p-10 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">

                    {/* background vector */}
                    <div className="absolute inset-0">
                        <img src="/src/assets/Group 2.png" alt="" />
                    </div>

                    {/* content */}
                    <div className="relative text-center">
                        <p className="text-lg font-medium">In-Progress</p>
                        <h2 className="text-5xl font-bold mt-3">0</h2>
                    </div>

                </div>


                {/* Resolved */}
                <div className="relative overflow-hidden rounded-xl p-10 text-white bg-linear-to-r from-[#54CF68] to-[#00827A]">

                    {/* background vector */}
                    <div className="absolute inset-0">
                        <img src="/src/assets/Group 2.png" alt="" />
                    </div>

                    {/* content */}
                    <div className="relative text-center">
                        <p className="text-lg font-medium">Resolved</p>
                        <h2 className="text-5xl font-bold mt-3">0</h2>
                    </div>

                </div>

            </div>
        </div>



    );
};

export default Bannar;