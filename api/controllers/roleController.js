const RoleService = require("../services/roleService");

const roleService = new RoleService();

class RoleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;
    try {
      const role = await roleService.cadastrar({ nome, descricao });
      return res.status(201).send(role);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
}

module.exports = RoleController;
