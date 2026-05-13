const environmentVariables = {
  development: {
    buildUrl: 'http://localhost:8888/dist/',
    apiUrl: 'http://localhost/cart_api',
  },
  production: {
    buildUrl: '/iwpnc1000',
    apiUrl: 'http://www.winnie.com.tw/cart_api',
    mainRemoteUrl: '/iamnc4000/assets/remoteEntry.js',
  },
}

export default environmentVariables
