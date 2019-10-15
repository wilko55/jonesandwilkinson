<template>
  <div>
    <nuxt />

    <div class="footer">
      <div>
        <h4>Jones&nbsp;&amp;&nbsp;Wilkinson&nbsp;LTD</h4>
        <ul class="address">
          <li>Ezekiel Lane</li>
          <li>Willenhall</li>
          <li>West Midlands</li>
          <li>WV12 5QU</li>
        </ul>
      </div>
      <div>
        <h4>Policies</h4>
        <ul>
          <li><a href="#">Data Protection Policy</a></li>
          <li><a href="#">Privacy Notice</a></li>
          <li><a href="#">Anti slavery and human trafficking policy</a></li>
          <li><a href="#">Terms and conditions</a></li>
        </ul>
      </div>
      <div>
        <h4>VAT no. 100235836</h4>
      </div>
    </div>
  </div>
</template>

<style>

html, body {
  margin: 0;
  padding: 0;
  font-size: 62.5% !important;
  font-family: 'Open Sans', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}

h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 2.2rem;
}
p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer {
  background-color: #4e5d78;
  padding: 10px;
  color: white;
  display: flex;
  font-size: 1.1rem;
  justify-content: space-around;
}

.footer .address li {
  list-style: none;
}
.footer h4 {
  text-align: center;
}
.footer a {
  color: white;
  text-decoration: none;
}

@media (min-width: 400px) {
  .footer {
    font-size: 1.1rem;
  }
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.6rem;
  }

  .footer {
    padding: 20px;
    font-size: 1.4rem;
    line-height: 2rem;
    justify-content: space-around;
  }
}

</style>
