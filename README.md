# bull-board-issue-repro

1. Run `yarn start` to see that yarn refuses to execute the program
2. Run `yarn add @bull-board/ui` - Then `yarn start` will work, because `@bull-board/ui` is no longer ambiguous (Only one possible listed dependency)
