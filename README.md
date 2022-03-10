# Client API
## Prerequisites
* Download the source code from the GIT repository
* Follow the steps below after you have installed node and npm. 
* Ensure that the gloss-api-server is currently running and you know the IRL it is connecting on. 
* To test the connection open the file '.env' and connect to the URL listed there. Paste the IRL into any browser. 
* If the server is not running please check the  gloss-api-backend startup. 

```bash
npm install 
npm install @angular/cli 
ng s --port 4310 -o
```
1. The first command installs the node.js packages
2. Install the angular cli which will run the next command to build and start the application
3. Build and start the application. 
    * 'ng' is the angular CLI
    * 's' means serve
    * '--port' is the port you would start the application on for this instance. For testing this can be any port number above 1024. Know as a higher level port id. 
    * 'o' is open. The application automatically open a new instance of the application in the browser. (default browser)

The source code will be built based upon the packages listed in the package.json file. 
This is the same for all node based applications. 

## Changing GraphQL Connection
The application gets it data from a graphql IP server. You must provide a valid graphql connection string in the '.env'

```bash
PTFS_GRAPHQL_IRL=http://localhost:3010/graphql
GRAPHQL_IRL=http://localhost:3010/graphql
```

You can test this connection by copying the IRL in the browser URL. 
```bash
http://localhost:3010/graphql
```

The graphql playground will open for the server if the server is running. 

If you are debugging you can add query extensions for Graphql and Apollo to inspect the queries from the application in run time. 

![Alt text](./src/assets/query_extensions.png?raw=true "Query Extensions")

## Application Outline

The application front requires the backend server to be running and the client connect URL to be correct. The flow of the application is outlined in the following diagram. 


![Alt text](./src/assets/image002.png?raw=true "System Outline")


