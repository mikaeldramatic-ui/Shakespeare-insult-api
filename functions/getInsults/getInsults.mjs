import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
    return sendResponse(200, insults);
};