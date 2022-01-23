export default class FileHandler {
    /**
     * @param {Client} client - Discord Client extended
     */
    constructor(client: Client);
    /** @type {string} */
    importPath: string;
    /** @type {string} */
    truePath: string;
    /**
     * @typedef {Object} CommandFolders
     * @property {string} text
     * @property {string} slash
     */
    /** @type {CommandFolders} */
    cmd: {
        text: string;
        slash: string;
    };
    /** @type {string} */
    btnListenerFolder: string;
    init(): Promise<FileHandler>;
    /** @type {{commands: TextCommand[], slashCmds: SlashCommand[], buttons: Button[]}} */
    data: {
        commands: TextCommand[];
        slashCmds: SlashCommand[];
        buttons: Button[];
    };
    get textCommands(): TextCommand[];
    get slashCommands(): SlashCommand[];
    get buttons(): Button[];
}
import { TextCommand } from "../Command.js";
import { SlashCommand } from "../Command.js";
import Button from "../listeners/Button.js";
import Client from "../Client.js";
//# sourceMappingURL=Handler.d.ts.map