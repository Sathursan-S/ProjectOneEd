import React, { useState } from 'react'
import './MyClassSpaceCard.css'
import image from '../../Images/Card.png'
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditClassSpaceModal from '../EditClassSpaceModal/EditClassSpaceModal';

const MyClassSpaceCard = ({ classesCount, batch, classSpceDetails }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  return (
    <div className='EnrolledClassCard'>
         
          <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <button className='card-edit-button' onClick={toggleEditModal}><FaEdit /></button>
                <button className='card-trash-button'><FaTrash /></button>
            </div>
          <div className="card-details">
              <div className="class-counts">
                  <span>Class space</span>
                  <span>{classesCount} Classes</span>
              </div>
              <div className="card-details-1">
                  <span className="card-subject">{batch}</span>
                  
                  <span className="card-teacher">{ classSpceDetails}</span>
              </div>
            
      </div>
      {isEditModalOpen && (
      <EditClassSpaceModal
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        data={{ batch, classSpceDetails }}
      />
      )}
     
    </div>
  )
}

export default MyClassSpaceCard