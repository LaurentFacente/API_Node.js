const Sauce = require("../models/sauce");
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    console.log('ok');
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;
        Sauce.findOne({ _id: req.params.id })
            .then((sauce) => {
                console.log(sauce.userId + ' ' +userId);
                if (sauce.userId == userId) {
                    next();
                } else {
                    res.status(401).json({ message: "vous n'êtes pas le proprietaire de cette sauce" })
                }
            })
            .catch((error) => res.status(500).json({ error }));

    } catch {

        res.status(403).json({
            error: new Error('Invalid request!')
        });
    }
};