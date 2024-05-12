import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="md:px-4">
            <div className="container m-auto">
                <div className="box h-screen flex items-center justify-center flex-col relative bg-neutral-900 sm:rounded-md overflow-hidden ">
                    <div className="image absolute top-0 left-0 w-full h-full overflow-hidden z-10 opacity-30 "><Image src="/hero.jpg" width={1000} height={1000} className="object-cover w-full h-full" /></div>
                    <div className="heading text-xl text-white px-4 font-bold text-center md:text-2xl z-20">Be Their Forever Hero Adopt a Pet in Need</div>
                    <div className="para text-white px-4 mt-2 text-center lg:text-lg z-20 md:px-28 xl:px-60">Deep down, every animal longs for a loving home. Shelters and rescues are filled with furry (or feathery!) friends waiting for their chance to shower you with unconditional love</div>
                </div>
            </div>
        </div>
    )
}
