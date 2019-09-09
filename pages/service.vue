<template>
  <div>
    <div class="hero-image">
      <div class="hero-text">
        <h1>Diecast machining</h1>
      </div>
    </div>
    <section>
      <div class="section-wrapper">
        <div class="section-text">
          <p><strong>Using the latest diecasting technology</strong> we are able to reproduce quality castings in batches from 1000 to 5,000,000.</p>
          <p>
            Our zinc diecasting department runs five Frech Diecasting Machines ranging through from 20t, 50t, 80t and 125t locking force.
            This enables a spread across the component range from 6g casting weight up to 600g casting weight.
          </p>
          <p>
            Some 30% of our zinc diecasting components are destined for decorative plated applications and require a suitable cast quality finish.
            This is achieved by a combination of the die setters experience, the controllable functions of the frech machines and the die design.
          </p>
          <p>
            Many of the dies Jones and Wilkinson run are based on the unit die philosophy which allows lower cost dies to be run on a common bolster.
            This facilitates quicker changeovers and thus smaller batch runs, nominally 500/1000 shot runs at no high premium casting rate.
          </p>
        </div>
        <div class="section-img-wrapper">
          <img src="~assets/img/castings.png">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.hero-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: white;
}
.hero-image {
  background-image: linear-gradient(
    rgba(26, 68, 140, 0.811),
    rgba(26, 68, 140, 0.811)

  ), url(~assets/img/component-hero.png);
  height: 12vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.section-wrapper {
  display: flex;
  flex-direction: column;
}
.section-wrapper div {
  flex-basis: 50%;
  margin-bottom: 20px;
}
.section-img-wrapper img {
  height: 150px;
  box-shadow: 2px 2px 5px #929292;
  border-radius: 5px;
}
.section-text {
  padding: 0 20px;
}
.section-img-wrapper {
  display: flex;
  justify-content: center;
}

@media (min-width: 480px) {
  .hero-image {
    height: 25vh;
  }
  .section-wrapper {
    flex-direction: row;
  }
  .section-wrapper div {
    margin-bottom: 0px;
  }
  .section-img-wrapper img {
    height: 250px;
  }
}
</style>
