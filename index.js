const Discord = require("discord.js")
const client = new Discord.Client()

//Config Settings
const { TOKEN } = require("./config.json")
const { prefix } = require("./config.json")
client.login(TOKEN)
//Config Settings


//Made By RXMAN#0446
client.on("ready", () => {
    console.log("RXMAN SAY COMMANDS V12 Is Ready!")
    client.user.setActivity(`${prefix}help`)
})

//Made By RXMAN#0446
client.on("message", message => {
    if(message.content.startsWith(prefix + "help")){

        let hembed = new Discord.MessageEmbed()
        .setTitle("Say Commands V12")
        .setColor("RANDOM")
        .addField(`${prefix}say`, "To Let The Bot Say Something Normally")
        .addField(`${prefix}emsay`, "To Let The Bot Say Something But In Embed")
        .setFooter("Made By RXMAN#0446")
        .setTimestamp();

        message.channel.send(hembed);
    }
})

//Made By RXMAN#0446
client.on("message", message => {
    if(message.content.startsWith(prefix + "say")){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't Have permission")
        let msg = message.content.split(" ").slice(1).join(" ")
        if(!msg) return;

        message.channel.send(`${msg}`);
        message.delete();
    }
})

//Made By RXMAN#0446
client.on("message", message => {
    if(message.content.startsWith(prefix + "emsay")){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't Have permission")
        let emsg = message.content.split(" ").slice(1).join(" ")
        if(!emsg) return;

        let sembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${emsg}`)
        message.channel.send(sembed);
        message.delete();
    }
})



//لو سرقت البروجكت عفشخ ميتين امك ماشي ولا ايه؟