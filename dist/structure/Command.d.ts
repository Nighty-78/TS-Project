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
    constructor(options: {
        name: string;
        aliases?: string[];
        description: string;
        adminOverride?: boolean;
        permissions?: bigint[];
        users?: CmdGuildUsers[];
        roles?: CmdRole[];
        run: typeof TextCommandRun;
    });
    /** @type {string} */
    name: string;
    /** @type {string[]} */
    aliases: string[];
    /** @type {string} */
    description: string;
    /** @type {boolean} */
    adminOverride: boolean;
    /** @type {bigint[]} */
    permissions: bigint[];
    /** @type {CmdGuildUsers[]} */
    users: CmdGuildUsers[];
    /** @type {CmdRole[]} */
    roles: CmdRole[];
    /** @type {TextCommandRun} */
    run: typeof TextCommandRun;
    /**
     * @param {Client} client - Discord Client extended
     */
    refresh(client: any): TextCommand;
    /**
     * @param {bigint[]} array - Array of permissions to add
     */
    addPermissionArray(array: bigint[]): TextCommand;
    /**
     * @param {bigint} permission - Permission to add to this command
     */
    addPermission(permission: bigint): void;
    /**
     * @param {string} name - The new name to use
     */
    rename(name: string): TextCommand;
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
    constructor(options: {
        name: string;
        data: any;
        adminOverride?: boolean;
        permissions?: bigint;
        users?: CmdGuildUsers[];
        roles?: CmdRole[];
        run: typeof SlashCommandRun;
    });
    /** @type {string} */
    name: string;
    /** @type {*} */
    data: any;
    /** @type {boolean} */
    adminOverride: boolean;
    /** @type {bigint[]} */
    permissions: bigint[];
    /** @type {CmdGuildUsers[]} */
    users: CmdGuildUsers[];
    /** @type {CmdRole[]} */
    roles: CmdRole[];
    /** @type {SlashCommandRun} */
    run: typeof SlashCommandRun;
}
export type CmdUser = {
    id: string;
    allow: boolean;
};
export type CmdGuildUsers = {
    guildId: string;
    userArr?: CmdUser[];
};
export type CmdRole = {
    guildId: string;
    roleIds: string[];
};
/**
 * Run function for the TextCommand class
 *
 * @param {Message} msg - Discord message
 * @param {string[]} args - Text command arguments
 * @param {Client} client - A new instance of Client
 */
declare function TextCommandRun(msg: Message, args: string[], client: any): void;
/**
 * Run function for the SlashCommand class
 *
 * @param {CommandInteraction} interaction - Slash command interaction
 * @param {Client} client - Discord Client extended
 */
declare function SlashCommandRun(interaction: CommandInteraction, client: any): void;
import { Message } from "discord.js";
import { CommandInteraction } from "discord.js";
export {};
//# sourceMappingURL=Command.d.ts.map