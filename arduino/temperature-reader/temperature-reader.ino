#include <OneWire.h>
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 8
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
void setup(void)
{
    Serial.begin(9600);
    Serial.println("Dallas Temperature IC Control Library Demo");
    sensors.begin();
}
void loop(void)
{
  sensors.requestTemperatures();
  Serial.print("T : ");
  Serial.println(sensors.getTempCByIndex(0));
}