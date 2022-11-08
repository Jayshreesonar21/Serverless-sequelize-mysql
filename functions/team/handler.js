'use strict'
var team = require('./team.service')

module.exports.teamsAll = async event => {
  return await team.getAll(event)
}

module.exports.teamsOne = async event => {
  return await team.getById(event)
}

module.exports.createTeam = async event => {
  return await team.create(event)
}

module.exports.deleteTeam = async event => {
  return await team.deleteById(event)
}

module.exports.updateTeam = async event => {
  return await team.update(event)
}
