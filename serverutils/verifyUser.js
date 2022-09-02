const { verifyUser } = require("./utils/verifyUser")

module.exports.verifyUser = async (req, res, next) => {
    try {
      return await verifyUser(req.body.idToken)
    } catch(e) {
      throw e
    }  
  }