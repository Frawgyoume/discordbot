const discord = require("discord.js");
const client = new discord.Client();

function parser(msg) {
  let arr = msg.split(" ")
  return {
    command: arr.shift(),
    args: arr
  }
}

client.on("message", function(msg) {
  let command = parser(msg.content)
  if(msg.content === "c!ping") {
    msg.reply("Pong!")
  }else if(command.command === "c!add") {
    let total = 0
    

    for(let i of command.args) {
      total += parseInt(i)
    }

    msg.reply(total);
  }else if(command.command === "c!sub") {
    let total = parseInt(command.args[0]);
    command.args.shift();
    for(let i of command.args) {
      total -= parseInt(i)
    }

    msg.reply(total);
  }else if(command.command === "c!mul") {
    let total = parseInt(command.args[0]);
    command.args.shift();
    for(let i of command.args) {
      total *= parseInt(i)
    }

    msg.reply(total);
  }else if(command.command === "c!space") {
        //later
    })
  }
  console.log(command)
})


client.login('token');
