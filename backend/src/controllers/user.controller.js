const userController = {}


userController.login = async (req, res, next) => {
    try {
        res.status(200).json({message:"auth"})
    } catch (error) {

    }
}


module.exports =  userController;