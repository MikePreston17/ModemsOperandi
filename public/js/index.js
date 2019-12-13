var div = $("#append-here");
var inputs = [];

$(document).on("click", "#submit-pc", function (event) {
    event.preventDefault();

    //Clear the form:
    inputs.length = 0;
    div.empty();

    //Get all inputs, print and upsert: 
    $('input').each(function () {

        var item = {
            name: this.value.trim(),
            category: "Gaming"
        };

        inputs.push(item);

        //todo: make this a bulk operation on the array of items using sequelize.bulk
        upsert(item);
        div.append(item.name + " ");
    });
});

function upsert(data) {
    $.post("/api/builds/new", data)
        .then(function (result) {
            console.log(result)
        })
}
