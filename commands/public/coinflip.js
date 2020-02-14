'use strict';

module.exports = {
	name: 'coinflip',
	description: `Game: Coinflip. Which returns either heads or tails`,
	execute: async function (client, message, args)
	{

		let coinArray = [
			'Heads',
			'Tails',
		];

		let answer = Math.floor(Math.random() * coinArray.length);

		await message.channel.send(
		{
			embed:
			{
				color: 0x0099ff,
				description: `I flipped a coin and it turned out to be **${coinArray[answer]}**`,
			}
		});
	}
}