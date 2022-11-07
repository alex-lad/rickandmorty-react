import React from 'react';
import './Pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  prevPage: () => Promise<void>;
  nextPage: () => Promise<void>;
}

function Pagination({prevPage, nextPage}: IProps): JSX.Element {
  return (
    <>
      <nav className='pagination'>
        <div className='pagination-prev' onClick={() => prevPage()}>
          <FontAwesomeIcon icon={faBackward} />
          <span>Prev</span>
        </div>
        <div className='pagination-next' onClick={() => nextPage()}>
          <span>Next</span>
          <FontAwesomeIcon icon={faForward} />
        </div>
      </nav>
    </>
  )
}

export default Pagination;
