const Model = require('./Model');

module.exports = class Build extends Model {
    constructor(id = null, userId = null, name, category) {
        super({ id, userId, name, category })        
    }
}