import React, { Component } from 'react'
import RechartLineArea from './RechartLineArea.js'
import redGraphThumb from '../img/red.png'
import '../css/Overview.css'

class Overview extends Component {
    render() {
        return (
            <div className="overview-content-wrapper">
                <div className="flex-box overview-card overview-head">
                    <div className="flex-items page-name">
                        Model Name: Overview
                    </div>
                    <div className="flex-items page-head-filler"></div>
                    <div className="flex-items page-current-window">
                        Current Window
                    </div>
                </div>
                <div className="flex-box overview-card">
                    <div className="flex-items overview-gains-chart">
                        <RechartLineArea />
                    </div>
                </div>
                <div className="overview-card">
                    <div className="flex-box">
                        <div className="flex-items overview-card-head">
                            Model Details
                        </div>
                    </div>
                    <div className="flex-box model-detail-content">
                        <div className="flex-items model-detail-img">
                            <img className="overview-model-img" src={redGraphThumb} alt=""/>
                            <div className="model-detail-img-text">Model Name</div>
                        </div>
                        <div className="flex-items model-detail-text">
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Name</span>
                                <span className="detail-text-row-right">: Model Name</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Type</span>
                                <span className="detail-text-row-right">: Classification</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Technique</span>
                                <span className="detail-text-row-right">: Logistic Regression</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Category</span>
                                <span className="detail-text-row-right">: Fraud</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Development Window</span>
                                <span className="detail-text-row-right">: 1 Jan 14 to 31 Dec 14</span>
                            </div>
                        </div>
                        <div className="flex-items model-detail-btn">
                            <button className="overview-download">
                                <i className="fa fa-download" aria-hidden="true"></i> Download
                            </button>
                            <br />
                            <button className="overview-share">
                                <i className="fa fa-share-alt" aria-hidden="true"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview
