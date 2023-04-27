# bull-board-issue-repro

1. Run `yarn workspace a start` to see that yarn refuses to execute the program
2. Run `yarn add @bull-board/ui`, then `yarn workspace a start` will still fail, because workspace hoisting leads to strict dependency checks
