import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isEnabled:boolean = false;
  linkPlaceholderPicture:string = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAC4QAQACAQIEBAQGAwAAAAAAAAABAgMEEQUhMVESEyJBUmFxkSNCgaHB0TIzkv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APoIDo5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM+G3wz9gYAAAAAAAAAAAAAAAAAAAAB202nvqL+GnKI627A548d8t4pjrNrT7QstPwusbTntvPw16fdM0+DHp6eHHH1n3l1ZtakaY8OPF/rx1r9IdN2BFa3pTJG16Vt9Y3Rc3DcF+dN8c/LnH2TAFFqNFmwbzMeKnxVR3pULV8Ppl3ti2pft7S1KzYpx0vgy0tNbY7bx8mFRoAAAAREzMREbzPtAt+F6etMUZpje9uk9oKRAjRamY38mdvnMOF6Wpaa3rNZj2mHpEfW6euowzy9dY3rP8M61iiAaZAAAZpW17xSkb2mdogHTTYL6jLFKfrPaF7hxUw44pSNoj92mk09dNiisc7TztPeXZm1qQARQAAAAAAAHmgG2AABe8PvF9Jj2/LHhn9FE7abU5NNfenOJ61npKVYv2uW8Y8dr26VjdBjiuPbnivE9o2Q9XrL6n07eGkflj+UxdRgGmQABbcM0vl0868eu0emO0InDtN5+XxWj8OnX5z2XSWtSADKgAAAAAAAAAKu3Cr/lzVn612Rs2iz4udqbx3rzXoupjzQvdRo8OfeZr4b/FVVanSZdPO9o8VPa0LqYjgKgAAAA2x0tlyVpSN7WnaGq34ZpvLx+bePXaOXyhKsSsGKuDFXHXpHWe8ugMtAAAAAAAAAAAAAABMRMbTG8ACs1nDtt76ePrT+la9Kh63Q1z73x7VyftZZUsUwzatqWmtomLR1iWGmQEjR6W2pv2pH+VgdOHaXzr+ZePw6z/ANSuWKUrjpFKRtWOkMsWtyAAAAAAAAAAAAAAAAAAAAI+r0mPUxz9N46WhXW4bqInaPDaO8SuRdTFZg4XO++e0bfDX+1lSlcdYrSsVrHSIZE1cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=";
  photoCover = '';
  i:number = 0;
  characterTitle:string = '';
  characterPhotoList:string[] = [
    '../../../assets/images/ale_computer01.jpg',
    '../../../assets/images/ale_computer02-design.jpg',
    '../../../assets/images/ale_computer04-english.jpg',
    '../../../assets/images/ale_computer04-interpreter.jpg',
    '../../../assets/images/ale_computer06-crowd.jpg',
    '../../../assets/images/ale_computer09-logistics.jpg',
    '../../../assets/images/ale_computer09-business.jpg',
    '../../../assets/images/ale_computer07-guitar.jpg'
  ]
  characterLargePhotoList:string[] = [
    '../../../assets/images/react-vite-typescript-postgresql.gif',
    '../../../assets/images/bootstrapcss.gif',
    '../../../assets/images/ale_computer04-english-large.jpg',
    '../../../assets/images/banco-de-dados.png',
    '../../../assets/images/buzzfeed-quiz.gif',
    '../../../assets/images/instrutor.gif',
    '../../../assets/images/pokedex.gif',
    '../../../assets/images/ale_computer07-guitar-large.jpg'
  ]
  characterTitleList:string[] = [
    'Alexandre com React, Vite e Typescript',
    'Alexandre com PHP com Bootstrap',
    'Alexandre e o Inglês',
    'Alexandre e os BDs',
    'Alexandre criando Quiz de Perguntas',
    'Alexandre como Instrutor',
    'Alexandre e a API da lista de Pokemons',
    'Alexandre e a Guitarra'
  ]

  characterDescriptionList:string[] = [
    'Projeto Frontend com cardápio online, utilizando React, Vite e Typescript, combinando Bootstrap e Java no backend',
    'Uso de PHP fazendo o projeto do zero, utilizando MySQL, CSS e Bootstrap, site responsivo e hospedado, fazendo a função de SGE (Sistema de Gestão Educacional)',
    '14 anos de experiência em aulas de inglês, passando por WiseUp, Cultura Inglesa, Colégio Dom Bosco e a foto é da aula particular online, que acontece em pequenos grupos ou individual. Instagram: @teacher.alexandre',
    "Conhecimento em modelagem de banco de dados e linguagem SQL. Experiência com MySQL, e conhecimento em PostrgreSQL, como utilizado no projeto do cardápio.",
    "Criação de perguntas, qualitativas, com alimentação automática com arquivo JSON, como em uma API, no entanto, essa é alimentada localmente.",
    "Formado em Tecnlogia em Sistemas de Computação pela UFF e Administração, com pós em Logística, atua como instrutor de Desenvolvimento de Sistemas, Administração e Logística.",
    "Projeto com NodeJS, HTML e CSS, consumindo uma API do site de pokemons em tempo real.",
    "Dentro do pacote, você obtém um guitarrista amador destreinado, mas apaixonado por música."
  ]
  characterProjectLinks:string[] = [
    'Projeto Frontend com cardápio online, utilizando React, Vite, React e Typescript, combinando Bootstrap e Java no backend',
    'Uso de PHP fazendo o projeto do zero, utilizando MySQL, CSS e Bootstrap, site responsivo e hospedado, fazendo a função de SGE (Sistema de Gestão Educacional)',
    '14 anos de experiência em aulas de inglês, passando por WiseUp, Cultura Inglesa, Colégio Dom Bosco e a foto é da aula particular online, que acontece em pequenos grupos ou individual. Instagram: @teacher.alexandre',
    "Conhecimento em modelagem de banco de dados e linguagem SQL. Experiência com MySQL, e conhecimento em PostrgreSQL, como utilizado no projeto do cardápio.",
    "Criação de perguntas, qualitativas, com alimentação automática com arquivo JSON, como em uma API, no entanto, essa é alimentada localmente.",
    "Formado em Tecnlogia em Sistemas de Computação pela UFF e Administração, com pós em Logística, atua como instrutor de Desenvolvimento de Sistemas, Administração e Logística.",
    "Projeto com NodeJS, HTML e CSS, consumindo uma API do site de pokemons em tempo real.",
    "Dentro do pacote, você obtém um guitarrista amador destreinado, mas apaixonado por música."
  ]

  onShowDetails(i:number){
    this.isEnabled = true;
    this.photoCover= this.characterPhotoList[i];
    this.characterTitle = this.characterTitleList[i];
    this.i = i;
  }
}
