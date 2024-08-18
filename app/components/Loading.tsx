'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const Loading = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (

    <>
      {loading ? <div className="preloader bg-white flex flex-col justify-center items-center">
        <Image src="/logo.jpg" width={150} height={100} alt="logo" className="animate-pulse" />
        <span className="font-storyFont animate-pulse">LOADING...</span>
      </div> : ''}


    </>
  )
}

export default Loading