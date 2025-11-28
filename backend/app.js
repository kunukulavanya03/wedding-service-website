const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});