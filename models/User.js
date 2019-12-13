const Model = require('./Model')

/** Base domain User class
 *
 */
class User extends Model {
    constructor(id, firstName, lastName) {
        console.log(id, firstName, lastName)
        super({ id, firstName, lastName })
        this.name = (lastName && firstName) ? [lastName.trim(), firstName.trim(),].join(", ") : null
    }
}

module.exports = User;