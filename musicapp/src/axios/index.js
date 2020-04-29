import React, { Component } from 'react'
import JsonP from 'jsonp'
import axios from 'axios'


export default class index extends Component {

    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options) {
        return new Promise((resolve, reject) => {
            axios.get({
                url: options.url,
                method: 'get',
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status == '200') {
                    let res = response.data;
                    resolve(res);
                } else {
                    let res = response.data;
                    reject(res);
                }
            })
        });
    }

}
