'use strict'
var team = require('../../ops/team')
// const database = require('../../middleware/database');
// database.connect();

module.exports.teamsAll = (event, context, callback) => {
  team.getAll(event, context, callback)
}

module.exports.teamsOne = (event, context, callback) => {
  team.getById(event, context, callback)
}

module.exports.createTeam = (event, context, callback) => {
  team.create(event, context, callback)
}

module.exports.deleteTeam = (event, context, callback) => {
  team.deleteById(event, context, callback)
}

module.exports.updateTeam = (event, context, callback) => {
  team.update(event, context, callback)
}
