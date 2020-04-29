import { Component } from 'react'
import axios from 'axios';

export default class Axios extends Component {


    static ajax(options) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                baseURL:'https://autumnfish.cn',
                url: options.url,
                params: options.params
            }).then((response,err) => {
                if (response.status&&response.status === 200) {
                    resolve(response.data)
                }else{
                    reject(err)
                }
            })
        })
    }
}
