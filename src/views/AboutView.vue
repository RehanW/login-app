<template>
  <div class="about">
    <div class="container mb-5">
      <h1>Lorem ipsum dolor sit amet?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus magnam libero quisquam ipsa, facilis, dolores numquam nemo blanditiis nesciunt corporis consequatur! Odio, fugiat maxime voluptates rerum architecto laborum numquam?</p>
    </div>
    <div class="container">
      <div class="row justify-center">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://picsum.photos/id/237/5000/5000" class="d-block w-100 custom-carousel-img" alt="...">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://picsum.photos/id/231/5000/5000" class="d-block w-100 custom-carousel-img" alt="...">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://picsum.photos/id/337/5000/5000" class="d-block w-100 custom-carousel-img" alt="...">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-carousel-img {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
</style>