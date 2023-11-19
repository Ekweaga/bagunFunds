import Image from 'next/image'
import Link from "next/link"
import Navbar from "../components/navbar/navbar"
import HeroSection from "../components/heroSection/hero"
import SearchSection from "../components/searchSection/search"
import Donation from "../components/donationSchemes/donation"

export default function Home() {
  return (
   
      <>
      <Navbar/>
      <HeroSection/>
      <SearchSection/>
      <Donation/>

      

      </>
  )
}
