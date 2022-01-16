# Module6-WeatherDashboard

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

The following image demonstrates the application functionality:
![Weather Demo](./assets/06-server-side-apis-homeword-demo.png)

## Finished Product

[link](https://amartinezjr7.github.io/Module6-WeatherDashboard/)

The final product is so that when you type in a City, the program will use the open weather Api and get the forecast for that city.
This will include the current date displayed on the the top right, as well as the 5 day forecast displayed in 5 columns below the
current day. You can look up multiple cities, and the history will be shown below the search bar.
The data presented will be the city name, the date, and icon representation of weather conditions, the tempurature, the humitidy, the wind speed, and the
UV index

## Challanges

While developing this product, i had trouble with the the version of jquery that had moment attached to it. It would not load into the page and would create an error. I had to search for a different version of jquery that had an updated version of moment. 
I also had trouble with creating the 5 day forecast as they would show that data was coming in, but would not show up on the screen. This was another 
issue with the way the data was appended. Having to create divs from javascript is still something that i am still getting used to. 
The largest issue that i had was importing the icons, for some reason i couldn't get it to work until i created 4 different statements to house each icon. I was trying to do it more dynamically with a switch statement initially but i could not get it work. 
The final problem was my computer crashing and losing a lot of data because i went so long before pushing it to gitHub which resulted in my trying to remember the work i did and find a different work around.