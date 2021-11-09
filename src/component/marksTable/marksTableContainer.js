import React from 'react';
import { connect } from 'react-redux';
import { setMarks, getMarksThunk } from '../../reducer/marksReducer';
import { setFio, getFioThunk } from '../../reducer/fioReducer';
import { setDataLesson, getDataLessonThunk } from '../../reducer/dataLessonReducer';
import MarksTable from './MarksTable.js';



class marksTableContainer extends React.Component{
    
    componentDidMount(){
        this.props.getMarksThunk();
        this.props.getFioThunk();
    }
    componentWillUnmount(){
        window.location.reload();
    }
    render(){
        return(
            <MarksTable marks={this.props.marks} fio={this.props.fio} dataLesson={this.props.dataLesson}/>
        )
    }
}
    let mapStateToProps = (state) => {
        return {
            marks: state.marksPage.marks,
            fio: state.fioPage.fio,
            dataLesson: state.dataLessonPage.dataLesson
        }
    }



export default connect( mapStateToProps, {setMarks, getMarksThunk, setFio, getFioThunk, setDataLesson, getDataLessonThunk} )(marksTableContainer);