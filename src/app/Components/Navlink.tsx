import Link from 'next/link'
import React from 'react'

function Navlink({href,title}:any) {
  return (
    <Link href={`${href}`} className=' text-[#ADB7BE] '>
     {title}
    </Link>
  )
}

export default Navlink