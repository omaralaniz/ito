// const axios = require('axios');

const app = new Vue({
  el: '#root',
  data: {
    url: '',
    alias: '',
    ali: null,
    msg: null
  },
  methods: {
    async createUrl() {
      let response;

      if(this.alias != ''){
          response = await fetch('/url',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            url: this.url,
            alias: this.alias
          })
        });
      } else {
          response = await fetch('/url',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            url: this.url,
          })
        });
      }



      console.log(this.alias);
      const {alias, message} = await response.json();
      this.msg = message;
      this.ali = alias;
    }
  }
})   