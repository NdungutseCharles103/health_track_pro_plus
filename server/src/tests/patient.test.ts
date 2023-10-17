import { expect } from 'chai';
import request from 'supertest';
import { app } from '..';

describe('patient Data API', () => {
   it('should get a list of patient data', (done) => {
      request(app)
         .get('/api/patient')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            expect(res.body.data).to.be.an('array');
            done();
         });
   });

   it('should create a new patient data entry', (done) => {
      const newData = {
         patientName: 'John Doe',
         patientNationalID: '1234567890123456',
         frequentSickness: 'Cold',
         disease: 1,
      };

      request(app)
         .post('/api/patient')
         .send(newData)
         .expect(201)
         .end((err, res) => {
            if (err) return done(err);
            // Add more assertions based on your application logic
            done();
         });
   });
});
