const jwt = require('jsonwebtoken');

const authenticateJWTMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1];
    if(token === undefined || token === null) {
        return res.status(401).json({'error': 'Unauthorized'});
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if(err){
            return res.status(403).json({'error': 'Unauthorized'});
        }
        //Se podría comprobar si el role es admin y si lo es entonces pasar al siguiente paso
        if(payload?.role !== "admin"){
            return res.status(401).json({'error': 'Does not have priviligies'});
        }
        next();
    })
}

module.exports = authenticateJWTMiddleware;