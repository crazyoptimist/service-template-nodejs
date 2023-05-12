import { FOO } from './config';
import { logger } from './utils/logger';

logger.info({ FOO }, 'Logging value of env var FOO');
