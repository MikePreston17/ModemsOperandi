import Customer = require("./Customer")
import Build = require("./Build")

module.exports = class Profile {
    constructor(user: Customer, builds : Build[]) {
        Object.assign(this, {user, builds})
    }
}