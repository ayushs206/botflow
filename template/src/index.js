import './config/env.js';

import { initiateClient } from './botClient.js';
import './db/manager.js';

(async () => {
    await initiateClient();
})();