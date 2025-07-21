const { Router } = require("express");

const router = Router();

const RoleController = require("../controllers/roleController");

router
  .post("/role", RoleController.cadastrar)
  .get("/role")
  .get("/role/:id")
  .delete("/role/:id")
  .put("/role/:id");

module.exports = router;