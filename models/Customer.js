const User = require('./User')

/**
 *  Base domain Customer class
 */
class Customer extends User {
    constructor(id = null, firstName, lastName) {
        super(id, firstName, lastName)
    }
}

module.exports = Customer;