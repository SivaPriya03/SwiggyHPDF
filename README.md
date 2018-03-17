## Overview
  This project is a clone of Swiggy web app which is a online food Ordering System
  Checkout the original website of [Swiggy](https://www.swiggy.com/)
## What does it do?
  It shows a list of restaurants and menus according to the choice of user. User can add their food in the cart and also view the items in Cart.Login and signup forms are also implemented. 
## Requirements
  ReactJS
  NodeJS
  Hasura CLI
## Deployment Steps:
  1.Clone the project from [hasura hub](https://hasura.io/hub) and create a cluster by executing the command
  ```
  hasura quickstart swiggy
  ```
  2. Commit the files and push to remote hasura
  ```
  $ cd swiggy
  $ git add . && git commit -m "Initial commit" 
  $ git push hasura master
  ```
  3.Now your project is ready to run. To see the microservices available in the project run ```hasura ms list```
  
  
