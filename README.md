# tunedIN-client


Site runs at  `https://localhost:19006/` 

## Running locally

Use `pnpm web` to run the web application. 
Currently the native apps aren't functional because of auth, but this can be worked around.

## Running tests

Currently tests don't work, but that's going to be fixed soon!
`pnpm test` runs test using vitest.

## Architecture

This repo uses React Native. Currently, all functionality is a single route, with state dictating which screen is shown. 