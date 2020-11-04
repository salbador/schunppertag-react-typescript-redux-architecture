/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
      board: `${baseApi}/tiles/:tileId/board`,
      tasks: `${baseApi}/tiles/:tileId/tasks`,
      tiles: `${baseApi}/tiles/:tileId`,
 */
export default function baseEnv(baseApi: string) {
  return {
    route: {
      baseRoute: '/schunppertag-react-typescript-redux-architecture', // Fixes issue with Github Pages
    },
    api: {
      board: `${baseApi}/board.json`,
      tasks: `${baseApi}/tasks.json`,
      tiles: `${baseApi}/tiles.json`,
      errorExample: 'https://httpstat.us/520',
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}

export type Environment = ReturnType<typeof baseEnv>;
