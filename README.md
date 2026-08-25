# Overlap

A mobile event-planning app that helps friends compare availability, find realistic times to meet, and coordinate plans without repeatedly messaging everyone.

## Features

* Connect a Google Calendar and share availability with selected friends or groups.
* View friends in a simple list-style interface.
* Create and save event proposals with a duration, date range, location, and invitees.
* See who is available at a selected time without exposing private event details.
* Generate and rank times when everyone, or the largest possible group, can attend.
* Let participants vote, accept, decline, or suggest another time.
* Confirm a plan and add the final event to participants’ calendars.
* Send push notifications for invitations, suggested times, reminders, and confirmations.

## AI Features

* **Realistic availability:** With explicit user permission, classify calendar blocks as hard commitments, soft commitments, or flexible plans instead of treating availability as strictly free or busy.
* **Preference learning:** Learn patterns such as preferred days, typical meeting hours, response behaviour, travel buffers, and times a user commonly declines.
* **Conflict-aware ranking:** Recommend useful compromises when no time works for everyone, such as a time that fits six of eight people or requires the fewest schedule changes.
* **Smart explanations:** Explain why a time was recommended without revealing private calendar titles or descriptions to friends.
* **Nudge agent:** Follow up with non-responders, adjust reminder timing and tone, and notify the group when enough people have agreed.
* **Automatic confirmation:** Optionally lock in a time once a user-defined attendance threshold or quorum is reached.

## Tech Stack

### Mobile App

* React Native
* Expo
* TypeScript
* Expo Router
* Expo Notifications

### Backend

* Python
* FastAPI
* SQLAlchemy
* Alembic
* Pydantic

### Data and Authentication

* Supabase Auth
* Supabase PostgreSQL

### Integrations

* Google OAuth 2.0
* Google Calendar API
* Expo Push Notification service
* LLM API for opt-in calendar classification, recommendation explanations, and reminder generation

### Deployment

* Render for the FastAPI backend
* Expo Application Services (EAS) for mobile builds
* GitHub Actions for automated testing

## Prerequisites

* Node.js 20+
* npm 10+
* Python 3.11+
* Git
* Expo Go for local mobile testing
* A Supabase project
* A Google Cloud project with the Google Calendar API enabled
* Google OAuth credentials for the supported platforms
* An LLM API key if the optional AI features are enabled
* Xcode and an Apple Developer account for building and publishing the iOS app

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Set Up the FastAPI Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

On Windows PowerShell, activate the environment with:

```powershell
.venv\Scripts\Activate.ps1
```

Create a `backend/.env` file and provide the required values:

```env
DATABASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
LLM_API_KEY=
```

Never expose the Supabase service-role key, Google client secret, refresh tokens, or LLM API key in the mobile application.

Run the database migrations and development server:

```bash
alembic upgrade head
uvicorn app.main:app --reload
```

The API documentation will be available at `http://localhost:8000/docs`.

### 3. Set Up the Expo Application

```bash
cd mobile
npm install
```

Create a `mobile/.env` file:

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

Start the application:

```bash
npx expo start
```

Use Expo Go or an iOS/Android simulator to open the project.

## Troubleshooting

### Google Calendar Connection Fails

* Confirm that the Google Calendar API is enabled.
* Verify the OAuth credentials and redirect URI.
* Add your account as a test user in Google Cloud.

### Mobile App Cannot Reach FastAPI

* When using a physical phone, replace `localhost` with your computer’s local IP address.
* Ensure both devices are connected to the same network.

### Database Errors

* Check that `DATABASE_URL` is correct.
* Apply migrations with `alembic upgrade head`.

### Notifications Do Not Arrive

* Test notifications on a physical device.
* Confirm that notification permission was granted.

### Incorrect Times

* Store timestamps in UTC.
* Save each user’s time zone and convert times when displayed.

### AI Privacy

* Require user consent before analyzing calendar details.
* Never reveal event titles or descriptions to other users.
