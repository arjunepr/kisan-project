import 'reset-css';
import './styl/style';










// Importing fonts
import './fonts/AnonymousPro/Anonymous_Pro.ttf'

// Just a way of avoiding boilerplate. Albeit a bit ugly..
['B', 'BI', 'I'].forEach((piece) => {
  import(`./fonts/AnonymousPro/Anonymous_Pro_${piece}.ttf`);
});
