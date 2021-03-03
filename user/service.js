//const config = require('../config.json');
const db = require('./db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    create,
    update,
    delete:_delete,
};

async function authenticate({ username, password}) {
    const user = await User.findOne({username});
   
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret, {
            expiresIn: '4d'
        });
        return {
            ...userWithoutHash,
            token
        }
    }
}

async function getAll() {
    return await User.find().select('-hash');;
}

async function create(userParam) {
    console.log(userParam);
    const user = new User(userParam);

    await user.save();
}
async function update(id, userParam) {
    console.log(id)
    const user = await User.findOne({_id:id});
    console.log(user)

    if (!user) throw 'User not found';

    // copy userParam properties to user
    Object.assign(user, userParam);
    console.log(user);
    await user.save();
    return user;
}
async function _delete(id) {
    await User.findByIdAndRemove(id);
}