# Wedding Service Website

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Technical Requirements](#technical-requirements)
* [Getting Started](#getting-started)
* [API Endpoints](#api-endpoints)

## Introduction

The wedding service website is a modern online wedding invitation website that provides a comprehensive layout for wedding events and allows guests to RSVP digitally.

## Features

* Create and manage wedding events
* Customize wedding events with themes, colors, and fonts
* Send digital invitations and track RSVPs
* View and manage guest lists
* Receive notifications for RSVPs and messages
* RSVP to wedding events digitally
* Send messages to the wedding couple

## Technical Requirements

* Node.js/Express for backend development
* Prisma for database management
* JWT for authentication
* Email service for sending invitations and notifications

## Getting Started

1. Clone the repository
2. Install dependencies using `npm install`
3. Start the server using `npm start`

## API Endpoints

### Authentication

* `POST /api/login`: Login to the application
* `POST /api/register`: Register a new user

### Wedding Events

* `POST /api/wedding-events`: Create a new wedding event
* `GET /api/wedding-events`: Get all wedding events
* `GET /api/wedding-events/:id`: Get a wedding event by id
* `PUT /api/wedding-events/:id`: Update a wedding event
* `DELETE /api/wedding-events/:id`: Delete a wedding event

### RSVP

* `POST /api/rsvp`: RSVP to a wedding event
* `GET /api/rsvp`: Get all RSVPs for a wedding event