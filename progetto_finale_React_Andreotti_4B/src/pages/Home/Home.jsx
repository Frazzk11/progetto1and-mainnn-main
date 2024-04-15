import React from 'react'
import './Home.css'
import Article from '../../common/Article/Article'
import articles from '../../article.json'

const Home = () => {
  const buttonClick = () => {
    console.log('Click !')
  }
  return (
    <div id= "home" className='wrapper'>
      <h1>Menù del nostro ristorante</h1>
      <div className='article-section'>
        {articles.map((item) =>{
          return (
            <Article key={item.image} data={item}/>
          )
        })}

        
      </div>
    </div>
  )
}

export default Home