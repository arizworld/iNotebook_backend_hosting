const {check, validationResult} = require('express-validator');

const validateNote = [
    check('title').isLength({min : 3}),
    check('description').isLength({min : 5}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    }
]
module.exports = validateNote