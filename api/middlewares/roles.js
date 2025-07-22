const database = require("../models");

const roles = (listaRoles) => {
  return async (req, res, next) => {
    const { usuarioId } = req;

    console.log("Verificando roles para o usuário:", usuarioId);

    try {
      const usuario = await database.usuarios.findOne({
        where: { id: usuarioId },
        include: [
          {
            model: database.roles,
            as: "usuario_roles",
            attributes: ["id", "nome"],
          },
        ],
      });

      if (!usuario) {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }

      const temRoleRequerida = usuario.usuario_roles
        .map((role) => role.nome)
        .some((role) => listaRoles.includes(role));

      if (!temRoleRequerida) {
        return res.status(403).send({ message: "Acesso negado" });
      }

      return next();
    } catch (error) {
      console.error("Erro no middleware de roles:", error);
      return res.status(500).send({ message: "Erro no servidor" });
    }
  };
};

module.exports = roles;
