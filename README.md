##Overview
  This project is a clone of Swiggy web app which is a online food Ordering System

## What does this come with?
  Checkout the original website of Swiggy [https://www.swiggy.com/]

## Deployment instructions

### Basic deployment:

* Press the **Clone & Deploy** button and follow the instructions.
* The `hasura quickstart` command clones the project repository to your local computer, and also creates a **free Hasura cluster**, where the project will be hosted for free.
* A git remote (called hasura) is created and initialized with your project directory.
* Now get your cluster name using `hasura cluster status` and modify the package.json file inside `microservices/ui/app/package.json`. Assign your cluster name to `REACT_APP_CLUSTER_NAME` environment variable.
* Run `git add .`, `git commit`, and `git push hasura master`.
* Run the below command to open your shiny new deployed react app.
``` shell
$ hasura microservice open ui
```

### Making changes and deploying

* To make changes to the project, browse to `/microservices/ui/app/src` and edit the `HasuraExampleApp.js` file in `hasuraExamples` folder according to your app.
* Commit the changes, and perform `git push hasura master` to deploy the changes.

## Local development

To test and make changes to this app locally, follow the below instructions.
* Open Terminal and `cd` into the project folder
* Run `npm install` to install all the project dependencies
* Run `npm start` and `npm build` in the terminal to build and run it.
* Make changes to the app, and see the changes in the browser

## View server logs

You can view the logs emitted by the ‘serve’ package by running the below command:

``` shell
$ hasura microservice logs ui
```
You can see the logs in your terminal, press `CTRL + C` to stop logging.

## Managing app dependencies

* System dependencies, like changing the web-server can be made in the Dockerfile
* npm/yarn deps can be managed by editing **package.json**.

If changes have been done to the dependencies, `git commit`, and perform `git push hasura master` to deploy the changes.

## Migrating your existing React.js app

* If you have an existing react app which you would like to deploy, replace the code inside `/microservices/ui/src/` according to your app.
* You may need to modify the Dockerfile if your `package.json` or the build directory location has changed, but in most cases, it won't be required.
* Commit, and run `git push hasura master` to deploy your app.

## Adding backend features

Hasura comes with BaaS APIs to make it easy to add backend features to your apps.

### Add instant authentication via Hasura’s web UI kit

Every project comes with an Authentication kit, you can restrict the access to your app to specific user roles.
It comes with a UI for Signup and Login pages out of the box, which takes care of user registration and signing in.

![Auth UI](https://docs.hasura.io/0.15/_images/uikit-dark.png)

Follow the [Authorization docs](https://docs.hasura.io/0.15/manual/users/uikit.html) to add Authentication kit to your app.

### Add a custom API

Hasura project is composed of a set of microservices. These include certain Hasura microservices like, postgres, nginx, data API, auth API and more but can also include your own microservices.
This quickstart comes with one such custom service written in `nodejs` using the `express` framework. Check it out in action at `https://api.cluster-name.hasura-app.io` . Currently, it just returns a "Hello-React" at that endpoint.

* [Adding Microservice](https://docs.hasura.io/0.15/manual/custom-microservices/index.html)

### Add data APIs

Hasura comes with set of Data APIs to access the Postgres database which comes bundled with every Hasura cluster.
Detailed docs of data APIs can be found [here](https://docs.hasura.io/0.15/manual/data/index.html).
