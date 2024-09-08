let dados = [ 
    {
    titulo : "Homer",
    descricao : "É uma inteligência artificial que ajudou Tony Stark durante a Invasão Chitauri.",
    link : "https://marvelcinematicuniverse.fandom.com/wiki/H.O.M.E.R."
},
{
    titulo : "Jarvis",
    descricao : "O cerebro por trás da armadura Jarvis, ou Just A Rather Very Intelligent System, é a inteligência artificial criada por Tony Stark, o Homem de Ferro. Ele serve como o sistema operacional central para as armaduras de Tony, controlando funções como armas, propulsão, e até mesmo a interface do usuário.",
    link : "https://marvelcinematicuniverse.fandom.com/wiki/J.A.R.V.I.S."
},
{
    titulo : "Veronica",
    descricao : "Era um módulo de serviço móvel implantado de um Stark Industries Satellite . Foi projetado por Tony Stark e Bruce Banner para responder a uma onda de fúria do Hulk . Foi abastecido com peças montadas automaticamente da Iron Man Armor: Mark XLIV para personalização em tempo real da armadura Hulkbuster e capacidade de combate versátil, bem como paredes de uma gaiola eletrificada automontada cuja soma forma uma prisão de contenção.",
    link : "https://marvelcinematicuniverse.fandom.com/wiki/Veronica"
},

{
    titulo : "Friday",
    descricao : "É uma interface de usuário em linguagem natural criada por Tony Stark, projetada para funcionar com sua armadura do Homem de Ferro. Ela serviu como o principal sistema de computador de interface de usuário de Stark durante a batalha final entre os Vingadores e Ultron em Sokovia e para encontrar informações sobre Helmut Zemo. Em contraste com a voz de JARVIS, que foi modelada a partir de um sotaque inglês masculino, a de FRIDAY é modelada a partir de um sotaque irlandês feminino.",
    link : "https://marvelcinematicuniverse.fandom.com/wiki/F.R.I.D.A.Y."
},
{
    titulo : "Karen",
    descricao : "Era uma interface de usuário de linguagem natural criada por Tony Stark e instalada na segunda iteração do Spider-Man Suit. Foi projetada para trabalhar junto e auxiliar Peter Parker em seus deveres como Spider-Man, desde que o jovem herói completasse o Training Wheels Protocol.",
    link : "https://marvelcinematicuniverse.fandom.com/wiki/Karen"
},
{
    titulo : "Edith",
    descricao : "É um sistema de segurança, defesa e inteligência tática artificial de realidade aumentada criado por Tony Stark e legado a Peter Parker após a morte de Stark. Alojado em um par de óculos de sol , o EDITH deu aos seus usuários acesso à rede global de satélites da Stark Industries , juntamente com um arsenal de mísseis e drones.",
    link : "https://marvelcinematicuniverse.fandom.com/wiki/E.D.I.T.H."
}
]; 



const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const nextButton = document.querySelector('.next');


let currentIndex = 0;

function showSlide(index)   
 {
  items.forEach((item, i) => {
    item.style.display = i >= index && i < index + 2 ? 'block' : 'none';
  });
}


nextButton.addEventListener('click', () => {
  currentIndex += 2;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

showSlide(currentIndex);

 