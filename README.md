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
