import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types'


function Envelope({envelope}) {
  return (
    <div className='env'>
      <div className='sender-stamp'>
        <FromPerson senderAddress={envelope.senderAddress} />
        <Stamp stamp="STAMP" />
      </div>
      <ToPerson receiverAddress={envelope.receiverAddress} />
    </div>
  )
}

function Stamp({stamp}) {
  return (
    <div className='stamp'>
      <div>{stamp}</div>
    </div>
  )
}

Stamp.propTypes = {
  stamp: PropTypes.string.isRequired
}

function ToPerson({receiverAddress}) {
  const {name, address, zipcodeCity} = receiverAddress;
  return(
    <div className='to-person person'>
      <span className='name-to-person'>{name}</span>
      <span className='address-to-person'>{address}</span>
      <span className='zip-to-person'>{zipcodeCity}</span>
    </div>
  )
}

ToPerson.propTypes = {
  receiverAddress: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zipcodeCity: PropTypes.string.isRequired
  }).isRequired
}

function FromPerson({senderAddress}) {
  const {name, address, zipcodeCity} = senderAddress;
  return (
    <div className='from-person person'>
      <span className='name-to-person'>{name}</span>
      <span className='address-to-person'>{address}</span>
      <span className='zip-to-person'>{zipcodeCity}</span>
    </div>
  )
}

FromPerson.propTypes = {
  senderAddress: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zipcodeCity: PropTypes.string.isRequired
  }).isRequired
}

const envelope = {
  senderAddress: {
    name: "Mr. Sender",
    address: "123 Fake Str.",
    zipcodeCity: "Boston, MA 02118"
  },
  receiverAddress: {
    name: "Mrs. Receiver",
    address: "123 Fake Str.",
    zipcodeCity: "San Francisco, CA 94101"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Envelope envelope={envelope}/>);



