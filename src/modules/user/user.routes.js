import express from "express";
import isAuthenticated from "../../middlewares/auth.js";
const router = express.Router();

import * as userController from "./user.controller.js";

// GET /register → mostra formulário
router.get("/register", (req, res) => {
  res.render("register", { title: "Criar Conta" });
});

// POST /register → processa cadastro
router.post("/register", userController.register);

router.get("/login", (req, res) => {
  res.render("login", { title: "Entrar" });
});

router.post("/login", userController.login);

router.get("/logout", userController.logout);

// Rota protegida (exemplo)
router.get("/feed", isAuthenticated, (req, res) => {
  res.render("feed", { title: "Feed | Shortz-App" });
});

export default router;
