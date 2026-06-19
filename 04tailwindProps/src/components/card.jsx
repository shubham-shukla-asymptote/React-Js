import photo from '../assets/hero.png'
import REACT from 'react'

function Card(props){
    // console.log(props) // this is in the form of Object name
 
// "Lionel Messi"
// proffesion:"footballer"
    return(
        <div className='  flex justify-center items-center flex-col p-6 h-86 w-80 border-b border-r border-gray-200 m-4 shadow-[0px_8px_12px_-1px_gray] rounded-xl  hover:scale-105 transition'>
        <img src="https://i1.sndcdn.com/artworks-000360241554-6br2se-t1080x1080.jpg" 
        alt="profile picture" 
        className='size-40 rounded-full'/>
        <h1 className='text-2xl font-bold m-3'>Lionel Messi</h1>
        <b>Argentina vs Algeria-(3:0)</b>
        <b>Hattrick By Messi </b>
        <b>16' 60' 76' </b>
        </div>
    )
}
export default Card