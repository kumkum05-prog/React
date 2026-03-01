import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">

      <div className="top">
        <img src={props.logo} alt={props.company} />
        <button>
          save <Bookmark size={12} />
        </button>
      </div>

      <div className="mid">
        <h3>{props.company} <span>{props.date}</span> </h3>
        <h2>Senior UI/UX Designer</h2>
        <div className="box">
          <h4 id='part'>{props.tag1}</h4>
          <h4 id='part'>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>

    </div>
  )
}

export default Card
