# React Mock Interview: Kanban Board

## Setup

Requires Node 20 or newer.

```sh
npm install
npm run dev
```

Open the URL printed in the terminal. Work inside `src/`.
Seed data lives in `src/data.ts`. You may change its shape however you like.

## Rules

- Plain CSS is fine. Styling is not the focus.
- Drag-and-drop is not expected.
- Ask questions at any time. Thinking aloud is encouraged.

## Requirement: Kanban board

Core (aim to finish in about 30 minutes):

1. Three fixed columns: **To do**, **In progress**, **Done**. All seed tasks start in _To do_.
2. Each column shows its cards and a count of its cards in the header.
3. Add a card to any column. A title is required. An empty title must not create a card.
4. Move a card to the adjacent column (left or right) using buttons or a select. A card cannot move past the first or last column.

Stretch (only if time remains, pick any):

- Delete a card.
- Edit a card title inline.
- Show an empty state for a column with no cards.
- Keyboard niceties: Enter submits, Esc cancels.
- Persist the board to `localStorage`.
- Filter cards by text.

## What we look at

How you model state, how you split components, and which UX details you choose to handle. These matter as much as whether everything works.
