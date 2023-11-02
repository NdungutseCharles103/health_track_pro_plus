#define samp_siz 4
#define rise_threshold 4
int sensorPin = 0;

float reads[samp_siz];
float sum = 0;
int ptr = 0;

long last_beat = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Take a series of 20 readings from the pulse sensor and average them.
  float reader = 0;
  for (int i = 0; i < 20; i++) {
    reader += analogRead(sensorPin);
  }
  reader /= 20;

  // Update the buffer of readings and calculate the average reading.
  sum -= reads[ptr];
  sum += reader;
  reads[ptr] = reader;
  float last = sum / samp_siz;

  // Detect a beat and calculate the heart rate.
  if (last > reads[ptr - 1]) {
    long now = millis();
    long first = now - last_beat;
    last_beat = now;

    float print_value = 60000. / (0.4 * first + 0.3 * reads[ptr - 1] + 0.3 * reads[ptr - 2]);
    Serial.println(print_value);
  }

  // Increment the pointer and wrap it around if necessary.
  ptr++;
  if (ptr >= samp_siz) {
    ptr = 0;
  }
}