const {DateTime} = luxon;

const {createApp} = Vue;

import { listChat } from './listChat.js';

createApp({

  data(){
    return{
      nomeUtente: prompt('Inserire Nome Utente'),
      listChat,
      darkMode: false,
      login: false,
      counter: 0,
      writeMessage: '',
      searchUser: '',
      downOption: true,
      messageCounter: -1,
      thisChat: true,
    };
  },

  methods:{
    getDate(){
      const fulldata = DateTime.now()
                      .setLocale('it')
                      .toFormat('dd/MM/yyyy hh:mm:ss')
      return fulldata
    },

    addMessage(message){
      if(this.listChat[this.counter].chat[0] === ''){
        this.listChat[this.counter].chat.splice(0, 1);
        this.listChat[this.counter].chat.push(
          {
            text: message,
            date: this.getDate(),
            myMessage: true
          },
        );
      }else{
        this.listChat[this.counter].chat.push(
          {
            text: message,
            date: this.getDate(),
            myMessage: true
          },
        );
      }

      

      this.writeMessage = '';

      setTimeout(this.bootMessage, 1000);
    },

    bootMessage(){
      this.listChat[this.counter].chat.push(
        {
          text: 'BOT (L\'utente non é al momento online, le risponderá appena leggerá il messaggio)',
          date: this.getDate(),
          myMessage: false
        },
      )
    },

    deleteMessage(user, i){
      if(user.chat.length > 1){
        user.chat.splice(i, 1);
      }else{
        user.chat.splice(i, 1);
        user.chat.push('')
      }


      console.log(user);

      this.downOption === true ? this.downOption = false : this.downOption = this.downOption
    },

    downOptionF(i){
      if(this.messageCounter === i){
        this.downOption = !this.downOption
      }else{
        this.downOption = true
      }
      this.messageCounter = i;
    }
  },

  computed:{

    userFilter(){
      return this.listChat.filter(user => user.name.toLowerCase().includes(this.searchUser.toLowerCase()))
    },

  },

  mounted(){

  },

}).mount('#app');