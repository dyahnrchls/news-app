import React, {Component} from 'react'
import {Modal, View} from 'react-native'
import {WebView} from 'react-native-webview'


export default class ModalScreen extends Component{
    constructor(props){
        super(props)
    }

    handleClose = () => {
        return this.props.onClose()
    }

    render(){
        const {showModal, url} = this.props

            return(
                <Modal
                    animationType="slide"
                    visible={showModal}
                    onRequestClose={this.handleClose}    
                >
                        <WebView source={{uri: url}}/>
                </Modal>
            )
    }
}