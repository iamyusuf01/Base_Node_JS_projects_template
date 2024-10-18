 const express  = require('express');

const {ServerConfig, Logger} = require('./config')
const apiRoutes = require('./routes');
const logger = require('./config/logger-config');

const app = express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on PORT : ${ServerConfig.PORT}`);  
    logger.info("Successfully started the server", {});
});