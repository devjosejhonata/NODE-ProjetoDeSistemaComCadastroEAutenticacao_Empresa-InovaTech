const getDb = require('../util/database').getDb; // Importa a conexão com o banco

class User {
  constructor(username, email, password, githubId = null) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.githubId = githubId;
  }

  // Método para salvar o usuário no banco de dados
  async save() {
    const db = getDb();
    return await db.collection('users').insertOne(this);
  }

  // Método estático para buscar um usuário pelo e-mail
  static async findByEmail(email) {
    const db = getDb();
    return await db.collection('users').findOne({ email });
  }

  // Método estático para buscar um usuário pelo GitHub ID
  static async findOne(query) {
    const db = getDb();
    return await db.collection('users').findOne(query);
  }

  // Método estático para buscar um usuário pelo ID
  static async findById(id) {
    const db = getDb();
    const ObjectId = require('mongodb').ObjectId;
    return await db.collection('users').findOne({ _id: new ObjectId(id) });
  }
}

module.exports = User;
