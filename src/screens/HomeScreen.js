import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import {getNews} from '../store/actions/news'

import Modal from '../components/modal'


class HomeScreen extends Component{

    constructor(props){
        super(props)
        this.itemToRender=8
        this.state={
            modalVisible: false,
            modalUrl: '',
            itemToRender: this.itemToRender
        }
    }

    handleWebView = (url) => {
        this.setState({
            modalVisible: true,
            modalUrl: url
        })
    }

    handleModalClose = () => {
        this.setState({
            modalVisible: false,
            modalUrl: ''
        })
    }

    componentDidMount(){
        this.props.dispatch(getNews())
    }

    render(){
        return(
            <View>
                <View style={{ alignItems: 'center', height: '7%', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#ecf0f1', borderWidth:2}}>
                    <Text style={{fontSize: 20, fontWeight:'bold'}}>N E W S</Text>
                </View>
                <View style={{height: '93%'}}>
                    <ScrollView
                        onMomentumScrollEnd={(e) => {
                            const scrollPosition = e.nativeEvent.contentOffset.y
                            const scrollViewHeight = e.nativeEvent.layoutMeasurement.height
                            const contentHeight = e.nativeEvent.contentSize.height
                            const isScrolledToBottom = scrollViewHeight + scrollPosition

                            if(isScrolledToBottom >= (contentHeight-50) && this.state.itemToRender <= this.props.news.item.length){
                                this.setState({
                                    itemToRender: this.state.itemToRender + 8
                                })
                            }
                        }}
                    >
                        {this.props.news.item !== null && this.props.news.item.map((item, index) => {
                            if(index+1 <= this.state.itemToRender){
                                return(
                                    <TouchableOpacity onPress={() => this.handleWebView(item.url)} key={index} style={{ borderRadius: 5, marginHorizontal: 10, marginTop: 20,paddingBottom:10, padding: 10, flexDirection: 'row', height: 150, borderBottomWidth: 1, borderColor: 'grey' }}>
                                        <Image source={{ uri: item.urlToImage }} style={{ width: 120, height: '100%' }} />
                                        <View style={{ marginHorizontal: 10, marginRight: '30%' }}>
                                            <Text numberOfLines={3} style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                            <Text numberOfLines={3} style={{ color: 'grey' }} >{item.description}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </ScrollView>
                </View>
                <Modal showModal={this.state.modalVisible} url={this.state.modalUrl} onClose={this.handleModalClose} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        news: state.news
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps)(HomeScreen)