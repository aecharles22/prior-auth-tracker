# Prior Authorization Tracker

A workflow management tool designed to improve visibility and patient outcomes in healthcare settings.

**⚠️ Important: This is a demonstration project. This exact codebase is not HIPAA compliant and all data is spoofed.**

## The Problem

As an office manager at an ophthalmology practice, I witnessed firsthand how prior authorization (PA) processes can fall through the cracks. Administrative staff juggle multiple responsibilities: answering calls, checking patients in and out, handling billing questions. This makes it easy to lose track of submitted authorizations.

The typical workflow breakdown:

1. Staff submits a prior authorization request
2. Gets pulled into other urgent tasks
3. Insurance denial or request for more clinical information arrives but goes unnoticed or gets deprioritized
4. Patient receives procedure without proper authorization
5. Claim gets denied, leaving the practice financially responsible

This results in significant revenue loss and administrative burden. I built this proof-of-concept tool to address these workflow gaps.

## Features

### Current Functionality

- **Create and update authorizations** – Maintain accurate records throughout the approval process
- **Centralized dashboard** – View all authorizations regardless of status in one place
- **Status tracking** – Monitor where each authorization stands in the approval pipeline
- **Search capabilities** – Quickly find authorizations by patient name or status
- **Authorization management** – Remove outdated or duplicate entries

### Planned Enhancements

- **Automated status updates** – Direct integration with insurance provider portals
- **Reminder system** – Email notifications for pending authorizations requiring follow-up
- **Analytics dashboard** – Identify patterns in denials and optimize submission strategies

## Tech Stack

- **Framework:** Next.js
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React

## About This Project

This is a portfolio demonstration showcasing my ability to identify real-world healthcare workflow problems and build practical solutions. While this version uses mock data and is not production-ready for protected health information, it demonstrates the core functionality needed to solve authorization tracking challenges in medical practices.

## Running Locally with Full Functionality

The live demo has create/edit/delete functionality disabled since there's no authentication. To enable full functionality on your local machine:

### Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aecharles22/prior-auth-tracker.git
   cd prior-auth-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Enable functionality** - Remove the `disabled` attribute from these components:

   **src/app/components/Dashboard.tsx (Line 101)**
   ```typescript
   // Change this:
   <Button onClick={() => setNewAuthButton(!newAuthButton)} disabled>

   // To this:
   <Button onClick={() => setNewAuthButton(!newAuthButton)}>
   ```

   **src/app/components/Dashboard.tsx (Line 159)**
   ```typescript
   // Change this:
   <Button variant="ghost" size="icon" onClick={(e) => {...}} disabled>

   // To this:
   <Button variant="ghost" size="icon" onClick={(e) => {...}}>
   ```

   **src/app/components/Modal.tsx (Line 183)**
   ```typescript
   // Change this:
   <Button type="submit" disabled>Save Changes</Button>

   // To this:
   <Button type="submit">Save Changes</Button>
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** - All CRUD operations are now enabled!

### Optional: Remove the Warning Banner

If you want to remove the red warning banner at the top:

**src/app/components/Dashboard.tsx (Lines 89-97)**
```typescript
// Delete or comment out this entire block:
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Demo Mode - Read Only</AlertTitle>
  <AlertDescription>
    This is a portfolio project without authentication...
  </AlertDescription>
</Alert>
```
