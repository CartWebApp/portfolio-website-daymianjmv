const { MessageEmbed } = require('discord.js');


const embed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('Daymian\'s Portfolio')
    .setURL('https://www.daymian.xyz')
    .setAuthor('Daymian', 'https://www.daymian.xyz/imgs/djCrownOfThorns.png', 'https://www.daymian.xyz')
    .setDescription('A web developer with a passion for crafting interactive, visually engaging web experiences.')
    .setThumbnail('https://www.daymian.xyz/imgs/djCrownOfThorns.png')
    .addFields(
        { name: 'About Me', value: 'Click [here](https://www.daymian.xyz/about) to learn more about me.' },
        { name: 'Projects', value: 'Check out my [projects](https://www.daymian.xyz/projects).' },
        { name: 'Contact', value: 'Email: business@daymian.xyz' }
    )
    .setImage('https://www.daymian.xyz/imgs/portfolio-banner.png') 
    .setTimestamp()
    .setFooter('Daymian\'s Portfolio', 'https://www.daymian.xyz/imgs/djCrownOfThorns.png');

