import {
    connect
} from 'react-redux';

import MantraForm from '../components/MantraForm';
import { actionAddMantra } from '../actions';


// are we displaying information from state or changing information from state or both?
// answer = changing info so...
// we need mapDispatchToProps

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newMantra) => {
            //  how do you know what the action should be? 
            //  look at actions file! 
            dispatch(actionAddMantra(newMantra))
        }
    }
}

//  fancy version - equivalent to the version above, but only uses arrow functions 

// const mapStateToProps = dispatch => ({
//     handleSubmit: (newMantra) => dispatch(actionAddMantra(newMantra))
// });

// wire everything together! 

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(MantraForm);
