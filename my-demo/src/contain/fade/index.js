import React from 'react'
import './index.less'
export default class Fade extends React.Component{

    render(){
        return (
            <ul className="fade">
                <li>
                    <img src="./image/1.jpg" alt="" />
                    <div className="overlay-top">
                        <div className="text">Hello World</div>
                    </div>
                </li>
                <li>
                    <img src="./image/2.jpg" alt="" />
                    <div className="overlay-bottom">
                        <div className="text">Hello World</div>
                    </div>
                </li>
                <li>
                    <img src="./image/1.jpg" alt="" />
                    <div className="overlay-left">
                        <div className="text">Hello World</div>
                    </div>
                </li>
                <li>
                    <img src="./image/2.jpg" alt="" />
                    <div className="overlay-right">
                        <div className="text">Hello World</div>
                    </div>
                </li>
            </ul>
        )
    }
}