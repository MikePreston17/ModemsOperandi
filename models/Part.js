const Model = require("./Model")

/** 
 * Domain Part class
 */
class Part extends Model {
    constructor(id = null, name, cost = 0.00) {
        super({ id, name, cost })
    }

    withImage(imageUrl) {
        this.imageUrl = imageUrl;
    }

    withCategory(categoryId) {
        this.categoryId = parseInt(categoryId)
    }

    fromSource(url) {
        this.url = url
    }
}

module.exports = Part;