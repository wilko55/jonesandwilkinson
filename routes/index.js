var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res, next) => {
  axios.get(
    `http://blog.andywilko.com/ghost/api/v2/content/posts/?key=53a6a6e62dbce88a8a693e6d7b`
  ).then(response => {

    let latestPosts = response.data.posts.slice(0, 3).map((el) => {
      return {
        excerpt: el.excerpt.split(' ').slice(0, 30).join(' ').concat('...'),
        image: el.feature_image,
        title: el.title,
        url: el.url,
        date: {
          day: new Date(el.published_at).getDate(),
          month: new Date(el.published_at).toLocaleString('default', { month: 'short' })
        }
      }
    })

    console.log(latestPosts)

    res.render('home', {
      layout: 'main',
      latestPosts
    });
  }).catch(err =>{
    console.log(err)
  })
});

router.get('/contact', (req, res, next) => {
  res.render('contact', {
    layout: 'main',
  });
});

const services = [
  'diecast-machining',
  'toolmaking',
  'secondary-operations',
  'assembly'
]

services.forEach(service => {
  router.get(`/services/${service}`, (req, res, next) => {
    res.render(`services/${service}`, {
      layout: 'main',
    });
  });
})

router.get('/contact', (req, res, next) => {
  res.render('contact', {
    layout: 'main',
  });
});

module.exports = router;