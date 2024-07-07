import React from "react"
export default function ImageCard({image, openModal}){
    return(
<div>
<img 
src={image.urls.thumb}
alt={image.description} 
onClick={()=> openModal(image.urls.full)}/>
</div>
    )
}





