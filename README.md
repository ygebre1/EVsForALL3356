# EVsForALL

## About
EV's For All is a one stop shop for everything related to Electric Cars. The primary goal of the application is close the gap present in EV adoption for under priveledged communities. We seek to encourage and empower our users, especially people from underpriveledged communities, to obtain EVs as well as educate them on the benefits of electric vehicles.

# Release Notes
----------------------------------------
## Version 0.5.0

### Features
- Info page has been added including relevant information provided to by the Center of Sustainable Communities. A sources section was added that lets the users visit sites that were used in to compile the information in the info page. This lets users learn more if they are interested.
- Major UI improvements for all pages. All components are now responsive and work for a mobile layout as well. We have also included a footer on the landing page and info page.

### Bug Fixes
- Screen breaking glitch: On Mobile screens the find cars page would general break and the website wouldn't render correctly, we have now fixed this so it doesn't occur.
- A bug related to the filtering functionality of the last sprint was fixed
- Fixed a minor issue with landing page where the home button wasn't navigating back to the homescreen/landing page.

### Known Issues
- The filtering functionality can be improved upon. Furthermore, it doesn't work properly when there are more than 9 vehicles rendered on the screen. This should be fixed.
- Charging station locations: This would should be pulled down from an api and then fed into the maps api to give more accurate info. The maps API info on charging stations seems to a bit outdated and occasionally gives wrong locations. This link has a free api for this https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/.
- Database Migration: Currently we are using sqlite for our database, but when the application is deployed something like MySQL or Postgres should be used instead. A migration needs to happen for this.
- Load Balancing/Performance features: In the future Services that help with load balancing and distribute the network traffic should be used such as CDNS. Other Services that enable Low latency can also be used.

## Version 0.4.0

### Features
- Additional Filter functionality: Added capability to filter by car brand and electric vehicle range, this was added on top of the prexisting pricing filter
- Improved/fix pricing filter: Pricing Filter can filter from lowest to highest and highest to lowest instead of just highest to lowest. This was added to further reach out to users who are seeking affordable options. Lower cost Evs will now appear at the top of the page instead of the bottom.
- Load More button: Added a button to load more cars than the nine already present on the screen, so user can explore larger amount of cars without having to use filters or search bar

### Bug Fixes
- Fixed a bug related to cars not showing past the ninth car, this was also fixed from a UI standpoint by adding a button that lets the user see more cars instead of just having all the cars load onto the page at the same time.
- Fixed bug related to Maps where the exact location of the charging locations weren't being shown
- Addressed some more UI issues from the previous iterations such as small text in places, and UI elements such as images and buttons appearing too large or too small

### Known Issues
- UI for Find Cars page: the UI for this page, especially the layout for each car can be improved so that it is less clunky and does not overload the user with information.
- URL for Cars: A url needs to be added for each vehicle to the manafacturer's website so that user can further explore the vehicle of thier choice. There were few bugs, which prevented us from incorporating this feature in this iteration, which need to be addressed to add this feature for the next iteration.
- General UI fixes: Some general UI fixes can still be made on the Home page as well as the other pages such as having a responsive layout for all components on every page, so that they don't break on mobile screens

## Version 0.3.0

### Features
- Maps Integration: Added Maps Integration to find charging station, when a user enters in their location they can see what charging locations are near them through red pins that appear on map
- Locate me button: A locate me button was added so that the user has the option of sharing their location so that they don't need to type out anything.
- Place Description: Added a mini description for each location that appears on the map when hovered over
- Directions link: Included a link that routes user to a new tab or browser so they can get directions to a charging station of choice

### Bug Fixes
- Fixed a bug related to the filtering mechanism where the filter couldn't filter by price due to the our cars api not returning it
- Fixed bug related to Home page, where the screen would break on small screens.
- Addressed an issue related navbar appearing larger that it should on some pages. It now contains a responsive layout on all pages, and should work perfectly on mobile devices and tablets.

### Known Issues
- MAP EV charger locations: Some of the locations displayed on the map have charging stations nearby but not on the exact location where the pin is. This needs to be addressed to work as advertised.
- UI Fixes: While UI has improved, we are still looking to incorporate advice from the user feedback such as having cars that are less expensive appear first on the vehicle page. This will be addressed soon.
- Cars on Find Cars page: Cars past what the page show aren't displayed even if the user hits load more. The only way to currently access these vehicles is through the filter funtionality. This will also be addressed soon.


## Version 0.2.0

### Features
- Vehicles displayed: Added functionality to dynamically display Electric vehicles currently on the market
- Location feature on Find Cars page: A new search bar has been added to Find Cars Page that allows Users to find cars in whatever location they enter in the search bar
- Filter and Sort: Filtering and sorting capabilities have been added to the Find Cars Page
- Cars Images: Apart from dynamically pulling cars that are currently on the markets, Images of each vehicle are now also displayed with several import specs listed.

### Bug Fixes
- Fixed all errors related to login functionality. This was done by simply removing it as it was not being used and only presented problems for the application. Can easily be added back later if the need every arises.
- Fixed bug related to have Vehicle information was being displayed on the page. Some of the information was being cut off the screen, but this is now fixed.
- Got rid of redudant pages such as the rent and lease pages. Combined the buy, rent, and lease pages into one page called Find Cars as they all displayed similar information. This simplified the UI and makes it easier to navigate the website.

### Known Issues
- Filtering: There are some issues when filtering vehicles. Specifically when filtering by brand. This should easily be fixed in next iteration
- UI Fixes: A lot of UI polishes have to be made, specifically related to different viewports. Find Cars page breaks on mobile screens still. This has to be addressed.
- Prices: Prices for vehicles were tempory removed due to issues with API from Department of Renewable Energy
- User Feedback: A lot of potential users who have seen the design have suggested that we include more images of budget friendly EV vehicles on the landing page. This one issue that we intend to address in the next iteration.

## Version 0.1.0

### Features
- Enhanced Navbar: Navbar is now responsive on pages that it present on.
- Added Mobile compatibility for navbar component: Navbar can now also be viewed on mobile device not just laptop or desktop

### Bug Fixes
- Fixed an error, where parts of the navbar were being clipped of the screen

### Known Issues
- Stock Photos: We have to remove stock photos on buy page
- Non-functional pages: We are planning on combining the buy, rent, and lease pages into one vehicles page to simplify UI and make website more functional
- Messy UI: Improving UI further and getting around to finishing implementation for vehicles page
- Authentication Bug: A bug with authentication has to be fixed for the next iteration. This should actually being fixed in the next few days.
