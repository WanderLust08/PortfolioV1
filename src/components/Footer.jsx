import React from 'react'
import { FaGithubSquare,FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center' id="footer">
        <p className="my-5 text-gray-500">Mumbai <br/>Maharastra</p>
        <div className="inline-flex text-gray-500 gap-4 text-3xl">
            <FaGithubSquare/>
            <FaLinkedin />
        </div>

    </div>
  )
}

export default Footer
