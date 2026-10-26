import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
    const query = event.queryStringParameters || {};

    let result = insults;

    if (query.search) {
        const search = query.search.toLowerCase();
        result = result.filter((item) => item.insult.toLowerCase().includes(search));
    }

    if (query.play) {
        const play = query.play.toLowerCase();
        result = result.filter((item) => item.play.toLowerCase() === play);
    }

    return sendResponse(200, result);
};