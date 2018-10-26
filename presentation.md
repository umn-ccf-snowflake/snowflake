# Medium's Snowflake

## Why?

* We wanted to make it easier to customize tracks, milestones, job titles.

## What did we do?

* Extracted tracks, milestones and title definitions into a separate config file.

## Who?

* Shawn Isenhart
* Remy Abdullahi
* Tonu Mikk
* Tony Thomas

## What went right?

* We managed to separate the data into a single place to make it easier to customize.
* We learned a lot about Flow (Facebook's static type checker for JavaScript).
* We had fun.
* We practiced identifying code smells.
* We realized everyone makes mistakes/writes bad code. (Even Medium.)

## What went wrong?

* We spent a lot of time fighting with Flow. (Perhaps unnecessarily.)
* Code was hard to reason about at times.
* We didn't get a chance to learn about Next.js or React. (All Flow.)

## Next steps?

* Scoring and "points to next level" are still hard-coded
* Make config and data distinct from each other.
* Get data from a different source? (Google Sheets? API? JSON file?)
