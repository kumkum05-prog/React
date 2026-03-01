import Nav from './nav'
import Center from'./Center'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Nav />
      <Center users={props.users}/>
    </div>
  )
}

export default Section1
