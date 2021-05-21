import React from 'react'

const GifList = props => {
     return(
         <ul>
             {props.gif.map((gif, idx) =>
             <li key={idx}>
                 <img src={gif.images.original.url} alt={gif.title} />
             </li>
             )}
         </ul>
     )
}

export default GifList