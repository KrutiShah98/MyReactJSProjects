import React from 'react'

export default function Slider() {
  return (
    <div><div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={"https://media.istockphoto.com/id/495417556/photo/monkey-raging-and-fierce-on-tree.jpg?s=1024x1024&w=is&k=20&c=nkCUsyxxQH6K8yFDRXX3c5Suu-cbVfQa7KE2QSHQL0c="} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={"https://cdn.pixabay.com/photo/2023/11/05/12/57/squirrel-8367079_1280.jpg"} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={"https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
