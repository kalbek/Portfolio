function main() {
  const openMenu = document.getElementById("open-mobile-menu");
  const closeMenu = document.getElementById("close-mobile-menu");
  const mobilePortfolio = document.getElementById("mobile-portfolio");
  const mobileAbout = document.getElementById("mobile-about");
  const mobileContact = document.getElementById("mobile-contact");
  function closeMobileMenu() {
    const mobileMenu = document.querySelector("#mobile-menu-active");
    mobileMenu.classList.remove("visible");
    mobileMenu.classList.add("hidden");
  }
  openMenu.addEventListener("click", () => {
    const mobileMenu = document.querySelector("#mobile-menu-active");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("visible");
  });
  closeMenu.addEventListener("click", () => {
    closeMobileMenu();
  });
  mobilePortfolio.addEventListener("click", () => {
    closeMobileMenu();
  });
  mobileAbout.addEventListener("click", () => {
    closeMobileMenu();
  });
  mobileContact.addEventListener("click", () => {
    closeMobileMenu();
  });
  const cards = [
    {
      name: "Multi-Post Stories Grain+Glory-1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Grain+Glory-2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Grain+Glory-3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Grain+Glory-4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Grain+Glory-5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Grain+Glory-6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
  ];
  // create dom elements form js
  cards.forEach((card) => {
    let dynamicCard = document.querySelector("#card-work");
    //   create ul inside card-work
    let topul = document.createElement("ul");
    dynamicCard.appendChild(topul);
    //   create li's inside topul
    let topulli = document.createElement("li");
    topul.appendChild(topulli);
    //   create the 'card card-1' div inside top ul li
    let card1Div = document.createElement("div");
    topulli.appendChild(card1Div);
    card1Div.classList.add("card");
    card1Div.classList.add("card-1");
    // create the "subcard"
    let subcard = document.createElement("div");
    card1Div.appendChild(subcard);
    subcard.classList.add("subcard");
    // create container
    let container = document.createElement("div");
    subcard.appendChild(container);
    container.classList.add("container");
    //   create the project title
    let projectTitle = document.createElement("div");
    container.appendChild(projectTitle);
    projectTitle.classList.add("project-title");
    //   create content for li
    let title = document.createElement("h3");
    projectTitle.appendChild(title);
    title.textContent = card.name;
    // create tags
    //   now for technologies
    card.technologies.forEach((tech) => {
      let tags = document.createElement("div");
      container.appendChild(tags);
      tags.classList.add("tags");
      // create ul inside tags
      let taguls = document.createElement("ul");
      tags.appendChild(taguls);
      // create li inside the ul's
      let taglis = document.createElement("li");
      taguls.appendChild(taglis);
      // create a's inside li's
      let as = document.createElement("a");
      taglis.appendChild(as);
      as.textContent = tech.name;
    });
  });
}
main();
