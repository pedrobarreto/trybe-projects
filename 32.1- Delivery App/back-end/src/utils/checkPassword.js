const md5 = require('md5');

const checkPassword = (password, dbPassword) => {
  const hashPassword = md5(password);

  if (hashPassword !== dbPassword) return false;

  return true;
};

module.exports = checkPassword;
