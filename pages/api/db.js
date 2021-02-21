import db from '../../db.json';

export default function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  // Para não ocorrer o erro CORS quando tentar acessar outras apps (quizes de outras pessoas)
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  response.json(db);
}