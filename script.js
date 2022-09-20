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
