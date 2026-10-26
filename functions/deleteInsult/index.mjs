import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
    const id = Number(event.pathParameters.id);

    const index = insults.findIndex((item) => item.id === id);

    if (index === -1) {
        return sendResponse(404, {message: 'Insult not found.' });
    }

    const deletedInsult = insults.splice(index, 1)[0];

    return sendResponse(200, {message: 'Insult deleted.', insult: deletedInsult });
};