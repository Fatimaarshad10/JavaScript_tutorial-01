
// Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("Promise resolved!");
//         } else {
//             reject("Promise rejected!");
//         }
//     }, 1000);
   
// });

// //  Using the Promise
// myPromise
//     .then((result) => {
//         console.log(result); 
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Promise finished, regardless of resolution or rejection.");
//     });




// Fetch data from the API
// fetch("https://fakestoreapi.com/products")
// .then(response => response.json())
// .then(data => {

//     const cardContainer = document.getElementById('card-container');

//   // Loop through the data and create a card for each product
//   data.forEach(product => {
//     // Create a new card div
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.style.width = '18rem';
//     card.style.marginTop = '10px';

//     // Populate the card with product data
//     card.innerHTML = `
//       <div class="card-body">
//       <img src="${product.image}" class="card-img-top" alt="${product.title}">
//         <h5 class="card-title">${product.title}</h5>
//         <p class="card-text">Category: ${product.category}</p>
//         <p class="card-text">Price: $${product.price}</p>
//         <p class="card-text">Description: ${product.description}</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     `;

//     // Append the card to the card container
//     cardContainer.appendChild(card);
//   });


// })
// .catch(error => console.error("Error:", error));



// async function fetchData() {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     console.log(data);
//   }
//   fetchData()

  async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
      throw error; // Re-throw the error if needed
    }
  }

