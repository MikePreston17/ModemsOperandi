const { Build, Customer, User, Part, Profile } = require('../models');

describe('Model Validation', () => {

    it("Should self-validate all models", () => {

        //Note: these are validated internally by the Model base class
        const customer = new Customer(5, "Julian", "Assange");
        const build = new Build(15, 5, "The Orange Box", "Gaming");
        const user = new User(1, "Mary", "Mayberry");
        const part = new Part(556, "Corsair Vengeance XYZ", 899.00);
        const profile = new Profile();

        console.log(user, customer, build, part);
    })
})