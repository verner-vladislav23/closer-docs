import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const _ = require('lodash')

const spec = require('./swagger-config.yaml');
const auth = require('./parts/auth.yaml');
const user = require('./parts/user.yaml');
const common = require('./parts/common/index.yaml');

const fullSpec = _.merge({}, spec, auth, user, common)

const ui = SwaggerUI({
  spec: fullSpec,
  dom_id: '#swagger',
});

// ui.initOAuth({
//   appName: "Swagger UI Webpack Demo",
//   // See https://demo.identityserver.io/ for configuration details.
//   clientId: 'implicit'
// });
