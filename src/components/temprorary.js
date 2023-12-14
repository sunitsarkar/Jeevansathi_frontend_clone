import {useNavigate} from 'react-router-dom'

export default function abc(){

    const navigate=useNavigate()
    

    return <div>
        <button onClick={()=>{navigate('/route')}}></button>
    </div>
}