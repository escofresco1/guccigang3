const Discord = require("discord.js");
const client = new Discord.Client();

  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);	
});

client.on('message', msg => {
  if (msg.content === '!buy') {
    msg.reply('Oh yes forgot. https://rocketr.net/buy/9d04461344ca');
}});


client.login('Mzc5MDg3MTY0NDQ2NzM2NDA0.DOk79Q.kAItDbawpX22Rqu4QEnPS9tJeiE');