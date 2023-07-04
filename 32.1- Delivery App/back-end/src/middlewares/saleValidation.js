const { saleSchema } = require('../schema/saleSchema');

const saleBodyValidation = async (req, res, next) => {
    const validation = saleSchema.validate(req.body);

    if (validation.error) return res.status(400).json({ message: validation.error.message });

    next();
};

module.exports = { saleBodyValidation };