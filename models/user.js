const getDb = require('../utils/database').getDb; // Importa a função para obter a conexão com o banco de dados

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
}

module.exports = User;
