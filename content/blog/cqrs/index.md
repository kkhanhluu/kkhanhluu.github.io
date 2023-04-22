---
title: '📚 Command Query Responsibility Segregation'
date: '2023-04-09T00:00:00.000Z'
description: 'Introduction to CQRS'
time: 10
---

# Command Query Responsibility Segregation

Date Created: February 24, 2023 6:09 PM
Status: Done 🍀

My [previous post](https://kkhanhluu.github.io/event-sourcing-vs-event-driven-architecture/) gave a very quick introduction to event sourcing, an alternative pattern to store data as events. In this post, we are going to explore on handy trick of trade that seems to be a perfect match with event sourcing: **Command Query Responsibility Segregation - CQRS**

# Context and problem

In traditional architectures, the same data model is used to query and update a database, which is simple and works perfectly well for basic CRUD operations. However, in some complex applications, this approach doesn’t work well anymore. For example, in a blog platform like medium, although the data can be stored in a SQL or NoSQL database, you could want to leverage powerful search engine like Elasticsearch to perform full-text search, which requires a completely different model. Another example is an _event sourcing_ system like in an e-commerce application, where event store is the single source of truth. The data is written as events to event store, however, it’s not easy to perform complicate queries such as: find the first 100 orders from February 2023 to April 2023, against this event store. In this case, we might want to maintain a view in SQL databases so that we can perform those queries more easily. In both cases, we have the two following pain points:

- There’s if often a mismatch between read and write representations (records in normal database vs records in elasticsearch, events in event store vs order entity in SQL database)
- All the data replicas need to be synchronized (elasticsearch vs database, eventstore vs sql database)

# Using CQRS pattern

CQRS separates reads and writes into different models using **commands** and **queries**

- **Commands:** are responsible for changing application state, i.e., creating, updating and deleting data. **Commands** should be task-based, rather than data centric (”Create order”, “Checkout order”)
- **Queries:** are responsible for reading application state. **Queries** never modify the database

For greater isolation, we can separate physically the read data from the write data. In the previous example of blog platform: database is the write database and Elasticsearch is the read database, that is optimized for queries. In the example of e-commerce application: eventstore is the write database and SQL database is the read database.

If read and write databases are separated, we have to ensure that they must be kept in sync. This is typically accomplished by having the write model publish an event whenever it updates the database. If you want to see a real-world example, please check out my [e-shop project](https://kkhanhluu.github.io/e-shop/explore/code/simplified-cqrs). In this demo, `subscription` feature of [EventStoreDB](https://www.eventstore.com/) was used to publish an event to PostgresSQL read database.

## Using aggregate pattern with CQRS

The write model of CQRS pattern not only contains the data but also methods to change the data and validate it. The logic within write model should be as close as possible to business process, whe should be able to read the code and fully understand business requirements from the code. An useful pattern should be considered is the **aggregate.** An **aggregate** is a cluster of associated objects that we treat as a unit for the purpose of data changes. In the e-commerce example, `Order` should be an **aggregate.** An order is a domain object that consists of several objects: the status, the list of items that the user already purchased, and the user who purchased the order. Besides the information, `Order` should contain methods, which take the current state, verifies rules for the particular operation, applies the business logic, and returns the new state.

If you want to take a look at implementation of an **aggregate**, feel free to check out my [e-shop project](https://kkhanhluu.github.io/e-shop/explore/code/simplified-cqrs).

# Summary

Event sourcing is quite often conflated with CQRS, however, they are two different patterns. Event sourcing is “just” an option for storage implementation and CQRS is about separating write and read operations. They complement each other and used together are powerful, but the separation of command logic from query logic is also applicable in designs that are not using event sourcing.
