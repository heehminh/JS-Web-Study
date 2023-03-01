// Promise -> async, await
class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await this.delay(1000);
    if (
      (id === "minhee" && password === "kim") ||
      (id === "anna" && password === "elsa")
    ) {
      return id;
    } else {
      throw new Error("not found");
    }
  }

  async getRoles(user) {
    await this.delay(1000);
    if (user === "minhee") {
      return { name: "minhee", role: "admin" };
    } else {
      throw new Error("no access");
    }
  }

  async getUserData(id, password) {
    const name = await this.loginUser(id, password);
    const user = await this.getRoles(name);
    return `Hello ${user.name}, you have a ${user.role} role!`;
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .getUserData(id, password)
  .then((str) => alert(str))
  .catch(console.log);
