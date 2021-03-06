'use strict';

// Importing styles
import 'reset-css';
import './styl/style';

import { env } from 'process';

// Note that this is to disable console warnings in production.
// Also, there's an ongoing issue with the google maps api that throws warnings in the browser console.

if(env.NODE_ENV === 'PRODUCTION'){
  console.log = () => {};
}



// Import images
import './images/healthier.jpeg';
import './images/rice-ball.jpeg';
import './images/salmon.jpeg';
import './images/tastytasty.jpeg';
import './images/muffin.jpg';
import './images/tastytasty.jpeg';
import './images/pasta.jpg';
import './images/gemuwhat.jpeg';
import './images/pancakes.jpeg';
import './images/chocolate-cake.jpeg';
import './images/handsome.jpeg';
import './images/earth-space.jpg';


// Import JavaScript
import './js/google-maps.js';
import './js/basicjs.js';