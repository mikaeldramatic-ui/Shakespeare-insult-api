import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
    const id = Number(event.pathParameters.id);
    const body = JSON.parse(event.body);

    const index = insults.findIndex((item) => item.id === id);

    if (index === -1) {
        return sendResponse(404, {message: 'Insult not found.'});
    }

    const updatedInsult = {
        id: id,
        insult: body.insult,
        play: body.play
    };

    insults[index] = updatedInsult;

    return sendResponse(200, updatedInsult);
};