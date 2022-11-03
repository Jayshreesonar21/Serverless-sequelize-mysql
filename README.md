# MySQL with Serverless framework + Sequelize

This will be a guide+boilerplate on getting started on with Serverless + MySQL with Sequelize (ORM for NodeJS)

Get yourself a serverless REST API up with connected to a MySQL server in a few minutes on NodeJS.

# Whats Included

C- Create Documents

R- Read Documents

U- Update Documents

D- Delete Documents

# Guide

First Install and configure Serverless https://github.com/serverless/serverless#quick-start

Then install mongodb for node

```javascript
npm install sequilize --save
```

MySQL Configuration

```javascript
var sequelize = new Sequelize('DB_NAME', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
})
```

# More information

Serverless - https://github.com/serverless/serverless

Sequelize Documentation - http://docs.sequelizejs.com/

E1: temp.OP error

- node_modules/hapi/default

E2: serverless supporting 1.15.4-alpha.1 and latest is 3.20
E3: supporing runtime nodejs8.10 and latest is node14.x
E4: Not supporting typescript
