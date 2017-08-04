import React, { Component } from 'react'
import redGraphImg from '../img/red.png'
import yellowGraphImg from '../img/yellow.png'
import greenGraphImg from '../img/green.png'
import '../css/ModelListCard.css'

class ModelListCard extends Component {
    render() {
        return (
            <div className="flex-items model-card">
                <div className="flex-box model-card-content">
                    <div className="flex-items model-list-img-wrapper">
                        <img className="model-list-img" src={redGraphImg} alt=""/>
                    </div>
                    <div className="flex-items" style={{marginTop: "5px"}}>
                        <span className="model-data-left">
                            Created On:
                        </span>
                        <span className="model-data-right">
                            1 Jan 2014
                        </span>
                        <br/>
                        <span className="model-data-left">
                            Type:
                        </span>
                        <span className="model-data-right">
                            Classification
                        </span>
                        <br/>
                        <span className="model-data-left">
                            Technique:
                        </span>
                        <span className="model-data-right">
                            Logistic Regression
                        </span>
                        <br/>
                        <span className="model-data-left">
                            Category:
                        </span>
                        <span className="model-data-right">
                            Marketing
                        </span>
                    </div>
                    <div className="flex-items model-card-end-content">
                        {/* Fairly Performing
                        <br/> */}
                        <button className="model-card-view-btn">View</button>
                        <button className="model-card-edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModelListCard
