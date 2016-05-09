module.exports = function(ModelA) {
  ModelA.callMe = function(cb){
    ModelA.find({
      "include": {
          "RelationB": {
            "relation":"RelationC"
          }
        }
      }, function(err, model) {
      cb(null, model);
    });
  }

  ModelA.remoteMethod('callMe',{
    returns: {arg:'relationA',type:"string"},
    http: {path: '/callme', verb: 'get'}
  })
};