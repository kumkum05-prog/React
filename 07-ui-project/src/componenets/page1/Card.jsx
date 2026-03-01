
import Rightcardcontent from './Rightcardcontent'

const Card = (props) => {
  return (
    <div className="h-full w-65 shrink-0 overflow-hidden relative rounded-4xl ">

      <img className="h-full w-full object-cover rounded-4xl" src={props.img} alt='image' />

      <Rightcardcontent id={props.id} tag={props.tag}/>
    </div>
  )   
}

export default Card 
