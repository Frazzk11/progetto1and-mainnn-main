import React,{useState} from 'react'
import './Article.css'
import {FaRegStar,FaStar} from "react-icons/fa";

const Article = ({data,click}) => {

  return (
    <article>
      <img src={data.image} alt={data.title} className='article-img'/>
      <div className='article header'>
        <p>{data.date}</p>
        <p>------------------------------------------------</p>
      </div>

        <h2>{data.title}</h2>
        <p>{data.price}</p>
       <h4>{data.intro}</h4>
        <button onClick={click}>Acquista</button>
       
    </article>
  )
}

export default Article