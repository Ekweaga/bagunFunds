import React from 'react'

function Navbar() {
  return (
    <>
    <div class="p-3">
        <div class="flex justify-around">
          <div><h1>BagunFunds</h1></div>

          <div class="navMenu">
            <ul class="flex justify-around gap-4">
              <li>Home</li>
              <li>Charity</li>
              <li>Event</li>
            </ul>
          </div>


          <div>
            <ul><li>Open Data</li></ul>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
