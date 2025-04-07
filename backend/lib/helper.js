import bcrypt from "bcrypt";
const saltRounds = 10;

const encrypt = {
  generatePassword: (password) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds)));
      } catch (error) {
        reject(error);
      }
    });
  },
  comparePassword: (plainPassword, hashPassword) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(bcrypt.compareSync(plainPassword, hashPassword));
      } catch (error) {
        reject(error);
      }
    });
  },
};

export { encrypt };
