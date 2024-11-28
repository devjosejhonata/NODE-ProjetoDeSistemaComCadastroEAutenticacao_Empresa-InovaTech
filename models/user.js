const getDb = require('../util/database').getDb; // Importa a função para obter a conexão com o banco de dados

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Método para salvar o usuário no banco de dados
  async save() {
    const db = getDb();
    return await db.collection('users').insertOne(this); // Aguarda a inserção no banco
  }

  // Método para buscar um usuário pelo e-mail
  static async findByEmail(email) {
    const db = getDb();
    return await db.collection('users').findOne({ email }); // Busca o usuário pelo e-mail
  }
}

module.exports = User;
