const menu = [
 {
   id: 1,
   title: "buttermilk pancakes",
   category: "breakfast",
   price: 199,
   img: "./images/item-1.jpeg",
   desc: `The most juicy, soft and delicious pancakes in the world that will make your day x100 times better `,
 },
 {
   id: 2,
   title: "diner double",
   category: "lunch",
   price: 299,
   img: "./images/item-2.jpeg",
   desc: `Our chef's special double patty lamb burger will just melt in your mouth with a burst of flavour. `,
 },
 {
   id: 3,
   title: "godzilla milkshake",
   category: "shakes",
   price: 199,
   img: "./images/item-3.jpeg",
   desc: `Are you bored of choclate? Try our new 7 berries mix milkshake and we promise you that you will forget about choclate.`,
 },
 {
   id: 4,
   title: "country delight",
   category: "breakfast",
   price: 199,
   img: "./images/item-4.jpeg",
   desc: `The best way to start your day is by having a healthy breakfast and our Country delight isn't just healthy it's tasty as well! `,
 },
 {
   id: 5,
   title: "Egg Attack",
   category: "lunch",
   price: 299,
   img: "./images/item-5.jpeg",
   desc: `packed with protein and the goodness of greek yogurt this is the best burger for people who don't enjoy meat`,
 },
 {
   id: 6,
   title: "Oreo Dream",
   category: "shakes",
   price: 199,
   img: "./images/item-6.jpeg",
   desc: `The most sinful and delicious shake of all shakes. Pro Tip: Don't count the calories`,
 },
 {
   id: 7,
   title: "Bacon Overflow",
   category: "breakfast",
   price: 299,
   img: "./images/item-7.jpeg",
   desc: `Juicy bacon in the best buns that will make keep coming back to our restaurant. Its a must try and a chef's special `,
 },
 {
   id: 8,
   title: "american classic",
   category: "lunch",
   price: 299,
   img: "./images/item-8.jpeg",
   desc: `This is our twist on classic cheesy chicken burger that is served with crispy fries `,
 },
 {
   id: 9,
   title: "quarantine buddy",
   category: "shakes",
   price: 199,
   img: "./images/item-9.jpeg",
   desc: `This is a customised shake and you can add eithe vanilla/ Strawberry/ Choclate ice cream and choose any 3 toppings from our toppings counter.`,
 },
 {
   id: 10,
   title: "bison steak",
   category: "dinner",
   price: 499,
   img: "./images/item-10.jpeg",
   desc: `Bison is leaner than beef and may be a healthier choice if you're looking to reduce your calorie or fat intake. served with the best sauce and sauteed veggies`,
 },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
 diplayMenuItems(menu);
 displayMenuButtons();
});

function diplayMenuItems(menuItems) {
 let displayMenu = menuItems.map(function (item) {
   // console.log(item);

   return `<article class="menu-item">
         <img src=${item.img} alt=${item.title} class="photo" />
         <div class="item-info">
           <header>
             <h4>${item.title}</h4>
             <h4 class="price">₹${item.price}</h4>
           </header>
           <p class="item-text">
             ${item.desc}
           </p>
         </div>
       </article>`;
 });
 displayMenu = displayMenu.join("");
 // console.log(displayMenu);

 sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
 const categories = menu.reduce(
   function (values, item) {
     if (!values.includes(item.category)) {
       values.push(item.category);
     }
     return values;
   },
   ["all"]
 );
 const categoryBtns = categories
   .map(function (category) {
     return `<button type="button" class="filter-btn" data-id=${category}>
         ${category}
       </button>`;
   })
   .join("");

 btnContainer.innerHTML = categoryBtns;
 const filterBtns = btnContainer.querySelectorAll(".filter-btn");
 console.log(filterBtns);

 filterBtns.forEach(function (btn) {
   btn.addEventListener("click", function (e) {
     // console.log(e.currentTarget.dataset);
     const category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function (menuItem) {
       // console.log(menuItem.category);
       if (menuItem.category === category) {
         return menuItem;
       }
     });
     if (category === "all") {
       diplayMenuItems(menu);
     } else {
       diplayMenuItems(menuCategory);
     }
   });
 });
}