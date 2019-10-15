<template>
  <div>
    <div class="video-outer">
      <div class="video-wrapper">
        <div class="hero-text">
          <div class="title-wrapper">
            <h1><a href="/">Jones & Wilkinson Ltd</a></h1>
          </div>
          <div class="contact-wrapper">
            <div class="contact-details">
              <a class="contact-label" href="/contact">Contact us</a>
              <a href="mailto:sales@jonesandwilkinson.co.uk">sales@jonesandwilkinson.co.uk</a>
              <a href="tel:+44 1922 475444">+44 1922 475444</a>
            </div>
          </div>
          <h2>Zinc Diecasting</h2>
          <h2 class="italic">From concept to completion</h2>
          <div class="mobile-contact-wrapper">
            <div class="contact-details">
              <a class="contact-label" href="/contact">Contact us</a>
              <a href="mailto:sales@jonesandwilkinson.co.uk">sales@jonesandwilkinson.co.uk</a>
              <a href="tel:+44 1922 475444">+44 1922 475444</a>
            </div>
          </div>
        </div>
        <video src="~assets/img/robot.mp4" muted autoplay loop playsinline></video>
      </div>
    </div>
    <section>
      <div class="services-wrapper">
        <a href="#" class="floating-card-wrapper">
          <div class="floating-card-contents">
            <div id="diecasting-service" class="card-image">
            </div>
            <div class="card-text-wrapper">
              <h3>Die Casting</h3>
              <p>
                Using the latest diecasting technology we are able to reproduce quality castings in batches from 1000 to 5,000,000
              </p>
            </div>
          </div>
        </a>

        <a href="#" class="floating-card-wrapper">
          <div class="floating-card-contents">
            <div id="toolmaking-service" class="card-image">
            </div>
            <div class="card-text-wrapper">
              <h3>Toolmaking</h3>
              <p>
                Complete with 3D CAD/CAM we produce all impression work in our own dedicated toolroom
              </p>
            </div>
          </div>
        </a>

        <a href="#" class="floating-card-wrapper">
          <div class="floating-card-contents">
            <div id="secondary-service" class="card-image">
            </div>
            <div class="card-text-wrapper">
              <h3>Secondary operations</h3>
              <p>
                Tapping, drilling, CNC machining, barrelling and auto-shot blasting
              </p>
            </div>
          </div>
        </a>

        <a href="#" class="floating-card-wrapper">
          <div class="floating-card-contents">
            <div id="assembly-service" class="card-image">
            </div>
            <div class="card-text-wrapper">
              <h3>Assembly</h3>
              <p>
                Assembly of finished parts including powder coat, polishing and plating - all sourced locally
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>

    <section class="about-section">
      <div class="section-inner">
        <h2>Who we are</h2>
        <div class="flex-wrapper">
          <div class="about-item">
            <p>Jones & Wilkinson Ltd, celebrating 50 years of engineering excellence, continue to have the knowledge, experience and facilities to help customers plan, design, and produce top quality tools and castings.</p>
            <p>We currently operate from three units in Ezekiel lane, concentrating on Die Casting, Tool making, CNC machining and Assembly. The move into the third of these units, in late 2014, helped facilitate new processes to enhance current quality procedures.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
          <div class="about-item image">
            <img style="max-height: 300px;" src="https://via.placeholder.com/300x200.png?text=map or photo">
          </div>
        </div>
      </div>
    </section>

    <section class="news-section">
      <h2>Latest news</h2>
      <div class="news-wrapper">
        <div class="flex-wrapper">
          <div class="news-item">
            <div class="news-img-wrapper">
              <div class="news-date">
                <span class="date-day">20</span>
                <span class="date-month">July</span>
              </div>
              <img src="~assets/img/zinc.jpg">
            </div>
            <div class="news-item-header">
              <h3>Cross dowell enters production</h3>
            </div>
            <p>We are pleased to introduce the cross dowell. This is a great new type of die cast nail.</p>
            <p>This was produced in partnership with...</p>
            <div class="read-more">
              <span>Read more</span>
            </div>
          </div>

          <div class="news-item">
            <div class="news-img-wrapper">
              <div class="news-date">
                <span class="date-day">15</span>
                <span class="date-month">July</span>
              </div>
              <img src="~assets/img/caddrawing.png">
            </div>
            <div class="news-item-header">
              <h3>Lorem ipsum</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur, eiusmod tempor incididunt ut labore et.</p>
            <p> Ut enim ad minim veniam...</p>
            <div class="read-more">
              <span>Read more</span>
            </div>
          </div>

          <div class="news-item">
            <div class="news-img-wrapper">
              <div class="news-date">
                <span class="date-day">08</span>
                <span class="date-month">July</span>
              </div>
              <img src="~assets/img/razor.png">
            </div>
            <div class="news-item-header">
              <h3>New razor released</h3>
            </div>
            <p>We are please to announce a new partnership with Occams Razor.</p>
            <p>This ia a fantasic opportunity to demonstrate...</p>
            <div class="read-more">
              <span>Read more</span>
            </div>
          </div>
          <div class="view-news">
            <h2>View more</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Jones & Wilkinson LTD - diecasters and toolmakers'
    }
  }
}
</script>

