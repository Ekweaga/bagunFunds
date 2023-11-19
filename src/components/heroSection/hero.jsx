import React from 'react'
import Image from "next/image"

function HeroSection() {
  return (
        <>

        <div class="flex justify-center items-center bg-[#f3f8fe] p-[30px] mt-3">
            <div class="relative">
              <div class="flex justify-center items-center">
                <Image src="/Grafik (1).png" width={1000} height={100} alt="heroImage"/>
              </div>

              <div class="absolute top-[100px] left-[90px] right-[100px]">
                <h1 class="text-center text-3xl text-bold">Give Loves, <br/>Spread the Goodness</h1>
                <p class="text-center mt-4">The world crowdfunding platform that <br/> implements Open Data technology for more <br/> transparent transactions</p>
             
             <div class="flex justify-center items-center gap-3">
              <button>Get Started</button>
              <button>Learn More</button>
             </div>
              </div>
                
            </div>
        </div>
        
        </>
  )
}

export default HeroSection