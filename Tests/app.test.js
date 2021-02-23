import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../src/index.js";
import to_do from "../src/database/models/to_do_list.model.js"
import User from "../src/database/models/user.model.js"

chai.use(chaiHttp);

describe('TODO', () => {
    before('Users tests',(done) => {
        User.remove({}, (err) => {
            done();
        })
    })
    describe('Users tests', () => {
        it('Should signup successfully', (done) => {
            chai
                .request(server)
                .post('/user/signup')
                .send({ 
                    name: 'John Doe', 
                    email: 'john.doe@example.com',
                    password: 'nchdgrswhr' 
                })
                .end((err,res) => {
                    expect(res.body.message).to.eql('User with email john.doe@example.com was successfully signedup')
                    //expect(res.body);
                    done();
                })
        })
        it('Should login successfully', (done) => {
            chai
                .request(server)
                .post('/user/auth')
                .send({  
                    email: 'john.doe@example.com',
                    password: 'nchdgrswhr' 
                })
                .end((err,res) => {
                    expect(res.status).to.eql(200)
                    expect(res.body.token)
                    expect(res.body.message).to.eql('User logged in successfully')
                    //expect(res.body);
                    done();
                })
            })
        })    
    })

