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
              date: '10/01/2020 - 15:30:55',
              myMessage: false
            },
            {
              text: 'Tutto bene, tu?',
              date: '10/01/2020 - 15:50:00',
              myMessage: true
            },
            {
              text: 'Tutto ok',
              date: '10/01/2020 - 16:15:22',
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
              date: '20/03/2020 - 16:30:00',
              myMessage: true
            },
            {
              text: 'Certo, ho preso anche i cereali per te',
              date: '20/03/2020 - 16:30:55',
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
              date: '28/03/2020 - 10:10:40',
              myMessage: true
            },
            {
              text: 'Si, chi esce?',
              date: '28/03/2020 - 10:20:10',
              myMessage: false
            },
            {
              text: 'Io, tu, Matte e Fra',
              date: '28/03/2020 - 16:15:22',
              myMessage: true
            },
            {
              text: 'Ok a dopo',
              date: '28/03/2020 - 16:15:30',
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
              date: '10/01/2020 - 15:30:55',
              myMessage: false
            },
            {
              text: 'Perché?',
              date: '10/01/2020 - 15:50:00',
              myMessage: true
            },
            {
              text: 'C\'é il compito',
              date: '10/01/2020 - 15:50:00',
              myMessage: false
            },
            {
              text: 'Nooooo l\'avevo dimenticato',
              date: '10/01/2020 - 16:10:40',
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
              date: '10/01/2020 - 15:30:55',
              myMessage: true
            },
            {
              text: 'Ovvio, non serve chiedre, pronto a perdere?',
              date: '10/01/2020 - 15:50:00',
              myMessage: false
            },
            {
              text: 'Hahahahah bella battuta, forse nei tuoi sogni',
              date: '10/01/2020 - 15:55:20',
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
              date: '10/01/2020 - 15:30:55',
              myMessage: true
            },
            {
              text: 'Certo, come sempre (mate: es. 45-46-47-48 pag. 152, es. 98-110 pag. 180)',
              date: '10/01/2020 - 15:50:00',
              myMessage: false
            },
            {
              text: 'Grazie, la prossima volta lo prendo lo giuro',
              date: '10/01/2020 - 15:51:00',
              myMessage: true
            },
            {
              text: 'Sisi dici sempre cosí, poi ogni volta é sempre la stessa storia, non cambi mai',
              date: '10/01/2020 - 16:15:20',
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
              date: '10/01/2020 - 15:30:55',
              myMessage: false
            },
            {
              text: 'Gia fatto',
              date: '10/01/2020 - 15:50:00',
              myMessage: true
            },
            {
              text: 'Tranqillo',
              date: '10/01/2020 - 15:59:20',
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
              date: '10/01/2020 - 15:30:55',
              myMessage: true
            },
            {
              text: 'Si, vai tranquillo ci sono',
              date: '10/01/2020 - 15:50:00',
              myMessage: false
            },
            {
              text: 'Perfetto con te siamo in 10',
              date: '10/01/2020 - 15:51:00',
              myMessage: true
            },
            {
              text: 'A venerdí',
              date: '10/01/2020 - 15:55:45',
              myMessage: true
            },
          ],
        },
      ],
      counter: 0,
      writeMessage: '',
      
    };
  },

  methods:{

    getDate(){
      const date = new Date();

      const y = date.getFullYear();
      const mo = date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth();
      const d = date.getDay() < 10 ? '0'+date.getDay() : date.getDay();

      const h = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
      const mi = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
      const s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

      return `${d}/${mo}/${y} - ${h}:${mi}:${s}`
    },

    addMessage(message){
      this.listChat[this.counter].chat.push(
        {
          text: message,
          date: this.getDate(),
          myMessage: true
        },
      );

      this.writeMessage = '';

      setTimeout(this.bootMessage, 1000);
    },

    bootMessage(){
      this.listChat[this.counter].chat.push(
        {
          text: 'BOT (L\'utente non é al momento online le risponderá appena leggerá il messaggio)',
          date: this.getDate(),
          myMessage: false
        },
      )
    }
  },

  computed(){

  },

  mounted(){

  },

}).mount('#app');