//this lets u require config.. don't have to put js or json, it just looks for it..
//don't want this available anywhere else, so module..

var configValues = require('./config');

// from mlab mongodb://<dbuser>:<dbpassword>@ds127065.mlab.com:27065/nodetodosample
module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds127065.mlab.com:27065/nodetodosample';
    }
}

