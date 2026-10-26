import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
    const id = Number(event.pathParameters.id);

    const insult = insults.find((item) => item.id === id);

    if (!insult) {
        return sendResponse(404, {message: 'Insult not found.'});
    }

    return sendResponse(200, insult);
};