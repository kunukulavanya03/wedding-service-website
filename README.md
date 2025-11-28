# wedding-service-website

A modern online wedding invitation website that provides a comprehensive layout for wedding events and allows guests to RSVP digitally.

## Tech Stack

- **Frontend**: Next.js 14
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/FfnnHRPoygOhto1mMckkHd/Wedding-Service-Website--Community-?node-id=1-1389&t=sqxqeENx42iYCZay-1))

## Project Structure

```
wedding-service-website/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- Create and manage wedding events
- Customize wedding events with themes, colors, and fonts
- Send digital invitations and track RSVPs
- View and manage guest lists
- Receive notifications for RSVPs and messages
- RSVP to wedding events digitally
- Send messages to the wedding couple

## API Endpoints

- `POST /api/wedding-events` - Create a new wedding event
- `GET /api/wedding-events` - Get all wedding events
- `GET /api/wedding-events/:id` - Get a wedding event by id
- `PUT /api/wedding-events/:id` - Update a wedding event
- `DELETE /api/wedding-events/:id` - Delete a wedding event
- `POST /api/rsvp` - RSVP to a wedding event
- `GET /api/rsvp` - Get all RSVPs for a wedding event

## License

MIT
