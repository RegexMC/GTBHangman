import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { endGame, findFullGame, getCurrentRound, isHostingGame, isInGame } from "../../util/GameManager";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("endgamefull")
		.setDescription("End your current game of GTB Hangman. Restricted to host."),
	async execute(interaction: CommandInteraction) {
		if (!isInGame(interaction)) {
			await interaction.reply("Not in a game thread!");
			return;
		}

		if (isHostingGame(interaction.user.id)) {
			endGame(interaction);
			interaction.reply("Ended game");
		}
	}
};
