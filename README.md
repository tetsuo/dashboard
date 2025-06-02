# dashboard

Barebones dashboard UI built with [**Restache**](https://github.com/tetsuo/restache).

#### Demo

**[tetsuo.github.io/dashboard](https://tetsuo.github.io/dashboard)**

## Features

- No JSX -- _almost_
- Material UI for components
- Minimal router using history module
- Per-page data loading using React hooks
- Extremely lightweight setup, you only need Go!
- Cool design

## Tech stack

- React
- Restache
- Material UI
- date-fns
- history
- ESBuild
- ESM.sh
- Go

## Getting started

```
git clone https://github.com/tetsuo/dashboard.git
cd dashboard
go mod tidy
go run . -dev -serve
```

Then navigate to `localhost:7070`.

Type `go run . -h` for other options.