<style>
  video {
    width: 100vw;
  }
  .video-wrapper {
    position: absolute;
    overflow: hidden;
    height: auto;
  }
  .video-wrapper:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(26, 68, 140, 0.811);
  }
  .video-outer {
    width: 100%;
    display: block;
    text-align: center;
    position: relative;
    overflow: hidden;
    /* min-height: 250px; */
    min-height: 55vw;
  }

  .title-wrapper {
    position: absolute;
    top: 10px;
    left: 20px;
  }

  .title-wrapper h1 {
    font-size: 2.5rem;
  }

  .title-wrapper h1 a {
    color: white;
    text-decoration: none;
  }

  .contact-wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    display: none;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 9999;
  }

  .contact-details a {
    margin: 0;
    font-size: 1.6rem;
    text-decoration: none;
    display: block;
    color: #ffffff;
    margin-bottom: 5px;
  }

  a.contact-label,
  .contact-details a:hover {
    text-decoration: underline;
  }

  .mobile-contact-wrapper .contact-details {
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
  }

  .mobile-contact-wrapper .contact-details a {
    font-size: 1.2rem;
  }

  .hero-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    color: white;
    position: absolute;
    width: 100vw;
  }

  .hero-text h2 {
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0;
  }

  .hero-text h2.italic {
    font-size: 1.6rem;
    font-style: italic;
    margin: 0;
  }

  section {
    padding: 0 10px;
    min-height: 30vh;
  }

  section h3 {
    font-size: 1.6rem;
  }

  .services-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .services-wrapper a {
    text-decoration: none;
    color: #000000;
  }

  .service-wrapper {
    align-self: center;
    display: flex;
    width: 250px;
    height: 200px;
    flex-direction: column;
    background-size: cover;
    border-radius: 5px;
  }

  #diecasting-service {
    background-image: url(~assets/img/castings.png);
  }

  #toolmaking-service {
    background-image: url(~assets/img/machine-2.png);
  }

  #secondary-service {
    background-image: url(~assets/img/machine-1.png);
  }

  #assembly-service {
    background-image: url(~assets/img/parts-arranged.png);
  }

  #contact-service {
    background-image: url(~assets/img/castings.png);
  }

  #news-service {
    background-image: url(~assets/img/castings.png);
  }

  #policies-service {
    background-image: url(~assets/img/castings.png);
  }

  .hero-text .italic {
    font-style: italic;
  }

  .floating-card-contents {
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
  }

  .card-image {
    background-size: cover;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .floating-card-wrapper {
    z-index: 999;
    flex: 50%;
    justify-content: center;
    display: flex;
  }

  .floating-card-wrapper:hover .card-image {
    background-color: #ffffff58 !important;
    background-blend-mode: overlay;
  }

  .floating-card-wrapper:hover .read-more {
    display: block;
  }

  .card-text-wrapper {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-text-wrapper h3 {
    margin: 10px 0;
  }

  section.about-section {
    background-color: #eaeaea;
    margin: 0;
  }
  section.about-section h2,
  section.news-section h2 {
    font-weight: 400;
    margin: 10px 0;
  }

  section.news-section h2 {
    margin: 10px 0 20px 10px;
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .about-item {
    flex-basis: 50%;
    margin-bottom: 20px;
  }

  .news-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .news-wrapper .flex-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .news-item {
    flex-basis: 45%;
    padding: 5px;
    box-shadow: 1px 2px 5px #cacaca;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .news-item:hover {
    box-shadow: 1px 2px 3px #000000;
  }

  .news-item .read-more {
    height: 25px;
    display: flex;
    justify-content: center;
  }

  .news-item .read-more span {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .news-img-wrapper {
    display: flex;
    justify-content: center;
    /* max-height:100px; */
    position: relative;
  }

  .news-img-wrapper img {
    max-height: 60px;
    max-width: 70%;
    border-radius: 5px;
    margin: 35px 0 10px 0;
  }

  .news-item-header h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .news-date {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  .date-day {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .date-month {
    font-size: 1.1rem;
  }

  .view-news {
    display: flex;
    flex-basis: 45%;
    margin-bottom: 20px;
    justify-content: center;
  }

  .news-section .view-news h2 {
    font-size: 1.8rem;
    font-weight: 700;
    align-self: center;
    cursor: pointer;
    margin: 0 10px;
  }

  .news-section .view-news h2:hover {
    text-decoration: underline;
  }
  .section-inner {
    padding: 20px 10px;
  }
  .about-item.image {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  @media (min-width: 400px) {
    .title-wrapper h1 {
      margin-top: 10px;
      font-size: 2.5rem;
    }

    .mobile-contact-wrapper .contact-details a {
      font-size: 1.4rem;
    }

    .card-image {
      height: 160px;
    }

    .services-wrapper {
      margin: 20px 0;
    }
  }

  @media (min-width: 658px) {
    .title-wrapper h1 {
      font-size: 4.5rem;
    }

    .hero-text h2 {
      font-size: 3.5rem;
      font-weight: 400;
      margin: 0;
    }

    .hero-text h2.italic {
      font-size: 2.6rem;
      font-style: italic;
      margin: 0;
    }

    .card-image {
      height: 180px;
    }

    .news-item {
      flex-basis: 28%;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.4rem;
    }

    .contact-wrapper {
      display: flex;
    }

    .contact-details a:nth-child(1) {
      text-align: center;
      width: 100%;
    }

    .mobile-contact-wrapper {
      display: none;
    }

    .services-wrapper {
      margin: -120px 0 20px 0;
    }

    .video-outer {
      min-height: 500px;
    }

    .floating-card-wrapper {
      flex: 25%;
    }

    .flex-wrapper {
      flex-direction: row;
    }

    .news-wrapper {
      flex-direction: row;
    }
  }

  @media (min-width: 900px) {
    .video-wrapper {
      height: 500px;
    }

    section {
      padding: 40px;
      margin-top: 20px;
      min-height: 30vh;
    }

    section.services {
      padding-bottom: 0;
    }

    section h3 {
      font-size: 1.8rem;
    }

    .floating-card-contents {
      height: 330px;
    }

    .card-image {
      height: 180px;
    }

    .card-text-wrapper h3 {
      margin: 20px 0 0;
    }

    .news-item {
      max-width: 30vw;
    }

    .view-news {
      flex-basis: 80px;
    }

    .news-img-wrapper img {
      max-height: 100px;
      margin: 15px 0 10px 0;
    }
  }

</style>
