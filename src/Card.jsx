import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";



import PropTypes from "prop-types";

Card.propTypes={
    plan:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    users:PropTypes.string.isRequired,
    storage:PropTypes.string.isRequired,
    pubpro:PropTypes.string.isRequired,
    access:PropTypes.string.isRequired,
    pripro:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
    sub:PropTypes.string.isRequired,
    status:PropTypes.string.isRequired,
};

function Card({plan,price,users,storage,pubpro,access,pripro,phone,sub,status}){
    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{plan}</h4>
            <h1 className="card-title pricing-card-title">${price}/month</h1>
          </div>
          <div className="card-body">
            
            <ul className="list-unstyled mt-3 mb-4">
                
              <li><FontAwesomeIcon icon={faCheck} /> {users} User</li>
              <li><FontAwesomeIcon icon={faCheck} /> {storage} GB of Storage</li>
              <li><FontAwesomeIcon icon={faCheck} /> {pubpro} Public Projects </li>
              <li><FontAwesomeIcon icon={faCheck} /> {access} Access</li>
              <li><FontAwesomeIcon icon={faCheck} /> {pripro} Private Projects </li>
              <li><FontAwesomeIcon icon={faCheck} /> {phone} Phone Support</li>
              <li><FontAwesomeIcon icon={faCheck} /> {sub} Subdomain</li>
              <li><FontAwesomeIcon icon={faCheck} /> {status} Status Report</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">BUTTON</button>
          </div>
        </div>
      </div>
    )
}

export default Card;