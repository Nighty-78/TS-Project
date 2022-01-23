/**
 * @typedef {Object} BtnUser
 * @property {string} id
 * @property {boolean} allow
 */
/**
 * @typedef {Object} BtnGuildUsers
 * @property {string} guildId
 * @property {BtnUser[]} [userArr]
 */
/**
 * @typedef {Object} BtnRole
 * @property {string} guildId
 * @property {string[]} roleIds
 */
export default class Button {
    /**
     * @typedef {Object} ButtonHandlerOptions
     * @property {string} id
     * @property {Array} [permissions]
     * @property {BtnGuildUsers[]} [users]
     * @property {BtnRole[]} [roles]
     * @property {OnButtonClick} onclick
     */
    /**
     * @param {ButtonHandlerOptions} options
     */
    constructor(options: {
        id: string;
        permissions?: any[];
        users?: BtnGuildUsers[];
        roles?: BtnRole[];
        onclick: typeof OnButtonClick;
    });
    /** @type {string} */
    id: string;
    /** @type {Array} */
    permissions: any[];
    /** @type {BtnGuildUsers[]} */
    users: BtnGuildUsers[];
    /** @type {BtnRole[]} */
    roles: BtnRole[];
    /** @type {OnButtonClick} */
    onclick: typeof OnButtonClick;
    /**
     * Runs the button onclick function
     *
     * @param {ButtonInteraction} interaction - Button interaction
     * @param {Client} client - A new instance of Client
     */
    click(interaction: ButtonInteraction, client: Client): void;
}
export type BtnUser = {
    id: string;
    allow: boolean;
};
export type BtnGuildUsers = {
    guildId: string;
    userArr?: BtnUser[];
};
export type BtnRole = {
    guildId: string;
    roleIds: string[];
};
/**
 * @param {ButtonInteraction} interaction - Button interaction
 * @param {Client} client - New instance of Client
 */
declare function OnButtonClick(interaction: ButtonInteraction, client: Client): void;
import { ButtonInteraction } from "discord.js";
import Client from "../Client.js";
export {};
//# sourceMappingURL=Button.d.ts.map