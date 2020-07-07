// Load up the discord.js library
const {Client, RichEmbed} = require("discord.js");
var schedule = require('node-schedule');
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
var firstName  = ["Creeper", "Steve", "Herobrine", "Esqueleto", "Enderdragon", "Ponte", "Deus Pedro", "Minerador"];
var secondName = [" maluco", " do Aether", " do Nether", " zumbi", " gente fina", " rei do PVP", " da Monarkia", " da Venarkia", " de redstone automático"];

client.on("ready", () => {
  var aguiaChannel = client.channels.find(x => x.id === "358777401670369292");
  var caueChannel = client.channels.find(x => x.id === "709786159995420769");
  var dealerChannel = client.channels.find(x => x.id === "689807693887701131");
  var aniversarios = [
    //feiju
    {id: '274383007954108416', birthday: '24/1', channels: [caueChannel, aguiaChannel]},
    //bigode
    {id: '141387809800847360', birthday: '13/1', channels: [aguiaChannel]},
    //mateus
    {id: '126752073164259328', birthday: '27/2', channels: [caueChannel, aguiaChannel]},
    //caue
    {id: '271730195877068800', birthday: '2/4', channels: [caueChannel, aguiaChannel]},
    //brunão
    {id: '352499565636878337', birthday: '20/5', channels: [caueChannel, aguiaChannel]},
    //alvaro
    {id: '126808261235048448', birthday: '30/5', channels: [caueChannel, aguiaChannel]},
    //vallen
    {id: '693657846746841169', birthday: '14/6', channels: [caueChannel, aguiaChannel]},
    //neno
    {id: '126759478807756801', birthday: '19/6', channels: [caueChannel, aguiaChannel]},
    //gabi
    {id: 'Gabi',               birthday: '19/6', channels: [caueChannel, aguiaChannel]},
    //luiza
    {id: '255746420219314177', birthday: '12/7', channels: [caueChannel, aguiaChannel]},
    //oniquiz
    {id: '331188723901267969', birthday: '27/7', channels: [caueChannel, aguiaChannel]},
    //yoshi
    {id: '197381900074090496', birthday: '17/8', channels: [caueChannel, aguiaChannel]},
    //boia
    {id: '126752237882966018', birthday: '18/8', channels: [caueChannel, aguiaChannel]},
    //bruluiz
    {id: '126874804920778752', birthday: '8/9', channels: [caueChannel, aguiaChannel]},
    //callegas
    {id: '409819373730005012', birthday: '8/10', channels: [caueChannel, aguiaChannel]},
    //eu
    {id: '126751561966682112', birthday: '9/10', channels: [caueChannel, aguiaChannel]},
    //yuuki
    {id: '315543395688906755', birthday: '5/11', channels: [caueChannel, aguiaChannel]},
    //nath akemi
    {id: '258789944926011393', birthday: '26/12', channels: [caueChannel, aguiaChannel]},
    //tety 
    {id: '689833866147528712', birthday: '22/1', channels: [dealerChannel]},
    //edu
    {id: '528576882820775947', birthday: '19/9', channels: [dealerChannel]},
    //nico
    {id: '676805610335109152', birthday: '11/3', channels: [dealerChannel]},
    //david
    {id: '289529924560093185', birthday: '20/6', channels: [dealerChannel]},
    //renan
    {id: '705384315386593321', birthday: '25/9', channels: [dealerChannel]},
  ];
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`-eae`);

  aniversarios.forEach(bd => {
    var date = bd.birthday.split('/');
    bd.channels.forEach(channel => {
      schedule.scheduleJob("1 3 " + date[0] + " " +  date[1] + " *", ()=>{
        channel.send('FELIZ ANIVERSÁRIO <@' + bd.id+ '> :tada:')
      });  
    });
  });
});


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
  if(message.content.includes("aniversarios")){
    message.channel.send(aniversarios)
  }
});

client.login(config.token);
