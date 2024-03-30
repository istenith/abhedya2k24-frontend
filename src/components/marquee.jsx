import React from 'react'
import FastMarquee from 'react-fast-marquee';


const Marquee = () => {
  return (
    <FastMarquee speed={50} direction="left" className="bg-gray-800 py-2">
      <div className='text-md'>
        <p>&nbsp;10 Teams, 4 prizes, minimum <span className='underline text-blue-300'>15K prize per event</span> - jeetne ki maths khud hi laga lo - <span className="font-bold text-blue-400">&nbsp;<a href='prody.istenith.com' target='_blank'>Prody24&apos;</a></span>&nbsp;|&nbsp;
        Minimal Effort, High reward  - competitions for all branches.&nbsp; <a className="underline text-green-500 font-bold" target='_blank' href="http://prody.istenith.com/events">Explore events&rarr;</a></p>
      </div>       
      
    </FastMarquee>
  );

}

export default Marquee
