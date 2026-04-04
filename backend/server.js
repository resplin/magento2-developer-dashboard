import express from "express";
import cors from "cors";
import magentoRoutes from './src/routes/magentoRoutes.js'
import commandRoutes from './src/routes/commandRoutes.js'
import runRoutes from './src/routes/runRoutes.js'

const app = express();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/magento', magentoRoutes);
app.use('/command', commandRoutes);
app.use('/run', runRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Attempt to start the server
try {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (error) {
    console.error('Unable to connect to the server:', error);
    process.exit(1);
}
