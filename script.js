//Função para iniciar a navegação por tab
function initTabNav() {
  //Selecionando as classes
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  //O if vai vericar se as classes de tabMenu e tabContent existem
  if (tabMenu.length && tabContent.length) {
    //Deixa ativo por padrão o primeiro item da lista (Raposa)
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((Section) => {
        Section.classList.remove("ativo"); //Remove a classe 'ativo'
      });
      tabContent[index].classList.add("ativo"); //Adicona a classe 'ativo'
    }

    tabMenu.forEach((itemMenu, index) => {
      //Adiciona o clique
      itemMenu.addEventListener("click", () => {
        //Pega o index de cada imagem a cada clique
        activeTab(index);
      });
    });
  }
}
//Iniciando a função
initTabNav();

//Função para ativar os menus de faq
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  //O if vai vericar se as classes de accordion existe
  if (accordionList.length) {
    //Deixa o primeiro item da lista de faq ativo
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    //Ativa e desativa os menus de faq
    function activeAccortion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    //Pega o clique de cada faq
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccortion);
    });
  }
}
initAccordion();

//Deixar o scroll suave ao clicar no menu
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  //Percorre por cada link e pega o clique de cada
  linksInternos.forEach((links) => {
    links.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Animação das seções
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7; //Pega 70% da altura da tela

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; //Pega o topo da tela
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo"); //Ativa a classe - CSS
        } else {
          section.classList.remove("ativo"); //remove a classe - CSS
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
initAnimacaoScroll();
