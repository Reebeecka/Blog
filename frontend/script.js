 fetch('http://localhost:5000/blog')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.error(err))

// async function fetchMovies() {
//     const response = await fetch('http://localhost:5000/blog');
//     // waits until the request completes...
//     console.log(response.json());
//   };

//   fetchMovies();

// async function getUser() {
//     try {
//       const response = await fetch('https://localhost:5000/blog/', {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }
  
//       const result = await response.json();
//       console.log("HEEEEJ")
//       return result;
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
// getUser();
  