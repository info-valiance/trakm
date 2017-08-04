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
                        <img className="model-list-img"
                            src={
                                this.props.data.performance === 'low' ?
                                redGraphImg : this.props.data.performance === 'fair' ?
                                yellowGraphImg : greenGraphImg
                            }
                            alt="Model Image"
                        />
                    </div>
                    <div className="flex-items" style={{marginTop: "5px"}}>
                        <span className="model-data-left">
                            Created On:
                        </span>
                        <span className="model-data-right">
                            {this.props.data.created}
                        </span>
                        <br/>
                        <span className="model-data-left">
                            Type:
                        </span>
                        <span className="model-data-right">
                            {this.props.data.type}
                        </span>
                        <br/>
                        <span className="model-data-left">
                            Technique:
                        </span>
                        <span className="model-data-right">
                            {this.props.data.technique}
                        </span>
                        <br/>
                        <span className="model-data-left">
                            Category:
                        </span>
                        <span className="model-data-right">
                            {this.props.data.category}
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
