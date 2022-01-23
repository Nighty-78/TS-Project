import Discord from "discord.js";
import Client from "./Client.js";

/**
 * @template {keyof Discord.ClientEvents} Key
 * @param {Client} client - A new instance of Client
 * @param {Discord.ClientEvents[Key]} args - Event args
 */
function RunFn(client, ...args) {}

/** @template {keyof Discord.ClientEvents} Key */
export class Event {
  /**
   * @param {Key} name
   * @param {RunFn<Key>} run
   */
  constructor(name, run) {
    /** @type {Key} */
    this.name = name;
    /** @type {RunFn<Key>} */
    this.run = run;
  }
}