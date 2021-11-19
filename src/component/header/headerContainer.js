import React from 'react';
import { connect } from 'react-redux';
import { setDiscipline, getDisciplineThunk } from '../../reducer/headerReducer.js';
import Header from './Header.js';



class headerContainer extends React.Component{
    
    componentDidMount(){
        // this.props.getMarksThunk();
        // this.props.getFioThunk();
        this.props.getDisciplineThunk();
    }
    componentWillUnmount(){
        window.location.reload();
    }
    render(){
        return(
            <Header discipline={this.props.discipline}/>
        )
    }
}
    let mapStateToProps = (state) => {
        return {
            discipline: state.disciplinePage.discipline,
        }
    }



export default connect( mapStateToProps, {setDiscipline, getDisciplineThunk} )(headerContainer);