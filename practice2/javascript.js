// function circle_Button() {
//     const rectangle = document.querySelector('.rectangle');
//     const circle = document.getElementById('circle');
//     const main = document.body;
  
//     const isFlexStart = rectangle.style.justifyContent === 'flex-start';
  
//     circle.style.backgroundColor = isFlexStart ? '#ACAFE6' : 'rgb(249, 210, 184)';
//     rectangle.style.justifyContent = isFlexStart ? 'flex-end' : 'flex-start';
//     rectangle.style.boxShadow = isFlexStart ?  '4px 7px 14px 0px rgba(255,255,255,0.75)' : ' 4px 7px 14px 0px rgba(0,0,0,0.75)'
//     rectangle.style.backgroundImage = isFlexStart ? 'url("./night1.jpg")' : 'url("./morning.jpg")';
//     circle.style.float = isFlexStart ? 'left' : 'right';
//     main.style.backgroundColor = isFlexStart ? 'black' : '#E09689';
//     main.style.color = isFlexStart ? 'white' : '';

//     circle.style.transition = 'transform 2s';
//     circle.style.transform = isFlexStart ? 'translateX(10px)' : 'translateX(0)';
//   }

// function circle_Button() {
//     let rectangle = document.querySelector('.rectangle');
//     let circle = document.getElementById('circle');
//     let main = document.body
    
//     if (rectangle.style.justifyContent === 'flex-start') {
//         circle.style.backgroundColor = '#ACAFE6';
//         rectangle.style.justifyContent = 'flex-end';
//         rectangle.style.backgroundImage = 'url("./night1.jpg")'; // Update the background image URL
//         circle.style.float = 'left';
//         main.style.backgroundColor = 'black'; // Update the background image URL
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
