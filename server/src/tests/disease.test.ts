import { expect } from 'chai';
import request from 'supertest';
import { app } from '../';

describe('disease Data API', () => {
   it('should get a list of disease data', (done) => {
      request(app)
         .get('/api/disease')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            expect(res.body.data).to.be.an('array');
            done();
         });
   });

   it('should create a new disease data entry', (done) => {
      const newData = {
         name: 'Cold',
         description: 'Cold is a viral infectious disease of the upper respiratory tract that primarily affects the nose.',
      };

      request(app)
         .post('/api/disease')
         .send(newData)
         .expect(201)
         .end((err, res) => {
            if (err) return done(err);
            // Add more assertions based on your application logic
            done();
         });
   });
});
