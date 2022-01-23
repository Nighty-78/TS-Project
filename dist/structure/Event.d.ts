/** @template {keyof Discord.ClientEvents} Key */
export class Event<Key extends keyof Discord.ClientEvents> {
    /**
     * @param {Key} name
     * @param {RunFn<Key>} run
     */
    constructor(name: Key, run: typeof RunFn);
    /** @type {Key} */
    name: Key;
    /** @type {RunFn<Key>} */
    run: typeof RunFn;
}
import Discord from "discord.js";
/**
 * @template {keyof Discord.ClientEvents} Key
 * @param {Client} client - A new instance of Client
 * @param {Discord.ClientEvents[Key]} args - Event args
 */
declare function RunFn<Key extends keyof Discord.ClientEvents>(client: Client, ...args: Discord.ClientEvents[Key]): void;
import Client from "./Client.js";
export {};
//# sourceMappingURL=Event.d.ts.map