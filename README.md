

<b>EDUCATIONAL COMPETITION & COMMUNITY SYSTEM</b>
Website URL - https://edcom-official-aps.netlify.app/
a) Decription :-
> Educational systems are growing digitally through LMS's and proper platform is 
missing for the college/school in order to integrate it only for their need. Major 
colleges might have community applications but not all of them and rest of 
minor colleges. 

> ED-COM helps colleges/schools to establish a proper community system which 
do not include in any external disturbances. ED-COM can be used by existing 
students in the college as well as people who are very keen to compete in 
events and could not do so due to lack of proper information. 

> ED-COM is a web-application that provides the access to people all around the 
globe to one of the best community and competition systems.

> ED-Community System is specific to individual college, the management can 
maintain individual groups according to their necessity, maintain proper LMS 
resources, student stats etc. Student credentials will be provided by the 
management only. This system might also include public clusters where 
people of similar skills join as one and learn from each other. 

> ED-Competition System is for any candidate who is willing to present their skill. 
It includes integrations of colleges & organization that are will to host technical 
events that include participation of people outside their colleges/organization.

b) Required Softwares and technologies used :-
> Code editor - Visual Studio Code
> HTML, CSS, JavaScript, ReactJs
> Google Firebase (website is enough)

c) Pages in the application :-

i. ABOUT US PAGE [aboutus_html.html]
> About the details of the page and developers.

ii. CONTACT US PAGE [contact_html.html]
> About different ways to contacts of ED-COM.

iii. CONTEST HOME PAGE [contest_home_html.html]
> Contains list of available contests.

iv. INDIVIDUAL CONTEST PAGES [contest_indiv_html.html]
> Contains details about the contest.

v. FAQS PAGE [faqs_html.html]
> Contains frequently asked questions.

vi. HOME PAGE [index.html]
> It is the main page of the website.

vii. LOGIN PAGE [login_html.html]
> For coordinators login

viii. SIGIN PAGE [sigin_html.html]
> For coordinators sigin

ix. ED-COMMUNITY
> It is a seperate folder which need to me run seperately on LOCAL HOST
> It contains the community interface.



ED-COMMUNITY 

Follow the bellow steps in order to run the ED-COMMUNITY successfully on a new computer.

1. Install NodeJs - https://nodejs.org/en/

2. Install Yarn - https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

After completing the above setup then open the project folder in VS COde and then run the following commands in the terminal

3. Open ED-COMMUNITY directory by running the command:
   >> cd ed-community

4. Install Tailwind CSS by running the command:
   >> yarn add -D tailwindcss postcss autoprefixer

5. Initialize Tailwind CSS  by running the command:
   >> yarn tailwindcss init -p

6. Install firebase & react-firebase-hooks by running these commands:
   >> yarn add firebase
   >> yarn add react-firebase-hooks

7. Install React Icons by running this command:
   >> yarn add react-icons

8. Now run the following command and click on http://localhost:3000/ to open the application in the web browser
   >> yarn dev
