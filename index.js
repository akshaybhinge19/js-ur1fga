// Import stylesheets
import './style.css';
document.getElementById("child1").addEventListener("mouseover", colorChange1);
document.getElementById("child1").addEventListener("mouseout", colorFade1);
function colorChange1(){  
  document.getElementById("child1").style.backgroundColor='red';  
}
function colorFade1(){  
  document.getElementById("child1").style.backgroundColor='white';  
}
document.getElementById("child2").addEventListener("mouseover", colorChange2);
document.getElementById("child2").addEventListener("mouseout", colorFade2);
function colorChange2(){  
  document.getElementById("child2").style.backgroundColor='blue';
  document.getElementById("line1").style.visibility='visible';
  document.getElementById("line2").style.visibility='visible';
}
function colorFade2(){  
  document.getElementById("child2").style.backgroundColor='white';
  document.getElementById("line1").style.visibility='hidden';
  document.getElementById("line2").style.visibility='hidden';
}
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
