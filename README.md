# Expert.io
Expert.io is a proof of concept smart AI messaging app where users get to select professionals for consultations and advice. Special highlight to telehealth and teladoc with the rise of B2C at home virtual health visits :-).

## What it does

Our app allows the user can talk to chatbots representing renown professionals, including but not limited to Barack Obama, Jackie Chan, and UCLA’s very own chancellor, Gene Block. We created one specific case scenario with our Brian Williams MD bot, and a sample conversation of what a client would use expert.io for. 

## How we built it

We used Expo and React Native to create this mobile application. The app comprises of multiple components that were built separately such as:

The User.js file is a prop of a user that is used to build the user list that we see on the home screen. It takes in a prop and creates a rectangle profile that contains a user’s name, profile picture, description, location, and also a clickable arrow that is used as a stack navigator. Most importantly, the user also includes the information when the arrow is pressed to navigate to the message stacks creen through passing a navigation prop as a parameter.

The UserList.js file utilizes a Flatlist that takes all the unique user Id’s from an array and feeds it into the User prop in order to create a nice display of all the user information in the home screen. 

The Message.js file includes the second screen that the user is taken to after clicking the arrow, and represents the chat window that users engage with the chat professional through. 

The MessageStack.js file includes the stack navigator that routes the home screen to the chat window for the user to interact with, and includes the UserList as its component for the home screen. 

The HomeScreen.js file puts it all together by using the MessageStack as a component of the Tab Navigator that includes a home tab and a settings tab. Although the settings screen is not functional and is largely for placeholder purposes, the navigator bar at the bottom of the screen give the application an “app” look. 
…

The TextBubble.js file contains the TextBubble component containing the main chat application component of Expert.io. The messages in TextBubble are stored in an objects array containing objects with three properties: text, key, and type. The ‘text’ type holds the text of the message. The ‘key’ type holds the id of the message. The ‘type’ type holds whether the message came from the bot or from the user. The messages are arranged in a FlatList, for scrolling. The user messages are processed by this component and the bot will respond to the user messages.

## Challenges we ran into
The hardest part of the UI/UX portion with the home screen and the messages is not only knowing how to link all the different files in, but knowing how to pass the correct information through prop and how to pass props as parameters into different screens. For example, while all the information is stored in the User prop that is passed through in the UserList, we needed to pass information such as name, uniqueId, and the profile image onto not only the individual message screens but also the Stack Navigator in order to update the screen title. Besides that, the syntax was also very hard to grasp initially with the high barrier to entry especially coming from a c++ background and now being told to learn javascript and html. 
...

For TextBubble.js, there was a big problem with getting the user and the bot messages to display one after another. This was because the state is updated after execution, and not in the function, where the state was supposed to be updated many times. To fix this, Galen suggested that we pass in a function as a parameter into one of the setState functions, which worked really well! A lot of time was also spent figuring out how to use the styleSheet to format how the user interface of chat would look. An example of a formatting problem was figuring out how to make the text bubble contain the text entirely. The solution was using alignSelf: ‘center’, which took a lot of time to find but fixed the problem immediately.

At the beginning of the project, we had the idea of making a real-time chat application, but realized that implementing a database would be too steep of a learning curve given our limited knowledge of React.js.

## Accomplishments that we're proud of

We’re so proud that we got a working advice chat application and a beautiful and functional user interface. We didn’t expect everything to work together since both of us worked on different aspects of the front end interface, but in the end using a simple prop component fit everything.

## What we learned

As pre-medical students, we have not had much app development experience to start with. However, from the HackSprint series offered by ACM, we were able to learn the basics of React.js. With the help of the great mentors and the internet, we picked up the missing pieces and were able to put together a project that we’re proud of. We learned a lot about the workflow of the app development process and now understand more about its nuances and unpredictability.

## What's next for Expert.io

Once simple implementation that we were unable to fix was the position of the text box since it was not fully on the bottom of the screen, and if more time was allotted we would look into fixing that first.

In addition, a very important component of a chat app is the ability to save previous chats and chat histories, and we wanted to implement it but soon realized how difficult it would be and after devising different approaches, decided to implement a short introduction for each bot instead. 
