<template>
  <div>
    <div class="hero-image">
      <div class="hero-text">
        <h1>Zinc Pressure Diecasting</h1>
        <h2>from concept to completion</h2>
      </div>
    </div>
    <section>
      <h2>Our services</h2>
      <div class="services-wrapper">
        <a href="service" class="service-summary">
          <div class="icon">
            <i class="industrial-061-machine-press" />
          </div>
          <div class="service-title">
            <h3>Component casting</h3>
          </div>
          <div class="summary">
            <p>We will work with you to design your component to take advantage of the many benefits of zinc pressure diecasting.</p>
          </div>
          <div class="read-more">Read more</div>
        </a>

        <a href="service" class="service-summary">
          <div class="icon">
            <i class="marketing-024-laptop-1" />
          </div>
          <div class="service-title">
            <h3>Tool design</h3>
          </div>
          <div class="summary">
            <p>Tooling is designed in house using Solidworks CAD.</p>
          </div>
          <div class="read-more">Read more</div>
        </a>

        <a href="service" class="service-summary">
          <div class="icon">
            <i class="industrial-061-factory-2" />
          </div>
          <div class="service-title">
            <h3>In house tool manufacture</h3>
          </div>
          <div class="summary">
            <p>Complete with 3D CAD/CAM we produce all impression work in our own dedicated toolroom.</p>
          </div>
          <div class="read-more">Read more</div>
        </a>

        <a href="service" class="service-summary">
          <div class="icon">
            <i class="industrial-061-machine-press-2" />
          </div>
          <div class="service-title">
            <h3>Diecast machining</h3>
          </div>
          <div class="summary">
            <p>Using the latest diecasting technology we are able to reproduce quality castings in batches from 1000 to 5,000,000.</p>
          </div>
          <div class="read-more">Read more</div>
        </a>

        <a href="service" class="service-summary">
          <div class="icon">
            <i class="industrial-061-industrial-robot-15" />
          </div>
          <div class="service-title">
            <h3>Secondary operations</h3>
          </div>
          <div class="summary">
            <p>Tapping, drilling, CNC machining, barrelling and auto-shot blasting</p>
          </div>
          <div class="read-more">Read more</div>
        </a>

        <a href="service" class="service-summary">
          <div class="icon">
            <i class="ti-package" />
          </div>
          <div class="service-title">
            <h3>Assembly</h3>
          </div>
          <div class="summary">
            <p>Assembly of finished parts including powder coat, polishing and plating - all sourced locally</p>
          </div>
          <div class="read-more">Read more</div>
        </a>
      </div>
    </section>
    <section class="about">
      <div>
        <h2>About Jones & Wilkinson</h2>
        <div class="about-wrapper">
          <div class="about-cols">
            <p>
              Jones & Wilkinson Ltd, celebrating 50 years of engineering excellence, continue to have the knowledge, experience and facilities to help customers plan, design, and produce top quality tools and castings.
            </p>
            <p>
              We currently operate from three units in Ezekiel lane, concentrating on Die Casting, Tool making, CNC machining and Assembly. The move into the third of these units, in late 2014, helped facilitate new processes to enhance current quality procedures.
            </p>
          </div>
          <div class="about-cols img">
            <img src="https://via.placeholder.com/500x300.png?text=map or photo">
            <p class="caption">
              Caption
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.about-wrapper {
  display: flex;
  flex-direction: column;

}
.about-cols {
  /* flex-basis:50%; */
  padding: 20px;
}
.about-cols p {
  margin-bottom: 10px;
}
.about-cols.img {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.about-cols.img img {
  max-width: 300px;
}
section {
  min-height: auto;
}
.hero-image {
  background-image: linear-gradient(
    rgba(26, 68, 140, 0.811),
    rgba(26, 68, 140, 0.811)

  ), url(~assets/img/cadcam.png);
  height: 30vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hero-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: white;
}

.hero-image h2 {
  font-size: 2rem;
  font-style: italic;
  margin: 0;
}
.hero-image h1 {
  font-size: 2.4rem;
  margin-top: 0;
}
.icon i {
  font-size: 3rem;
}

.icon {
  align-self: center;
}

.services-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.service-summary {
  flex: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px 0px 0px;
  cursor: pointer;
  border: solid 1px #d2d2d2;
  margin: 5px;
  border-radius: 15px;
}

.service-summary:hover {
  background-color: rgba(77, 115, 189, 0.19);
  border-radius: 15px;
}
.services-wrapper a {
    text-decoration: none;
    color: #000000;
}
.service-title {
  align-self: center;
  font-size: 1.1rem;
  min-height: 30px;
}
.service-title h3 {
  text-align: center;
}
.summary {
  padding: 0 20px;
  min-height: 50px;
}
.read-more {
  align-self: center;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: underline;
  margin: 10px 0;
}
.service-summary:hover .read-more {
  color: #221d1d;
}

.about {
  background: linear-gradient( rgba(255, 255, 255, 0.79), rgba(93, 117, 164, 0.67) ), url("~assets/img/plans.png");
  background-size: cover;
  margin-bottom: 70px;
  padding-bottom: 50px;
}
.caption {
  font-weight: 600;
}

@media (min-width: 480px) {
  .hero-image {
    height: 90vh;
  }
  .hero-image h2 {
    font-size: 3.4rem;
    margin-top: 20px;
  }
  .hero-image h1 {
    font-size: 4.4rem;
  }
  .icon i {
    font-size: 5rem;
  }
  .service-summary {
    flex: 33%;
    padding: 20px 0px;
    border: none;
    margin: 0;
  }
  .service-summary:hover {
    background-color: rgba(77, 115, 189, 0.19);
    border-radius: 15px;
  }
  .service-title {
    font-size: 2.2rem;
    min-height: 100px;
  }
  .summary {
    min-height: 100px;
  }
  .read-more {
    align-self: center;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: underline;
    color: #ffffff;
  }
  .service-summary:hover .read-more {
    display: block;
    color: #000000;
  }
  .about {
    margin-bottom: 0px;
  }
  .about-wrapper {
    flex-direction: row;
    padding: 30px 0px;
  }
  .about-cols {
    flex-basis:50%;
    padding: 20px;
  }
  .about-cols p {
    margin-bottom: 10px;
  }
  .about-cols.img img {
    max-width: 400px;
  }
}
</style>
