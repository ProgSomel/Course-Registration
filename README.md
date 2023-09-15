#  1. Add at least 3 Project features 🔥 

###Selecting course and storing on the Cart : 
  - User can click on the select button to add the course to the cart. User can  add a course to the cart only once. After adding a specific course to the cart by clicking on the select button if user clicks on the select button again then it will show a warning message to the user which will be displayed as a toastify message.

##Showing Total Credit: 
- When user add a course to the cart by clicking on the select button then the credit will be shown on the Total Credit field and thus if we add any other course to the cart then the credit of the that course will be added to the previous total credit and thus the total credit will be increased up to 20 credit as the total credit limit is 20. If the credit limit reaches above 20 then we will show a error message as a toastify message.

##Credit Remaining Field: 
- By default credit remaining field will be 20hr. When User will add a course to the cart that course's credit will be deducted from the previous remaining credit field value and and it will show the new credit remaining value.


# 2. Discuss how you managed the state in your assignment project🔥 

##In my assignment project, I have effectively managed the state using React's useState hook. Here's a discussion of how state is managed in this component:
- courses: state is initialized with an empty array, likely to be populated with data from the "data.json" file.


- selectedCourse: is an array that will store the courses that the user selects.


- totalCredit and remainingCredit are initialized with default values.

##Fetching Data: I use the useEffect hook to fetch data from "data.json" when the component mounts. This data is then set in the courses state using setCourses(data).

- Handling Course Selection: The handleSelect function is responsible for managing the state when a user selects a course. 

##State variables are initialized, updated, and passed as props between components to ensure a smooth user experience. 

