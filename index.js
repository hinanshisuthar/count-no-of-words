// Import stylesheets
import './style.css';

var inputText = document.querySelector('#input-text');
var countBtn = document.querySelector('#count-btn');

countBtn.addEventListener('click', function () {
  var stringText = inputText.value;
  // console.log(stringText);
  var count = stringText.split('').length;
  console.log(count);
});
