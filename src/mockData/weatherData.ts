// mockWeatherData.ts

export const mockCurrent = {
  dt: 1763954411,
  sunrise: 1763957907,
  sunset: 1763999719,
  temp: 24.13,
  feels_like: 23.41,
  pressure: 1011,
  humidity: 31,
  dew_point: 5.96,
  uvi: 0,
  clouds: 84,
  visibility: 10000,
  wind_speed: 1.91,
  wind_deg: 57,
  wind_gust: 2,
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
  ],
};

// paste your full hourly array here
export const mockHourly = [
  {
    dt: 1763953200,
    temp: 24.13,
    feels_like: 23.41,
    pressure: 1011,
    humidity: 31,
    dew_point: 5.96,
    uvi: 0,
    clouds: 84,
    visibility: 10000,
    wind_speed: 1.91,
    wind_deg: 57,
    wind_gust: 2,
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
    ],
    pop: 0,
  },
  // ...rest of your hourly objects
];

// paste your full daily array here
export const mockDaily = [
  {
    dt: 1763978400,
    sunrise: 1763957907,
    sunset: 1763999719,
    moonrise: 1763970060,
    moonset: 1764012240,
    moon_phase: 0.13,
    summary: "There will be partly cloudy today",
    temp: {
      day: 37.12,
      min: 24.06,
      max: 38.06,
      night: 27.47,
      eve: 33.66,
      morn: 24.06,
    },
    feels_like: { day: 34.76, night: 26.54, eve: 31.61, morn: 23.33 },
    pressure: 1010,
    humidity: 15,
    dew_point: 6.1,
    wind_speed: 3.69,
    wind_deg: 60,
    wind_gust: 9.7,
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
    ],
    clouds: 74,
    pop: 0,
    uvi: 8.38,
  },
  // ...rest of your daily objects
];

// convenient combined shape, similar to your real API
export const mockWeatherResponse = {
  current: mockCurrent,
  hourly: mockHourly,
  daily: mockDaily,
};
