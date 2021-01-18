const Telegraf = require('telegraf');
const bot = new Telegraf('1596328281:AAHDTz4dcEGz_6Xhx8bN9sXAsHkUKFZo6gE');
const axios = require('axios');
bot.command("start" , (ctx) => { 
 
 ctx.reply("hello,please click /fortune to know your fortune\n\n #credits: @thedevproguy ");
  
});
bot.command("fortune", (ctx) => {
  axios.get('http://yerkee.com/api/fortune')
  .then(res =>{
    ctx.reply(res.data.fortune);
  }).catch(e => {
    console.log(e)
  })
});
bot.launch();