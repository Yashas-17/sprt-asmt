Installing Dependencies
<details>
- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>



The app  have the following functionalities

- When the app is opened,
  - It is navigated to the login page ,on login the page is navigated to the home page that contains sidebar component and home component which displays four kpi boxes
- When the Users button is clicked,
  - It is navigated to the posts page that contains information regarding post id,caption ,media url.Users can delete the post by clicking on ban button and hide the        post information by clicking on hide all button
- When the Post button from home page is clicked,
  -It is navigated to the users page that displays information about user id ,name and email,Deletion of user can be done by clicking ban button 

  
Implementation files:

- `src/components/Home/index.js`
- `src/components/Login/index.js`
- `src/components/PostListing/index.js`
- `src/components/UserListing/index.js`
- `src/components/Sidebar/index.js`
Dummy data:
  Dummy data has been maintained in the context folder.UserRelated data has been maintained in userContext and post related data is maintained in post context.




