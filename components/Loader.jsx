import Image from 'next/image';
import React from 'react'

const Loader = () => {
    return (
        <div className="h-screen bg-black">
            <div className="pt-40 flex flex-col items-center space-y-4">
                <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
                    <Image
                        src="https://rb.gy/y9mwtb"
                        className="animate-pulse"
                        width={1000}
                        height={1000}
                        alt=''
                    />
                </span>
                <h1>Loading...</h1>
            </div>
        </div>
    );

}

export default Loader