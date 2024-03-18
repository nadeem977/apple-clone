import React from 'react'
import { footerLinks } from '../consstants'
import img from "../../public/assets/images/dev.png"
const Footer = () => {
    return (
        <footer className='py-5 ms:px-10 px-5'>
            <div className='screen-max-width'>
                <div>
                    <p className='font-semibold text-gray text-xs'>More ways to shop: {' '}
                    <span className='underline text-blue '>Find an Apple Store </span>
                    {' '} or {' '}
                    <span className='underline text-blue '>other retailer</span>
                    {' '}  near you.
                    </p>
                    <p className='font-semibold text-gray 
                    text-xs flex items-center gap-2'>Or call +92 0304-4548046 <a className='text-red-600 underline' href="https://www.linkedin.com/in/nadeem-javeid/">Developed by Nadeem Click here to view Linkden profile</a></p>
                </div>
                <div className='bg-neutral-700 my-5 h-[1px] w-full'/>
                <div className='flex md:flex-row flex-col md:items-center justify-between'>
                     <p className='font-semibold text-gray text-xs' >Copy Yes it is 😁  @ 2024 Apple Inc. All rights reserved.</p>
                     <div className="flex">
                        {footerLinks.map((link,i)=>(
                            <p key={link} className='font-semibold text-gray text-xs'>
                                {link}{" "}
                                {i !== footerLinks.length - 1 && (<span className='mx-2'>|</span>)}
                            </p>
                        ))}
                     </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
