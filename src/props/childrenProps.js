import React from 'react'

export default function childrenProps(props) {
    return (
        <div>
            <h3>Children Props</h3>

            {/* this.props.children đối với class */}
            {props.children}
        </div>
    )
}
