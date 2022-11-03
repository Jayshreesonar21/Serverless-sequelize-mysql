const sequelize = require('../lib/database.js')
const Sequelize = require('sequelize')

const Team = require('../models/team.js')(sequelize, Sequelize)
// TODO: resole promise / async function
// possible race condition
Team.sync()

const getAll = async (event, ct, callback) => {
  try {
    const teams = await Team.findAll()
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data: teams,
        status: true
      })
    }
    return callback(null, response)
  } catch (err) {
    console.log('::::::: err ::::::: ', err)
  }
}

const getById = async (event, ct, callback) => {
  try {
    const id = event.pathParameters.id
    console.log('::::::::::::: id ::::::::::: ', id)
    const team = await Team.findOne({ where: { id } })
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data: team,
        status: true
      })
    }
    return callback(null, response)
  } catch (err) {
    console.log('::::::: err ::::::: ', err)
  }
}

const deleteById = async (event, ctx, callback) => {
  try {
    const id = event.pathParameters.id
    await Team.destroy({ where: { id } })

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Deleted !!',
        status: true
      })
    }
    return callback(null, response)
  } catch (err) {
    console.log('::::::::::::: Err :::::::::::::: ', err)
  }
}

const create = async (event, ct, callback) => {
  try {
    let body = event.body ? event.body : {}
    const data = JSON.parse(body)
    const { fullName, shortName, homeGround, logo, staff, description } = data

    const team = await Team.create({
      full_name: fullName,
      short_name: shortName,
      home_ground: homeGround,
      logo: logo,
      staff: staff,
      description: description
    })
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data: team,
        status: true
      })
    }
    return callback(null, response)
  } catch (err) {
    console.log('::::::: err ::::::: ', err)
  }
}

const update = async (event, ctx, callback) => {
  try {
    let body = event.body ? event.body : {}
    const id = event.pathParameters.id

    const data = JSON.parse(body)
    const { fullName, shortName, homeGround, logo, staff, description } = data

    await Team.update(
      {
        full_name: fullName,
        short_name: shortName,
        home_ground: homeGround,
        logo: logo,
        staff: staff,
        description: description
      },
      { where: { id } }
    )
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Updated !!',
        status: true
      })
    }
    return callback(null, response)
  } catch (err) {
    console.log('::::::::: err :::::::: ', err)
  }
}

module.exports = {
  create,
  getAll,
  update,
  deleteById,
  getById
}
