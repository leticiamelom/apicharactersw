const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const characters = await connection('characters')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(characters);
  }
}