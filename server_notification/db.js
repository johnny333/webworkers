"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var uuidv1 = require('uuid/v1');
var JsonDB = require('node-json-db');
var _ = require("lodash");
var db = new JsonDB("messages_db", true, false);

var Database = function Database() {
    _classCallCheck(this, Database);

    this.registerMessage = function (_ref) {
        var name = _ref.name,
            message = _ref.message;

        db.push("/messages[]", {name: name, message: message, id: uuidv1(), taken:false});
        db.save();
    };

    this.getMessageLast = function () {
            var data = db.getData("/messages");
            console.log(data);
            if([...data].length>0){
                db.delete("/messages[-1]");
            }
            return _.last(data)?_.last(data):{
                name:"_",
                message:"_"
            };
    };
};

module.exports = Database;