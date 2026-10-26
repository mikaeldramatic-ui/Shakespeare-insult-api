import insults from '../../data/insults.mjs';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {
 let body;

 try {
    body = JSON.parse(event.body);
 } catch (error) {
    return sendResponse(400, {message: 'Invalid JSON in request body.' });
 }

 if (!body || !body.insult || !body.play) {
    return sendResponse(400,{message: 'Insult and play are required.' });
 }

 const newId = Math.max(...insults.map((item) => item.id)) + 1;

 const newInsult = {
    id: newId,
    insult: body.insult,
    play: body.play
 };

 insults.push(newInsult);

 return sendResponse(201, newInsult);
};