import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";

const router = Router();

router.get(`/`, (req, res, next) => {
  res.send(`hi from auth route GET`);
  return;
});

router.post(`/signIn`, signIn);
router.post(`/signUp`, signUp);

export default router;
