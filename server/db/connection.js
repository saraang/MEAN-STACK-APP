
const mongoose = require('mongoose');

function createConnection(){
    mongoose.connect('mongodb://localhost:27017/mapdemo', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected...");
    }).catch(err=>{
        console.log('error message: ' + err);
    });
    // const Cat = mongoose.model('Cat', { name: String });
    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
}

module.exports = createConnection;