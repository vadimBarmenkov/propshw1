import PropTypes from 'prop-types';
import {Star} from "./Star";

export const Stars = (props) => {
    const {count} = props;
    const stars = [];

    if(count >= 1 && count <= 5){
        for (let i = 0; i < count; i++){
            stars.push(<Star/>);
        }
        return(<ul className="card-body-stars u-clearfix">{stars}</ul>)
    }

}

Stars.protoTypes = {
    count: PropTypes.number.isRequired,
}

