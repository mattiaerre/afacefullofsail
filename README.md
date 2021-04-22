# afacefullofsail

"But when I raise the sail and lose those ties, anyone else in the cockpit inevitably gets **a face full of sail**."

## Deploy

The GitHub actions workflow `deploy` will deploy a new version of the app upon a push to the main branch.

Alternatively, it is possible to deploy from the local machine by running the following bash command:

```bash
yarn deploy
```

## Test

```bash
yarn test --coverage --watchAll=false
```
