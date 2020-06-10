// Load up the discord.js library
const {Client, RichEmbed} = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Client();

// Here we load the config.json file that contains our token and our prefix values. 
// const config = {
//   "token": process.env.DISCORD_TOKEN,
//   "prefix" : process.env.PREFIX
// }
const config = {
  "token": process.env.DISCORD_TOKEN,
  "prefix" : process.env.PREFIX
}
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`-eae`);
});

var firstName  = ["Creeper", "Steve", "Herobrine", "Esqueleto", "Enderdragon", "Ponte", "Deus Pedro", "Minerador"];
var secondName = [" maluco", " do Aether", " do Nether", " zumbi", " gente fina", " rei do PVP", " da Monarkia", " da Venarkia"];

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.toLowerCase().indexOf(config.prefix.toLowerCase()) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  
  if (message.content == "-eae") {
    const embed = new RichEmbed()
    .setTitle("Funcionalidades:")
    .setColor(0xf2aaff)
    .addField("Nome maluco do minecraft","-eae minecraft")
    message.channel.send(embed);
  }
  if (message.content.slice(config.prefix.length) == " minecraft") {
    var d = new Date();
    var t = d.getHours();
    var friendlyMessage;
    if (t < 6) {
      friendlyMessage = "boa madrugada";
    }
    else if(t < 12){
      friendlyMessage = "bom dia";
    }
    else if(t < 18){
      friendlyMessage = "boa tarde";
    }
    else if(t < 24){
      friendlyMessage = "boa noite";
    }
    
    const embed = new RichEmbed()
    .setTitle("fala meu parça, primeiramente "+friendlyMessage +".")
    .setColor(0xf2aaff)
    .setDescription("Segundamente segue ai os comandos do minecraft:")
    .addField("pra sacar seu mega nome maluco minecraft:","-eae minecraft -name")
    .addField("pra ver a lista dos primeiros nomes doidos:","-eae minecraft -firstnames")
    .addField("pra ver os sobrenomes wacky and cool.", "-eae minecraft -lastnames")
    .addField(".", " Terceiramente tamo ai pensando em coisas mais sapecas para realizar ai com o bot graças a deus, talvez fazer a galera adicionar primeiros e segundos nomes. \n bot ta WIP ainda né fi cuidado a cabeça :construction_worker: :construction: ")
    message.channel.send(embed);
  }
  if(message.content.includes("minecraft -name")) {
    var crazyName = firstName[Math.floor(Math.random() * firstName.length)] + secondName[Math.floor(Math.random() * secondName.length)];
    message.channel.send(crazyName);
  }
  if (message.content.includes("minecraft -firstnames")) {
    message.channel.send( firstName.toString());
  }
  if (message.content.includes("minecraft -lastnames")) {
    message.channel.send( secondName.toString());
  }
});

client.login(config.token);
