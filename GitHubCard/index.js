/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function githubUser(){
  axios.get('https://api.github.com/users/evansibok')
    .then(response => {
      debugger
      userData(response.data);
    })
    .catch(error => {
      // debugger
      document.body.innerText = error;
    })
}
  
githubUser()

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = []; // NOT DONE !!!!!!!!!

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// Step 3
function userData(user) {

  // debugger

  let div1 = document.createElement("div");
  div1.classList.add("card");

  let img = document.createElement("img");
  img.setAttribute = ("src", user.avatar_url);

  let div2 = document.createElement("div");
  div2.classList.add("card-info");

  let h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = user.name;

  let p1 = document.createElement("p");
  p1.classList.add("username");
  p1.textContent = user.login;

  let p2 = document.createElement("p")
  p2.textContent = "Location: " + user.location;

  let a = document.createElement("a");
  a.textContent = user.html_url;
  a.setAttribute("href", user.html_url);
  
  let p3 = document.createElement("p");
  p3.textContent = "Profile: ";
  p3.appendChild(a);

  let p4 = document.createElement("p");
  p4.textContent = "Followers: " + user.followers;

  let p5 = document.createElement("p");
  p5.textContent = "Following: " + user.following;

  let p6 = document.createElement("p");
  p6.textContent = "Bio: " + user.bio;


  // Appending children to appropriate parents
  div1.appendChild(img);
  div1.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  let cardDiv = document.querySelector(".cards");
  cardDiv.appendChild(div1)

  return user;
};

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const gitUsername = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
]

const newName = gitUsername.forEach(name => console.log(name))

const followersCard = () => {

  axios.get()
  .then()
  .catch()

}
