const Discord = require("discord.js");
const client = new Discord.Client();

  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);	
});

client.on('message', msg => {
  if (msg.content === '!buy paypal') {
    msg.reply('Instant Buy | $1.50 - https://rocketr.net/buy/9d04461344ca');
   
  }
  
  if (msg.content === '!buy bitcoin') {
    msg.reply('DM Potato#5782 | Price 0.00016 Bitcoin');
    
  }
  
    if (msg.content === '!buy robux') {
    msg.reply('DM ToggledReach#2064 | 500 Robux');
   
}});


client.login('Mzc5MDg3MTY0NDQ2NzM2NDA0.DOk79Q.kAItDbawpX22Rqu4QEnPS9tJeiE');
