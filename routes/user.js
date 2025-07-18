import express from "express";
const router = express.Router();

// Định nghĩa route cơ bản cho user
router.get('/', (req, res) => {
  res.send('User route is working!');
});

export default router; 