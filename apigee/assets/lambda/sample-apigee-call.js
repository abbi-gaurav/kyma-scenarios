const axios = require("axios");
baseURL = process.env['AG_GATEWAY_URL'];

module.exports = { 
    main: async function (event, context) {
    const response = await axios({
        method: 'get',
        url: `${baseURL}`
    });
    console.log(response.headers);
    console.log(response.data);
    return response.data;
} 
}