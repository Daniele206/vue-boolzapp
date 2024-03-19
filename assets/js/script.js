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
          text: 'BOT (L\'utente non é al momento online, le risponderá appena leggerá il messaggio)',
          date: this.getDate(),
          myMessage: false
        },
      )
    },

    deleteMessage(user, i){
      user.chat.splice(i, 1);

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
    },

    getUserInfo(user, info){
      if(user.chat.length > 0){
        return user.chat[user.chat.length - 1][info]
      }
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