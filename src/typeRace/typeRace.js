import { reConnectHandler } from "./handlers/reConnectHandler";
import { roundHandler } from "./handlers/roundHandler";
import { waitingPlayerHandler } from "./handlers/waitingPlayerHandler";

export function typeRace(user, players, socket) {
    players.push({ socket, user, rounds: [] })
    reConnectHandler(user, players, socket)
    waitingPlayerHandler(players, socket)
    if (players.length && players.length % 2 === 0) {
        roundHandler(players)
    }
}