const path = require('path')

class FileController {
  show (req, res) {
    const { file } = req.params

    const filePatch = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    )

    return res.sendFile(filePatch)
  }
}

module.exports = new FileController()
