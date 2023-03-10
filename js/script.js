function main() {
  const openMenu = document.getElementById('open-mobile-menu');
  const closeMenu = document.querySelectorAll('.close');

  openMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu-active');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('visible');
  });
  closeMenu.forEach((menu) => {
    menu.addEventListener('click', () => {
      const mobileMenu = document.querySelector('#mobile-menu-active');
      mobileMenu.classList.remove('visible');
      mobileMenu.classList.add('hidden');
    });
  });
  const cards = [
    {
      name: 'Multi-Post Stories Gain+Glory-1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      img: './Assets/images/mobile-snapshot-image.svg',
      technologies: [
        {
          name: 'Ruby on rails-1',
        },
        {
          name: 'css',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'html',
        },
      ],
    },
    {
      name: 'Multi-Post Stories Gain+Glory-2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      img: './Assets/images/mobile-snapshot-image.svg',
      technologies: [
        {
          name: 'Ruby on rails-2',
        },
        {
          name: 'css',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'html',
        },
      ],
    },
    {
      name: 'Multi-Post Stories Gain+Glory-3',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      img: './Assets/images/mobile-snapshot-image.svg',
      technologies: [
        {
          name: 'Ruby on rails-3',
        },
        {
          name: 'css',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'html',
        },
      ],
    },
    {
      name: 'Multi-Post Stories Gain+Glory-4',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      img: './Assets/images/mobile-snapshot-image.svg',
      technologies: [
        {
          name: 'Ruby on rails-4',
        },
        {
          name: 'css',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'html',
        },
      ],
    },
    {
      name: 'Multi-Post Stories Gain+Glory-5',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      img: './Assets/images/mobile-snapshot-image.svg',
      technologies: [
        {
          name: 'Ruby on rails-5',
        },
        {
          name: 'css',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'html',
        },
      ],
    },
    {
      name: 'Multi-Post Stories Gain+Glory-6',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      img: './Assets/images/mobile-snapshot-image.svg',
      technologies: [
        {
          name: 'Ruby on rails-6',
        },
        {
          name: 'css',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'html',
        },
      ],
    },
  ];
  // create project details cards dynamically on page load
  cards.forEach((card) => {
    const dynamicCard = document.querySelector('#card-work');
    dynamicCard.classList.add('flex-col');
    //   create ul inside card-work
    const topul = document.createElement('ul');
    dynamicCard.appendChild(topul);
    //   create li's inside topul
    const topulli = document.createElement('li');
    topul.appendChild(topulli);
    //   create the 'card card-1' div inside top ul li
    const card1Div = document.createElement('div');
    topulli.appendChild(card1Div);
    card1Div.classList.add('card', 'card-1', 'flex-centered');
    // create the 'subcard'
    const subcard = document.createElement('div');
    card1Div.appendChild(subcard);
    subcard.classList.add('subcard');
    // create container
    const container = document.createElement('div');
    subcard.appendChild(container);
    container.classList.add('container', 'flex-col-c');
    //   create the project title
    const projectTitle = document.createElement('div');
    container.appendChild(projectTitle);
    projectTitle.classList.add('project-title');
    //   create content for li
    const title = document.createElement('h3');
    projectTitle.appendChild(title);
    title.textContent = card.name;
    // create tags
    const tags = document.createElement('div');
    container.appendChild(tags);
    tags.classList.add('tags');
    // create ul inside tags
    const taguls = document.createElement('ul');
    tags.appendChild(taguls);
    //   now for technologies
    card.technologies.forEach((tech) => {
      // create li inside the ul's
      const taglis = document.createElement('li');
      taguls.appendChild(taglis);
      // create a's inside li's
      const as = document.createElement('a');
      taglis.appendChild(as);
      as.textContent = tech.name;
    });
    //   create the button
    const seeProjectButton = document.createElement('div');
    container.appendChild(seeProjectButton);
    seeProjectButton.classList.add('btn-primary');
    //   create the a tag inside button
    const aTag = document.createElement('a');
    seeProjectButton.appendChild(aTag);
    aTag.textContent = 'See Project';
    // create the technologies for popups based on the list of technologies
    // selected from the details
    // CREATE CLICK EVENT FOR 'SEE PROJECT' BUTTON TO TRIGGER DETAILS POPUP
    const details = document.querySelector('#details-popup-section');
    seeProjectButton.addEventListener('click', () => {
      // update details heading with project title of selected project
      const detailsHeading = document.getElementById('details-heading');
      detailsHeading.textContent = card.name;
      // update text content of the details card with data from object
      const detailsTextContent = document.getElementById('details-text-content');
      detailsTextContent.textContent = card.description;
      // then display the popup
      details.classList.remove('hidden');
      details.classList.add('visible');
      // create the technologies for popups based on the list of technologies
      // selected from the details
      const detailsTechUl = document.querySelector('#details-popup-tags ul');
      card.technologies.forEach((tech) => {
        const listTech = document.createElement('li');
        detailsTechUl.appendChild(listTech);
        const techATag = document.createElement('a');
        listTech.appendChild(techATag);
        techATag.textContent = tech.name;
      });
    });
    // click event for close button on mobile version of details popup
    const closeMobileDetails = document.querySelector('.close-mobile-details');
    const detailsTechUl = document.querySelector('#details-popup-tags ul');
    closeMobileDetails.addEventListener('click', () => {
      details.classList.remove('visible');
      details.classList.add('hidden');
      // clear list of technologies from popup upon close
      const removables = document.querySelector('#details-popup-tags ul li');
      if (removables !== null) detailsTechUl.removeChild(removables);
    });
    // click event for close button on desktop version of details popup
    const closeDesktopDetails = document.querySelector('.close-desktop-details');
    closeDesktopDetails.addEventListener('click', () => {
      details.classList.remove('visible');
      details.classList.add('hidden');
      // clear list of technologies from popup upon close
      const detailsTechUl = document.querySelector('#details-popup-tags ul');
      const removables = document.querySelector('#details-popup-tags ul li');
      if (removables !== null) detailsTechUl.removeChild(removables);
    });
    // validate form on submit
    const form = document.querySelector('#form');
    const errorMessage = document.getElementById('email-error-message');
    const email = document.getElementById('email');
    form.addEventListener('submit', (e) => {
      if (/[A-Z]/.test(email.value)) {
        errorMessage.textContent = 'Email must be all in lowercase.';
        e.preventDefault();
      } else errorMessage.innerHTML = '';
    });
  });
}
main();

// preserve data on browsers on page load
window.onload = () => {
  // assigning form fields to a variable.
  const form = document.querySelector('#form');
  const name = document.getElementById('user_name');
  const email = document.getElementById('email');
  const message = document.getElementById('primary-rich-textbox');

  // handling event for every change in input field
  form.addEventListener('input', () => {
    const fields = { name, email, message };
    // storing input values to a local storage.
    fields.name = name.value;
    fields.email = email.value;
    fields.message = message.value;
    localStorage.setItem('data', JSON.stringify(fields));
  });
  // parsing the data.
  const data = JSON.parse(localStorage.getItem('data'));
  // assining values to input fields from local storage on page load.
  if (data !== null && data !== undefined) {
    name.value = data.name;
    email.value = data.email;
    message.value = data.message;
  }
};