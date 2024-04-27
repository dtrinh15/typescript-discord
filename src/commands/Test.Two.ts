import { Application, ApplicationCommandOptionType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import CustomClient from "../base/classes/CustomClient";
import SubCommand from "../base/classes/SubCommand";

export default class Test extends SubCommand{
    constructor(client: CustomClient) {
        super(client, {
            name: "test.two",
        });
    }

    Execute(interaction: ChatInputCommandInteraction){
        interaction.reply({ content: "Test two command executed", ephemeral: true})
    }
}