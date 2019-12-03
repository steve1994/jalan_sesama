const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app');
const User = require('../model/users');

const should = chai.should();
chai.use(chaiHttp);

describe('phonebook', function () {

    User.collection.drop();

})
