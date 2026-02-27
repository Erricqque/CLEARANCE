const Datastore = require('nedb');
const path = require('path');

const db = new Datastore({
    filename: path.join(__dirname, '../data/students.db'),
    autoload: true
});

// Promisify nedb methods
const promisify = (fn) => (...args) =>
    new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });

db.findAsync = promisify(db.find.bind(db));
db.findOneAsync = promisify(db.findOne.bind(db));
db.insertAsync = promisify(db.insert.bind(db));
db.updateAsync = promisify(db.update.bind(db));
db.removeAsync = promisify(db.remove.bind(db));   // ← added this line

module.exports = db;