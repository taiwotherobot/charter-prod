const app = require('./src/app');
const PORT = process.env.svPORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})