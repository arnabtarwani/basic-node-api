const dotenv = require('dotenv');
const app = require('../index');

const result = dotenv.config();

if (result.error) {
    dotenv.config({ path: '/.env' });
}

if (process.env.NODE_ENV === 'development') {
    app.listen(app.get('port'), () => {
        console.log(
            `🌍 Server is running at http://localhost:${app.get('port')}`
        );
    });
}
