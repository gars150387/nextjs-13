import React, {useState} from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const startDate = moment().minutes(0).second(0).add( 1, 'hours') //to set time from 3.45.52 to 4.00.00

export const CalendarModal = () => {

    // const [modalBehave, setmodalBehave] = useState( true )  useState to manipulate modal behave

    const closeModal = () => {
        // setmodalBehave(false)
    }

    const now = moment();


    const [startDate, setstartDate] = useState( now.toDate()  )

    console.log('now', now )

    
    const handleStartDateChange = (e) =>{
        setstartDate(e)
    }

    const end = moment().minutes(0).second(0).add(1, 'hours');


    const [endDate, setEndDate] = useState(end.toDate())

    const handleEndDateChange = (e) =>{
        setEndDate(e)
    }

    return (
        <div>
            <Modal
                isOpen={true}    //modalBehave to add new state
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
            >

                <h1> Nuevo evento </h1>
                <hr />
                <form className="container">

                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker 
                        onChange={ handleStartDateChange } 
                        value={startDate} 
                        className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker 
                        onChange={ handleEndDateChange } 
                        value={endDate} 
                        className="form-control"
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>

            </Modal>
        </div>
    )
}
