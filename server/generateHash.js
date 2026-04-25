const bcrypt = require('bcrypt');

bcrypt.hash("cuneo2026", 10, (err, hash) => {
  console.log("HASH PASSWORD:");
  console.log(hash);
});