'use strict';

module.exports = {
    name: 'avatar',

    description: 'displays a picture of a mentioned users avatar',
    execute: async function (client, message){

        let member = message.mentions.members.first();

        if (member){
            message.channel.send({
                embed: {
                    color:'#FF6000',
                    image: {
                        url: member.user.displayAvatarURL(),                  
                    },
                }
            });   
        } else {
            message.channel.send({
                embed: {
                    color:'#FF6000',
                    image: {
                        url: message.author.displayAvatarURL(),                  
                    },
                }
            });   
        }
    }        
};
