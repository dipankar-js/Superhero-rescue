const express = require('express');
const path = require('path');
const cors = require('cors');

// Routes files
const mainRoute = require('./routes/main');
const app = express();

app.use(cors());
// Body parser
app.use(express.json());

// Mount Routes
app.use('/api/superhero', mainRoute);

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
	});
}

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
