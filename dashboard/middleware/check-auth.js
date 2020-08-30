const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.API_TOKEN_SECRET);
        req.token = decoded;
        next();

    } catch (err) { 

        return res.status(401).json({
            message: "Authentication failed.",
        });

    };
    
};