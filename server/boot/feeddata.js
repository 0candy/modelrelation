module.exports = function(app) {
    var modelA = app.models.modelA;
    var modelB = app.models.modelB;
    var modelC = app.models.modelC;

    modelA.create({"userID":"123","age":31,"city":"Madurai"}, function(error,data){
        console.log("success")
    });

    modelB.create({"userID":"123","propertyA":"31","propertyB":"Madurai"}, function(error,data){
        console.log("success")
    });

    modelC.create({"propertyA":"31","detail":"31"}, function(error,data){
        console.log("success");
    });
}