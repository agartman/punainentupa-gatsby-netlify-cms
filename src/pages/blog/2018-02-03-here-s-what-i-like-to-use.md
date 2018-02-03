---
templateKey: blog-post
path: Tools
title: Here's what I like to use
date: 2018-02-03T18:45:11.395Z
description: I like these
---

## Typescript

Typescript is something that to me means quality and great developer experience. Typescript transpiles into Javascript, to the specification of Javascript you want. For example for a server app on NodeJS you might use the latest features right away, since you know your runtime. For a browser you should target the recommended version of ECMAScript. I like many of the features that TypeScript has over just plain JS. However you have to handle the type definitions to take full advantage of TS and that can sometimes be troublesome. Anyway good fun!

## Gatsby, static site generator

Gatsby is something that this site has been built on. Liking this a LOT! 

Gatsby has been called as a web compiler. It compiles your React components, your plugins, CSS and code into super performant static site that works also offline. This kind of app is also known as PWA, a progressive web app. Gatsby can be plugged into any data source, it draws your data into a GraphQL proxy that you can use during development also through GraphiQL, a tool for testing GraphQL queries. Try it out!

Pair Gatsby with something like NetlifyCMS (like this site) or Contentful and deploy to a CDN and you've got yourself a nice setup for a super performant site.

## GraphQL

I've developed with a ton of REST APIs, wrote many as well. The thing with REST backends I've noticed, is that many times it gets built _specifically_ for the front end (Backend for front-end, a BFF?). Well... the front end code might change over time and most likely you'd like your API to be well fitted for other interested apps, especially if your making an API as public open data.

GraphQL solves the problem of over-fetching, makes API documentation easier, enables developers to get same data with less requests to the backend, which means simply less code and complexity and better UX. Everything goes still through HTTP METHODS, it's just a simple HTTP query language that you can use to ask only the things that you need. Mutations are included as well for CRUD operations.

GraphQL SDKs have been popping up for just about all well established programming languages, so the tooling is there.

## Apollo Server

Apollo Server is an Express middleware. With learning a couple of core concepts, a developer is able to setup a GraphQL backend. Apollo Server makes it easy to combine multiple data sources behind a GraphQL endpoint. I've started to prepare a course on this technology, the same time I'm studying it myself.

## AaaS, DBaaS etc

Now these are just great. How much do you need to know to write a secure tested authentication API? A lot... And how much time would it take... you got the point. You want to focus on the substance of your project and these kind of services give you the chance to get going quickly. Authentication as a Service, Database as a service, Something other awesome as a service. These are great for prototypes, MVPs and why not production too if the product works well and has good support.
