import { TextCommand, SlashCommand } from "./Command.js";
import Discord from "discord.js";

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

export default class Client extends Discord.Client {
  /**
   * @param {Discord.ClientOptions} options - Client options
   * @param {BotConfig} config - Bot configuration
   */
  constructor(options, config) {
    super(options);
    /** @type {BotConfig} */
    this.config = config;
    /** @type {Discord.Collection<string, TextCommand>} */
    this.commands = new Discord.Collection();
    /** @type {Discord.Collection<string, SlashCommand>} */
    this.slashCmds = new Discord.Collection();
  }
}