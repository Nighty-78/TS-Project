import { TextCommand, SlashCommand } from  "../Command.js";
import Button from "../listeners/Button.js";
import Client from "../Client.js";
import { readdir } from "node:fs/promises";

export default class FileHandler {
  /**
   * @param {Client} client - Discord Client extended
   */
  constructor(client) {
    /** @type {string} */
    this.importPath = "../../";
    
    /** @type {string} */
    this.truePath = client.config.folders.src;
    
    /**
     * @typedef {Object} CommandFolders
     * @property {string} text
     * @property {string} slash
     */
    
    /** @type {CommandFolders} */
    this.cmd = {
      text: client.config.folders.textCommand,
      slash: client.config.folders.slashCommand
    };
    
    /** @type {string} */
    this.btnListenerFolder = client.config.folders.btnListeners;
  }
  
  async init() {
    /**
     * @typedef {Object} Paths
     * @property {strint} trueCmd
     * @property {string} trueSlash
     * @property {string} trueBtns
     * @property {string} importCmd
     * @property {string} importSlash
     * @property {string} importBtn
     */
    
    /** @type {Paths} */
    const folders = {
      trueCmd: this.truePath + "/" + this.cmd.text,
      trueSlash: this.truePath + "/" + this.cmd.slash,
      trueBtns: this.truePath + "/" + this.btnListenerFolder,
      importCmd: this.importPath + this.cmd.text + "/",
      importSlash: this.importPath + this.cmd.slash + "/",
      importBtn: this.importPath + this.btnListenerFolder + "/"
    };
    
    /** @type {string[]} */
    const unfilteredCmds = await readdir(folders.trueCmd);
    
    /** @type {string[]} */
    const filteredCmds = unfilteredCmds.filter(file => file.endsWith(".js"));
    
    /** @type Promise<TextCommand>[]} */
    const cmdPromises = filteredCmds.map(async(file) => {
      const { default: cmd } = await import(`${folders.importCmd}${file}`);
      return cmd;
    });
    
    /** @type {TextCommand[]} */
    const commands = await Promise.all(cmdPromises);
    
    /** @type {string[]} */
    const slashCmdsUnfiltered = await readdir(folders.trueSlash);
    
    /** @type {string[]} */
    const filteredSlashCmds = slashCmdsUnfiltered.filter(file => file.endsWith(".js"));
    
    /** @type {Promise<SlashCommand>[]} */
    const slashCmdPromises = filteredSlashCmds.map(async(file) => {
      const { default: slash } = await import(`${folders.importSlash}${file}`);
      return slash;
    });
    
    /** @type {SlashCommand[]} */
    const slashCommands = await Promise.all(slashCmdPromises);
    
    /** @type {string[]} */
    const unfilteredBtns = await readdir(folders.trueBtns);
    
    /** @type {string[]} */
    const filteredBtns = unfilteredBtns.filter(file => file.endsWith(".js"));
    
    /** @type {Promise<Button>[]} */
    const buttonPromises = filteredBtns.map(async(file) => {
      const { default: btn } = await import(`${folders.importBtn}${file}`);
      return btn;
    });
    
    /** @type {Button[]} */
    const buttons = await Promise.all(buttonPromises);
    
  
    
    /** @type {{commands: TextCommand[], slashCmds: SlashCommand[], buttons: Button[]}} */
    this.data = {
      commands,
      slashCmds: slashCommands,
      buttons
    }
    
    return this;
  }
  
  get textCommands() {
    if (this.data && this.data.commands) return this.data.commands;
    
    return undefined;
  }
  
  get slashCommands() {
    if (this.data && this.data.slashCmds) return this.data.slashCmds;
    
    return undefined;
  }
  
  get buttons() {
    if (this.data && this.data.buttons) return this.data.buttons;
    
    return undefined;
  }
}