const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://komal:7218055734@cluster0.2plqcoi.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
