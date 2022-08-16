const app = require('./src/app');
const PORT = process.env.svPORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})