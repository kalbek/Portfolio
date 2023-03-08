function main() {
  const openMenu = document.getElementById('open-mobile-menu');
  const closeMenu = document.getElementById('close-mobile-menu');
  const mobilePortfolio = document.getElementById('mobile-portfolio');
  const mobileAbout = document.getElementById('mobile-about');
  const mobileContact = document.getElementById('mobile-contact');
  function closeMobileMenu() {
    const mobileMenu = document.querySelector('#mobile-menu-active');
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden');
  }
  openMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu-active');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('visible');
  });
  closeMenu.addEventListener('click', () => {
    closeMobileMenu();
  });
  mobilePortfolio.addEventListener('click', () => {
    closeMobileMenu();
  });
  mobileAbout.addEventListener('click', () => {
    closeMobileMenu();
  });
  mobileContact.addEventListener('click', () => {
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
  // create project details cards dynamically on page load
  cards.forEach((card) => {
    let dynamicCard = document.querySelector('#card-work');
    //   create ul inside card-work
    let topul = document.createElement('ul');
    dynamicCard.appendChild(topul);
    //   create li's inside topul
    let topulli = document.createElement('li');
    topul.appendChild(topulli);
    //   create the 'card card-1' div inside top ul li
    let card1Div = document.createElement('div');
    topulli.appendChild(card1Div);
    card1Div.classList.add('card');
    card1Div.classList.add('card-1');
    // create the 'subcard'
    let subcard = document.createElement('div');
    card1Div.appendChild(subcard);
    subcard.classList.add('subcard');
    // create container
    let container = document.createElement('div');
    subcard.appendChild(container);
    container.classList.add('container');
    //   create the project title
    let projectTitle = document.createElement('div');
    container.appendChild(projectTitle);
    projectTitle.classList.add('project-title');
    //   create content for li
    let title = document.createElement('h3');
    projectTitle.appendChild(title);
    title.textContent = card.name;
    // create tags
    let tags = document.createElement('div');
    container.appendChild(tags);
    tags.classList.add('tags');
    // create ul inside tags
    let taguls = document.createElement('ul');
    tags.appendChild(taguls);
    //   now for technologies
    card.technologies.forEach((tech) => {
      // create li inside the ul's
      let taglis = document.createElement('li');
      taguls.appendChild(taglis);
      // create a's inside li's
      let as = document.createElement('a');
      taglis.appendChild(as);
      as.textContent = tech.name;
    });
    //   create the button
    let seeProjectButton = document.createElement('div');
    container.appendChild(seeProjectButton);
    seeProjectButton.classList.add('btn-primary');
    //   create the a tag inside button
    let a_tag = document.createElement('a');
    seeProjectButton.appendChild(a_tag);
    a_tag.textContent = 'See Project';
    // CREATE CLICK EVENT FOR 'SEE PROJECT' BUTTON TO TRIGGER DETAILS POPUP
    const details = document.querySelector('#details-popup-section');
    seeProjectButton.addEventListener('click', () => {
      // update details heading with project title of selected project
      const details_heading = document.getElementById('details-heading')
      details_heading.textContent = card.name
      // update text content of the details card with data from object
      const details_text_content = document.getElementById('details-text-content')
      details_text_content.textContent = card.description
      // then display the popup
      details.classList.remove('hidden');
      details.classList.add('visible');
    });
    // click event for close button on mobile version of details popup
    const closeMobileDetails = document.querySelector('.close-mobile-details');
    closeMobileDetails.addEventListener('click', () => {
      details.classList.remove('visible');
      details.classList.add('hidden');
    });
    // click event for close button on desktop version of details popup
    const closeDesktopDetails = document.querySelector(
      '.close-desktop-details'
      );
      closeDesktopDetails.addEventListener('click', () => {
        details.classList.remove('visible');
        details.classList.add('hidden');
    });
  });
}
main();
