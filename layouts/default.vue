<template>
  <div>
    <div class="header">
      <div class="title">
        <h1><a href="/">Jones and Wilkinson LTD</a></h1>
      </div>
      <div class="contact-wrapper">
        <div class="contact-details">
          <a href="mailto:sales@jonesandwilkinson.co.uk">sales@jonesandwilkinson.co.uk</a>
          <a href="tel:+44 1922 475444">+44 1922 475444</a>
        </div>
        <button @click="modalOpen('quote-modal')">
          Get a quote
        </button>
      </div>
    </div>

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
    <div id="quote-modal">
      <div class="modal-content">
        <h2>Please provide some details and we'll get in touch</h2>
        <div class="modal-form">
          <label for="name-field">
            Name
          </label>
          <input id="name-field" type="text">

          <label for="number-field">
            Contact number
          </label>
          <input id="number-field" type="text">

          <label for="email-field">
            Email address
          </label>
          <input id="email-field" type="email">

          <label for="info-field">
            Quote information
          </label>
          <textarea id="info-field" />

          <div class="button-wrapper">
            <button @click="modalClose('quote-modal')">
              Submit quote
            </button>
            <div class="cancel-btn" @click="modalClose('quote-modal')">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalOpen: (modalId) => {
      document.getElementById(modalId).classList.add('open')
      document.querySelector('body').classList.add('modal-open')
    },
    modalClose: (modalId) => {
      document.getElementById(modalId).classList.remove('open')
      document.querySelector('body').classList.remove('modal-open')
    }
  }
}

</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 62.5% !important;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
  font-size: 1.8rem;
}
p {
  font-size: 0.9rem;
  margin-bottom: 20px;
}

#quote-modal {
  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #3c61a0;
  justify-content: center;
}

#quote-modal.open {
  display: flex;
  flex-direction: column;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.modal-content .label {
  min-width: 200px;
}

.modal-content h2 {
  max-width: 80vw;
  margin-top: 20px;
}

.modal-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
}

.modal-form label {
  width: 100%;
  margin-top: 20px;
  font-size: 1.6rem;
  padding-bottom: 5px;
}

.modal-form input,
.modal-form textarea {
  width: 100%;
  padding: 3px;
  font-size: 1.4rem;
}

.modal-form textarea {
  min-height: 30vh;
}

.modal-form .button-wrapper {
  margin-top: 40px;
  display: flex;
}
.modal-form button {
  background-color: #ffffff;
  padding: 10px 20px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
}

.modal-form .cancel-btn {
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 10px 20px;
  margin-left: 20px;
  cursor: pointer;
}

.modal-open {
  overflow-y: hidden;
}

.header {
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  align-content: space-between;
  height: 80px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
}
.title h1 {
  margin: 0;
}
.title a {
  margin: 0 30px;
  display: flex;
  align-items: center;
  color: #1d2e7e;
  text-decoration: none;
}
.contact-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.contact-wrapper button {
  padding: 7px 16px;
  background-color: #3c61a0;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
}

.footer {
  background-color: #4e5d78;
  padding: 20px 10px;
  color: white;
  display: flex;
  font-size: 1rem;
  justify-content: space-around;
}
.footer .address li {
  list-style: none;
}
.footer .address {
  padding-left: 10px;
}
.footer h4 {
  text-align: center;
  margin-bottom: 10px;
}
.footer a {
  color: white;
  text-decoration: none;
}
.contact-details a {
  margin: 0;
  font-size: 0.9rem;
  text-decoration: none;
  display: block;
  color: #3a3a71;
}
.contact-details a:nth-child(1) {
  margin-bottom: 5px;
}
section {
  padding-top: 30px;
  min-height: 60vh;
}
section h2 {
  text-align: center;
}

@media (min-width: 488px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3.4rem;
  }
  p {
    font-size: 1.6rem;
  }

  .modal-form input {
    max-width: 40vw;
    align-self: flex-start;
  }

  .modal-form textarea,
  .modal-form input {
    font-size: 1.6rem;
    padding: 5px;
  }

  .header {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-content: space-between;
    height: 80px;
  }
  .title {
    display: flex;
    align-items: center;
  }
  .title h1 {
    margin: 0;
  }
  .title a {
    margin: 0 30px;
    display: flex;
    align-items: center;
    color: #1d2e7e;
    text-decoration: none;
  }
  .contact-wrapper {
    margin-left: auto;
    display: flex;
    width: 40vw;
    align-items: center;
    justify-content: center;
  }
  .contact-wrapper button {
    padding: 10px 25px;
    background-color: #3c61a0;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 20px;
  }
  .footer {
    background-color: #4e5d78;
    color: white;
    display: flex;
    font-size: 1.4rem;
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
  .contact-details a {
    margin: 0;
    font-size: 0.9rem;
    text-decoration: none;
    display: block;
    color: #3a3a71;
    font-size: 1.4rem;
  }
  .contact-details a:nth-child(1) {
    margin-bottom: 5px;
  }
}
</style>
