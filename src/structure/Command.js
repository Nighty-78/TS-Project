import { Message, CommandInteraction } from "discord.js";
import Client from "../client.js";

/**
 * Run function for the TextCommand class
 * 
 * @param {Message} msg - Discord message
 * @param {string[]} args - Text command arguments
 * @param {Client} client - A new instance of Client
 */
function TextCommandRun(msg, args, client) {}

/**
 * Run function for the SlashCommand class
 * 
 * @param {CommandInteraction} interaction - Slash command interaction
 * @param {Client} client - Discord Client extended
 */
function SlashCommandRun(interaction, client) {}

/**
 * @typedef {Object} CmdUser
 * @property {string} id
 * @property {boolean} allow
 */

/**
 * @typedef {Object} CmdGuildUsers
 * @property {string} guildId
 * @property {CmdUser[]} [userArr]
 */

/**
 * @typedef {Object} CmdRole
 * @property {string} guildId
 * @property {string[]} roleIds
 */

export class TextCommand {
  /**
   * @typedef {Object} TextCmdOptions
   * @property {string} name
   * @property {string[]} [aliases]
   * @property {string} description
   * @property {boolean} [adminOverride]
   * @property {bigint[]} [permissions]
   * @property {CmdGuildUsers[]} [users]
   * @property {CmdRole[]} [roles]
   * @property {TextCommandRun} run
   */
  
  /**
   * @param {TextCmdOptions} options - Command options
   */
  constructor(options) {
    /** @type {string} */
    this.name = options.name.toLowerCase();
    /** @type {string[]} */
    this.aliases = options.aliases || [];
    /** @type {string} */
    this.description = options.description;
    /** @type {boolean} */
    this.adminOverride = options.adminOverride || true;
    /** @type {bigint[]} */
    this.permissions = options.permissions || [];
    /** @type {CmdGuildUsers[]} */
    this.users = options.users || [];
    /** @type {CmdRole[]} */
    this.roles = options.roles || [];
    /** @type {TextCommandRun} */
    this.run = options.run;
  }
  
  /**
   * @param {Client} client - Discord Client extended
   */
  refresh(client) {
    client.commands.set(this.name, this);
    return this;
  }
  
  /**
   * @param {bigint[]} array - Array of permissions to add
   */
  addPermissionArray(array) {
    for (const perm of array) {
      this.permissions.push(perm);
    }
    
    return this;
  }
  
  /**
   * @param {bigint} permission - Permission to add to this command
   */
  addPermission(permission) {
    this.permissions.push(permission);
  }
  
  /**
   * @param {string} name - The new name to use
   */
  rename(name) {
    this.name = name;
    return this;
  }
}

export class SlashCommand {
  /**
   * @typedef {Object} SlashCmdOptions
   * @property {string} name
   * @property {*} data
   * @property {boolean} [adminOverride]
   * @property {bigint} [permissions]
   * @property {CmdGuildUsers[]} [users]
   * @property {CmdRole[]} [roles]
   * @property {SlashCommandRun} run
   */
  
  /**
   * @param {SlashCmdOptions} options - Command options
   */
  constructor(options) {
    /** @type {string} */
    this.name = options.name.toLowerCase();
    /** @type {*} */
    this.data = options.data.toJSON();
    /** @type {boolean} */
    this.adminOverride = options.adminOverride || true;
    /** @type {bigint[]} */
    this.permissions = options.permissions || [];
    /** @type {CmdGuildUsers[]} */
    this.users = options.users || [];
    /** @type {CmdRole[]} */
    this.roles = options.roles || [];
    /** @type {SlashCommandRun} */
    this.run = options.run;
  }
}