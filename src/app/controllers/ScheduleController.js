const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class ScheduleController {
  async index (req, res) {
    const { date } = req.query

    const defaultDate = moment(parseInt(date || new Date().getTime()))

    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            defaultDate.startOf('day').format(),
            defaultDate.endOf('day').format()
          ]
        }
      },
      order: [['date', 'ASC']]
    })

    return res.render('schedule/index', { appointments, defaultDate })
  }
}

module.exports = new ScheduleController()
