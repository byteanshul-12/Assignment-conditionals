/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here

  let recommends = {
    season:"",
    activity:""
  }

  if(month < 1 || month > 12){
    return null 
  }
  
  if(month === 12 || month === 1 || month === 2){
    recommends.season = "Winter"
  }

  if( month === 3 || month === 4 || month === 5 ){
    recommends.season = "Spring"
  }

  if (month === 6 || month === 7 || month === 8 ){
    recommends.season = "Summer"
  }

  if (month === 9 || month === 10 || month == 11){
    recommends.season = "Autumn"
  }

  if(recommends.season === "Winter" && temperature < 0 ){
    recommends.activity = "skiing"
  }

  else if (recommends.season === "Winter" && temperature >= 0){
    recommends.activity = "ice skating"
  }

  else if (recommends.season === "Spring" && temperature > 20){
    recommends.activity = "hiking"
  }

  else if (recommends.season === "Spring" && temperature <= 20){
    recommends.activity = "museum visit"
  }

  else if ( recommends.season === "Summer" && temperature > 35){
    recommends.activity = "swimming"
  }

  else if (recommends.season === "Summer" && temperature <= 35){
    recommends.activity = "cycling"
  }
  else if ( recommends.season === "Autumn" && temperature > 15){
    recommends.activity = "nature walk"
  }
  else if ( recommends.season === "Autumn" && temperature <= 15){
    recommends.activity = "reading at a cafe"
  }
  return recommends
  }

  console.log(getSeasonActivity(13 , 10))
