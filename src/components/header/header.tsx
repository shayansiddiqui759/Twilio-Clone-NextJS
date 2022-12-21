import React from 'react'
import Image from 'next/image'
import { AddCircle } from 'iconsax-react'

const Header = () => {
  return (
    <div className="wrapper">
      <input type="text" placeholder="Search by Conversation Name" className='searchBar'></input>
      <div className="conversationName">Twilio Clone</div>
      <div className="addNew">
          
        <AddCircle size="45" color="#FF8A65"/>
      </div>
      <style jsx>{`

      .wrapper{
        border-bottom: 2px solid grey;
        display: flex;
      }
      
      .searchBar{
        padding: 3vh;
        width: 23vw;
        border: none;
        font-size: 1.2rem;
      }
      
      .conversationName{
        width: 70vw;
        display: flex;
        border-left: 2px solid grey;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: bold;
      }

      .addNew{
        width: 7vw;
        display: flex;
        align-items: center;
        justify-content: center;        
      }
      
      `}
      </style>
    </div>
  )
}

export default Header;