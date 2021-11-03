const campi = [
  {
    id: 1,
    title: "campo da calcetto #1",
    category: "calcetto",
    price: 49.99,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum itaque aut perferendis qui? Sapiente iure ex labore odit, eligendi nam ullam, asperiores temporibus harum sint dolorum? Fugiat sed nisi magni.`,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635507406/Progetto%207%20Sport%20Center/calcetto1_hr0ng6.jpg",
  },
  {
    id: 2,
    title: "padel rosso",
    category: "padel",
    price: 32.5,
    description: `Dolores, aspernatur iusto? Suscipit obcaecati dolore impedit harum provident
    molestias delectus, labore eaque veniam deserunt, sint recusandae fugit ipsa
    earum praesentium laudantium amet aut. `,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635507932/Progetto%207%20Sport%20Center/padel-rosso_no9jsm.jpg",
  },
  {
    id: 3,
    title: "basket indoor",
    category: "basket",
    price: 25.0,
    description: `Consectetur mollitia ipsa molestias
    veniam labore! Impedit et ex eaque quasi commodi, magni voluptatum fuga amet`,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635508051/Progetto%207%20Sport%20Center/basket-indoor_lwebfe.jpg",
  },
  {
    id: 4,
    title: "padel blu",
    category: "padel",
    price: 35,
    description: `culpa quibusdam repellendus reprehenderit cum nulla accusantium minima,
    facere quae sequi laboriosam minus. `,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635513383/Progetto%207%20Sport%20Center/padel-blu_qwfgx3.jpg",
  },
  {
    id: 5,
    title: "campo da calcetto #2",
    category: "calcetto",
    price: 49.99,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quam magni recusandae distinctio ut dignissimos quibusdam repellat`,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635513637/Progetto%207%20Sport%20Center/calcetto2_y7rnym.jpg",
  },
  {
    id: 6,
    title: "campo da calcetto #3",
    category: "calcetto",
    price: 39.99,
    description: `Consequuntur minima eius beatae mollitia sequi vero perferendis quam ullam porro.`,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635513710/Progetto%207%20Sport%20Center/calcetto3_uhr2kx.jpg",
  },
  {
    id: 7,
    title: "basket outdoor",
    category: "basket",
    price: 15,
    description: `Libero dolor vitae architecto mollitia distinctio aliquam ullam quasi voluptate provident!  `,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635513826/Progetto%207%20Sport%20Center/basket-outdoor_gnqhrb.jpg",
  },
  {
    id: 8,
    title: "sala pesi",
    category: "palestra",
    price: 12.99,
    description: `Accusantium deleniti fuga repudiandae quas assumenda voluptatibus dicta.
     Molestias eligendi hic, vel perspiciatis
    rerum architecto!  `,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635513968/Progetto%207%20Sport%20Center/sala-pesi_ndvrqo.jpg",
  },
  {
    id: 9,
    title: "padel viola",
    category: "padel",
    price: 35,
    description: `alias id quibusdam iure accusamus modi error, eligendi rem tempore perspiciatis facilis cumque.`,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635514079/Progetto%207%20Sport%20Center/padel-viola_uzooyh.jpg",
  },
  {
    id: 10,
    title: "campo da calcetto #4",
    category: "calcetto",
    price: 55,
    description: `Eius magnam laudantium obcaecati iusto corporis ducimus deleniti dignissimos `,
    img: "https://res.cloudinary.com/starnuzzicloud/image/upload/v1635515023/Progetto%207%20Sport%20Center/calcetto4_o09mly.jpg",
  },
];

// selezioniamo i nodi dal DOM
const listCenter = document.querySelector(".list-center");
const btnContainer = document.querySelector(".buttons");
// iniettiamo il contenuto al caricamento della pagina
window.addEventListener("DOMContentLoaded", function () {
  diplayListItems(campi);
  displayListButtons();
});

// funzione che crea gli item e li inietta nella pagina
function diplayListItems(listItems) {
  let displayList = listItems.map(function (item) {
    // console.log(item);

    return `<article class="list-item">
          <img src=${item.img} alt=${item.title} class="img" />
          <div class="item-info">
            <div class="info-header">
              <h4 class="name">${item.title}</h4>
              <h4 class="price">${item.price}€/ora</h4>
            </div>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>`;
  });
  displayList = displayList.join("");
  // console.log(displaylist);

  listCenter.innerHTML = displayList;
}

//funzione che crea e mostra i bottoni per filtrare gli item
function displayListButtons() {
  const categories = campi.reduce(
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
      const listCategory = campi.filter(function (listItem) {
        // console.log(listItem.category);
        if (listItem.category === category) {
          return listItem;
        }
      });
      if (category === "all") {
        diplayListItems(campi);
      } else {
        diplayListItems(listCategory);
      }
    });
  });
}
