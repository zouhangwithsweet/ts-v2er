import axios from 'axios'
const qs = require('qs').default

const service = axios.create({
  baseURL: process.env.MOCK_URL,
  timeout: 180000
})


/**
 * 通用request封装
 * @param method
 * @param url
 * @param data
 * @param config
 * @returns {Promise}
 */
const request = (method: string, url: string, data: any, config = {}) => {
  const options: any = Object.assign({}, config, {
      url,
      method,
      data
  })
  options.headers = options.headers || {}
  return new Promise((resolve, reject) => {
      service.request(options)
          .then(res => {
              const data = res.data
              const status = res.status
              if (status === 200) {
                  resolve(data)
              }
              // if (data.HasError) {
              //     reject(data)
              // }
              resolve(data)
          }).catch(res => {
              reject(res)
          })
  })
}

export const ajax = {
  get(url: string, config: any) {
      return request('get', url, null, config)
  },
  delete(url: string, data: any, config: any) {
      return request('delete', url, data, config)
  },
  head(url: string, config: any) {
      return request('head', url, null, config)
  },
  post(url: string, data: any, config: any) {
      if (!config.headers) {
          config.headers = {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
      }
      return request('post', url, qs.stringify(data), config)
  },
  put(url: string, data: any, config: any) {
      config.headers = {
          'Content-Type': 'application/json; charset=UTF-8'
      }
      return request('put', url, data, config)
  },
  patch(url: string, data: any, config={}) {
      return request('path', url, qs.stringify(data), config)
  },
  setCommonHeader(key: any, value: any) {
      service.defaults.headers.common[key] = value
  }
}
