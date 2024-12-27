
//---Ativação do menu
const menuLink = document.querySelectorAll(".menu__link");
const menuLinkMobile = document.querySelectorAll(".icon_menu");

function linkAction() {
  menuLink.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

function linkActionMobile() {
  menuLinkMobile.forEach((item) => item.classList.remove("active_mobile"));
  this.classList.add("active_mobile");
}
menuLink.forEach((item) => item.addEventListener("click", linkAction));

menuLinkMobile.forEach((item) => item.addEventListener("click", linkActionMobile));


window.addEventListener('scroll', function(item) {
  const scrollHeight = parseInt(window.scrollY);

  const sectionHome = document.querySelector('#home');
  const sectionAbout = document.querySelector('#about');
  const sectionExperience = document.querySelector('#experience');
  const sectionProjects = document.querySelector('#projects');
  const sectionSkills = document.querySelector('#skills');
  const sectionContact = document.querySelector('#contact');

  const rectHome = sectionHome.getBoundingClientRect();
  const scrollYHome = rectHome.top + window.scrollY;

  const rectAbout = sectionAbout.getBoundingClientRect();
  const scrollYAbout = rectAbout.top + window.scrollY;
  
  const rectExperience = sectionExperience.getBoundingClientRect();
  const scrollYExperience = rectExperience.top + window.scrollY;
  
  const rectProjects = sectionProjects.getBoundingClientRect();
  const scrollYProjects = rectProjects.top + window.scrollY;
  
  const rectSkills = sectionSkills.getBoundingClientRect();
  const scrollYSkills = rectSkills.top + window.scrollY;
  
  const rectContact = sectionContact.getBoundingClientRect();
  const scrollYContact = rectContact.top + window.scrollY;


  if(scrollHeight < scrollYAbout - 200){
    changeClass(0)
  } else if(scrollHeight < scrollYExperience - 200 && scrollHeight >= scrollYAbout - 200) {
    changeClass(1)
  } else if(scrollHeight < scrollYProjects - 200 && scrollHeight >= scrollYExperience - 200){
    changeClass(2)
  } else if(scrollHeight < scrollYSkills - 200 && scrollHeight >= scrollYProjects - 200){
    changeClass(3)
  } else if(scrollHeight < scrollYContact - 400 && scrollHeight >= scrollYSkills - 200){
    changeClass(4)
  } else if(scrollHeight >= scrollYContact - 400) {
    changeClass(5)
  }
});

function changeClass(index){
  menuLink.forEach((item) => item.classList.remove("active"));
  menuLink[index]?.classList.add("active");
  menuLinkMobile.forEach((item) => item.classList.remove("active_mobile"));
  menuLinkMobile[index]?.classList.add("active_mobile");
}



//---Menu Hamburguer

const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');
let activeMenuMobile = false;
hamburger.addEventListener('click', () => {
  activeMenuMobile = !activeMenuMobile
  menuList.classList.toggle('active');
  if(activeMenuMobile) {
    hamburger.classList.remove('disable_menu_mobile')
    hamburger.classList.add('enable_menu_mobile')
  } else {
    hamburger.classList.remove('enable_menu_mobile')
    hamburger.classList.add('disable_menu_mobile')


  }
});





//------Validação input-------

let inputName = document.getElementById('name')
let inputEmail = document.getElementById('email')
let inputMessage = document.getElementById('message')
let buttonEnviar = document.getElementById('enviar')
let buttonLimpar = document.getElementById('limpar')

function checkInput() {

  if (inputName.value.trim() !== '' || inputEmail.value.trim() !== '' || inputMessage.value.trim() !== '') {
    buttonEnviar.disabled = false;
    buttonLimpar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
    buttonLimpar.disabled = true;
  }
}

function clearInputs() {
  buttonEnviar.disabled = true;
  buttonLimpar.disabled = true;
  inputName.value = ''
  inputEmail.value = ''
  inputMessage.value = ''
}

inputName.addEventListener('input', checkInput);
inputEmail.addEventListener('input', checkInput);
inputMessage.addEventListener('input', checkInput);

buttonLimpar.addEventListener('click', clearInputs)
//--------------------------------

//--- Experience ----
const xp1 = document.getElementById('enacom')
const xp2 = document.getElementById('compass')


xp1.classList.toggle('active_experience')


const title = document.getElementById('title_experience')
const date = document.getElementById('data_experience')
const enterprise = document.getElementById('enterprise_experience')
const text = document.getElementById('text_experience')


function experienceOptions(event) {
  const options = document.getElementsByClassName('options_experience')
  const currentClass = document.getElementById(`${event}`)

  if (options.length > 0) {
    const parentElement = options[0];
    const children = parentElement.children;

    for (let child of children) {
      child.classList.remove('active_experience');
    }

  }

  currentClass.classList.toggle('active_experience');

  switch (event) {
    case 'enacom':
      title.innerText = `Desenvolvedor Front-End`
      date.innerText = `Mar/2023 - Atualmente`
      enterprise.innerText = `ENACOM`
      text.innerText =  
      'Desenvolvedor Front-End na Enacom, responsável por criar soluções modernas e eficientes utilizando Angular. '+
      'Atuo em projetos estratégicos para grandes empresas dos setores de siderurgia, financeiro e energia, como ' +
      'Gerdau e Cemig, contribuindo para a transformação digital de seus negócios. Minha atuação inclui o desenvolvimento ' +
      'de uma biblioteca de componentes padronizados, projetada para otimizar e unificar a experiência em projetos internos. ' +
      'Trabalho em um ambiente ágil, aplicando a metodologia Scrum e utilizando Azure DevOps para gestão e integração contínua. ' +
      'Tenho como foco a entrega de interfaces intuitivas, responsivas e de alta performance, alinhadas às melhores práticas de desenvolvimento e às necessidades dos clientes'
      break;
      case 'compass':
        title.innerText = `Desenvolvedor Mobile`
        date.innerText = `Jan/2022 - Abr/2022`
        enterprise.innerText = `COMPASS.UOL`
        text.innerText =  
        'Desenvolvi aplicativos mobile utilizando JavaScript, React e React Native, com experiência em ' +
        'metodologias ágeis como Scrum, Jira e Kanban. Também colaborei com designers por meio do Figma e realizei testes de API utilizando o Postman.'
        break;
  }

}







//--------Mudar Tema------
let theme = document.getElementById('theme');
let iconTheme = document.getElementById('theme-icon');
// let body = document.getElementById('body')
let header = document.getElementById('header')
let isTheme = true;

function changeTheme() {
  const root = document.querySelector("body");
  isTheme = !isTheme;
  if (isTheme) {
    // theme.style.backgroundColor = '#1C1D20'
    iconTheme.src = './assets/icons/sun_theme_24.svg';
    // body.style.backgroundColor = '#1C1D20'
    // header.style.backgroundColor = '#0b0b0b'
    gridColor = '#FFF'
    root.classList.remove("light");
    root.classList.toggle("dark");
  } else {
    // theme.style.backgroundColor = '#FFF'
    iconTheme.src = './assets/icons/moon_theme_20.svg';
    // body.style.backgroundColor = '#FFF'
    // header.style.backgroundColor = '#FFF'
    gridColor = '#CCC'
    root.classList.remove("dark");
    root.classList.toggle("light");

  }
}

//-------------------------