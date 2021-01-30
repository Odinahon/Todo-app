import axios from 'axios'
class HelloWorldService {
  executeHelloWorldService () {
    // console.log('executed service')
    // we are using axios framework to make a call to the backend
    // we are returning promise from (axios) back
    return axios.get('http://localhost:8080/hello-world')
  }

  executeHelloWorldBeanService () {
    // console.log('executed service')
    // we are using axios framework to make a call to the backend
    // we are returning promise from (axios) back
    return axios.get('http://localhost:8080/hello-world-bean')
  }

  executeHelloWorldPathVariableService (name) {
    const username = 'in28minutes'
    const password = 'dummy'
    const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
      {
        headers: {
          authorization: basicAuthHeader
        }

      }
    )
  }
}
export default new HelloWorldService()
