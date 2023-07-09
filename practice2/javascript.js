
// function circle_Button() {
//     let rectangle = document.querySelector('.rectangle');
//     let circle = document.getElementById('circle');
//     let main = document.body
    
//     if (rectangle.style.justifyContent === 'flex-start') {
//         circle.style.backgroundColor = '#ACAFE6';
//         main.style.backgroundColor = 'black'; // Update the background image URL
//         rectangle.style.justifyContent = 'flex-end';
//         rectangle.style.backgroundImage = 'url("./night1.jpg")'; // Update the background image URL
//         circle.style.float = 'left';
//         main.style.color = 'white'
//         circle.style.transition = 'transform 2s'; // Add transition for slow circle movement
//         circle.style.transform = 'translateX(10px)'; // Move the circle 10px to the right

//     } else {
//         circle.style.backgroundColor = 'rgb(249, 210, 184)';
//         rectangle.style.backgroundImage = 'url("./morning.jpg")'; // Update the background image URL
//         rectangle.style.justifyContent = 'flex-start';
//         circle.style.float = 'right';
//         main.style.backgroundColor = '#E09689'; // Update the background image URL
//         circle.style.transition = 'transform 2s'; // Add transition for slow circle movement
//         circle.style.transform = 'translateX(0)'; // Reset the circle position


//     }
// }

function button() {
    var btn = document.querySelector('.btn');
   if (btn.style.backgroundColor === 'red') {
      btn.style.backgroundColor = 'purple';
      
    } else {
        btn.style.backgroundColor = 'red';  
  }
}

function heading (){
    var heading = document.querySelector('.heading')
    if(heading.style.color === 'grey'){
        heading.style.color = 'red'
    }else{
        heading.style.color = 'grey'

    }
}
