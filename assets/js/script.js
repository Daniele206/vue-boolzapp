const {createApp} = Vue;

createApp({

  data(){
    return{
      darkMode: false,
      listChat:[
        {
          name: 'Michele',
          img: './assets/img/avatar_1.jpg',
          chat:[
            {
              text: 'Ciao come stai?',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Tutto bene, tu?',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Tutto ok',
              date: '14/03/2024 14.10',
              myMessage: false
            },
          ],
        },
        {
          name: 'Fabio',
          img: './assets/img/avatar_2.jpg',
          chat:[
            {
              text: 'Hai fatto la spesa?',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Certo, ho preso anche i cereali per te',
              date: '14/03/2024 14.10',
              myMessage: false
            },
          ],
        },
        {
          name: 'Samuele',
          img: './assets/img/avatar_3.jpg',
          chat:[
            {
              text: 'Stasera esci?',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Si, chi esce?',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Io, tu, Matte e Fra',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Ok a dopo',
              date: '14/03/2024 14.10',
              myMessage: false
            },
          ],
        },
        {
          name: 'Alessandro B.',
          img: './assets/img/avatar_4.jpg',
          chat:[
            {
              text: 'Hai studiato per domani?',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Perché?',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'C\'é il compito',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Nooooo l\'avevo dimenticato',
              date: '14/03/2024 14.10',
              myMessage: true
            },
          ],
        },
        {
          name: 'Alessandro L.',
          img: './assets/img/avatar_5.jpg',
          chat:[
            {
              text: 'Ale allora domenica andiamo sui cart?',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Ovvio, non serve chiedre, pronto a perdere?',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Hahahahah bella battuta, forse nei tuoi sogni',
              date: '14/03/2024 14.10',
              myMessage: true
            },
          ],
        },
        {
          name: 'Claudia',
          img: './assets/img/avatar_6.jpg',
          chat:[
            {
              text: 'Scusa Cla, potresti mandarmi l\'assegno di mate per domani, io non l\'ho preso',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Certo, come sempre (mate: es. 45-46-47-48 pag. 152, es. 98-110 pag. 180)',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Grazie, la prossima volta lo prendo lo giuro',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Sisi dici sempre cosí, poi ogni volta é sempre la stessa storia, non cambi mai',
              date: '14/03/2024 14.10',
              myMessage: false
            },
          ],
        },
        {
          name: 'Federico',
          img: './assets/img/avatar_7.jpg',
          chat:[
            {
              text: 'Non scordarti di dare da mangiare al cane',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Gia fatto',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Tranqillo',
              date: '14/03/2024 14.10',
              myMessage: true
            },
          ],
        },
        {
          name: 'Davide',
          img: './assets/img/avatar_8.jpg',
          chat:[
            {
              text: 'Allora ti posso contare per la partita di venerdí?',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'Si, vai tranquillo ci sono',
              date: '14/03/2024 14.10',
              myMessage: false
            },
            {
              text: 'Perfetto con te siamo in 10',
              date: '14/03/2024 14.10',
              myMessage: true
            },
            {
              text: 'A venerdí',
              date: '14/03/2024 14.10',
              myMessage: true
            },
          ],
        },
      ],
      counter: 0,
    };
  }

}).mount('#app');