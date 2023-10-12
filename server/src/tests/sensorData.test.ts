import { expect } from 'chai';
import request from 'supertest';
import {app} from '../';

describe('Sensor Data API', () => {
  it('should get a list of sensor data', (done) => {
    request(app)
      .get('/api/sensor-data')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  it('should create a new sensor data entry', (done) => {
    const newData = {
      heartRate: 80,
      bodyTemperature: 98.6,
    };

    request(app)
      .post('/api/sensor-data')
      .send(newData)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        // Add more assertions based on your application logic
        done();
      });
  });
});
