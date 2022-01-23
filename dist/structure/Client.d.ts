/**
 * @typedef {Object} PrivateConfig
 * @property {string} token
 * @property {string} [clientId]
 */
/**
 * @typedef {Object} FolderConfig
 * @property {string} textCommand
 * @property {string} slashCommand
 * @property {string} btnListeners
 */
/**
 * @typedef {Object} BotConfig
 * @property {string} prefix
 * @property {string} version
 * @property {PrivateConfig} private
 * @property {FolderConfig} folders
 * @property {boolean} testMode
 * @property {string} [testGuild]
 */
export default class Client extends Discord.Client<boolean> {
    /**
     * @param {Discord.ClientOptions} options - Client options
     * @param {BotConfig} config - Bot configuration
     */
    constructor(options: Discord.ClientOptions, config: BotConfig);
    /** @type {BotConfig} */
    config: BotConfig;
    /** @type {Discord.Collection<string, TextCommand>} */
    commands: Discord.Collection<string, TextCommand>;
    /** @type {Discord.Collection<string, SlashCommand>} */
    slashCmds: Discord.Collection<string, SlashCommand>;
}
export type PrivateConfig = {
    token: string;
    clientId?: string;
};
export type FolderConfig = {
    textCommand: string;
    slashCommand: string;
    btnListeners: string;
};
export type BotConfig = {
    prefix: string;
    version: string;
    private: PrivateConfig;
    folders: FolderConfig;
    testMode: boolean;
    testGuild?: string;
};
import Discord from "discord.js";
import { TextCommand } from "./Command.js";
import { SlashCommand } from "./Command.js";
//# sourceMappingURL=Client.d.ts.map