module.exports = {
    testEnvironment: 'jsdom',        // Configura jsdom como el entorno de prueba
    transform: {
      '^.+\\.jsx?$': 'babel-jest',  // Asegúrate de que Jest pueda procesar JSX
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
      },
  };
  