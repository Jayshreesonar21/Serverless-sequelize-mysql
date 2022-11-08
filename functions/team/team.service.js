const Sequelize = require('sequelize')
const sequelize = require('../../models')

const Team = require('../../models/team.js')(sequelize, Sequelize)
Team.sync()

const getAll = async event => {
  try {
    const teams = await Team.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: teams,
        status: true
      })
    }
  } catch (err) {
    console.log('::::::: err getAll::::::: ', err)
  }
}

const getById = async event => {
  try {
    const id = event.pathParameters.id

    const team = await Team.findOne({ where: { id } })
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: team,
        status: true
      })
    }
  } catch (err) {
    console.log('::::::: err getById::::::: ', err)
  }
}

const create = async event => {
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
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: team,
        status: true
      })
    }
  } catch (err) {
    console.log('::::::: err create::::::: ', err)
  }
}

const deleteById = async event => {
  try {
    const id = event.pathParameters.id
    await Team.destroy({ where: { id } })

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Deleted !!',
        status: true
      })
    }
  } catch (err) {
    console.log('::::::::::::: Err deleteById:::::::::::::: ', err)
  }
}

const update = async event => {
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
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Updated !!',
        status: true
      })
    }
  } catch (err) {
    console.log('::::::::: err update :::::::: ', err)
  }
}

module.exports = {
  create,
  getAll,
  update,
  deleteById,
  getById
}
