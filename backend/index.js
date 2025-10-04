import app from './app.js';
import { PORT } from './utils/config.js';
import { connectDB } from './db.js';
import { log } from './utils/logger.js';

// Try to connect the db.
await connectDB();

// Start server.
app.listen(PORT, () => log(`Server running on port ${PORT}`));
