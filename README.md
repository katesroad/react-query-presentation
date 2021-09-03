# README

## Content

- Trend
  - Information (old days)
    - render content at server
  - Single page application
    - Heaviy data interaction at the frontend side
    - Render content at the frontend side
- Problem
  - state management
    - solutions
      - props drilling -> redux/context or similar libraries
        - problems of redux
          - with application growth, the global state could be gigantic
  - Asynchronous interaction with the server
    - Old solutions
      - redux-thunk
      - rematch
    - problems
      - Duplication request
      - Using hooks, redundant code
      - Retry failed request
      - Fetch data conditionally
      - How to cache data at the frontend side
  - Separate application into two parts
    - Application state（synchronous, disappear after clearing)
      - local state
      - global state
    - server caching state

- React-Query
  - downloads
  - file size
  - users
  - activities
- Features
  - hooks based
  - configurable
  - remove duplicated request &&  caching  ===> solve the problem of having a gigantic application state using redux/mobx/context
    - stale 
    - cache time
  - conditional data fetching, prefetching
  - access data stored globally
    - query client
  - focus prefetching
  - retries
## References

- [State Management in React](https://www.youtube.com/watch?v=zpUMRsAO6-Y&t=44s)
- [It's time to beak up your *Global State* - Tanner Linsley](https://www.youtube.com/watch?v=seU46c6Jz7E)

- [React Query](https://react-query.tanstack.com/)