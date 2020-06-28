const express = require('express');
const cors = require('cors');
// Routes files
const mainRoute = require('./routes/main');
const app = express();

app.use(cors());
// Body parser
app.use(express.json());

// Mount Routes
app.use('/api/superhero', mainRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
