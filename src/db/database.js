const mongoose = require('mongoose');
const logger = require('../utils/logger');

require('dotenv').config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_CONNECTION;
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        };
        await mongoose.connect(mongoURI, options);
        logger.info('Mongo instance started');
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
