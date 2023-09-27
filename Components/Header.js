import React from 'react'
import Link from "next/link"

const Header = (props) => {
  return (
    <div className = 'h-12 bg-blue-300 text-white flex item-center justify-between p-3'>
        <h2>Logo</h2>
        <div className = 'flex gap-6'>
            <Link href = "/About">About</Link>
            <Link href = "/Courses">Courses</Link>
            <Link href = "/Product">Product</Link>
        </div>
    </div>
  )
}

export default Header