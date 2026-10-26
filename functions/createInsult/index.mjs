import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
    const body = JSON.parse(event.body);

    const newId = Math.max(...insults.map((item) => item.id)) + 1;

    const newInsult = {
        id: newId,
        insult: body.insult,
        play: body.play
    };

    insults.push(newInsult);

    return sendResponse(201, newInsult);
};