import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { messages } from '../helper/calendar-messages-es'
import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'



import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendarScreen.css'
import { useDispatch } from 'react-redux'
import modalSlice, { openModal } from '../../reducers/modalSlice'

// import 'moment/locale/es'  // this is the config to change the language in moment

moment.locale( 'es' )

const localizer = momentLocalizer(moment);

const event = [{
    title: 'cumpleanos de mi mama',
    start: moment().toDate(),
    end: moment().add( 2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'comprar el pastel'
}]


export const CalendarScreen = () => {

    const dispatch = useDispatch()

    const [lastView, setlastView] = useState( localStorage.getItem( 'lastView' ) || 'Month' )


    const doubleCLick = (e) =>{
        dispatch(modalSlice())
    }

    const onSelectEvent = (e) =>{
        console.log(e)
    }

    const onViewChange = (e) =>{
        setlastView(e)
        localStorage.setItem( 'lastView', e)
    }

    const eventStyleGetter = ({ event, start, end, isSelected}) =>{
        
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
    }
    return (
        <div className='calendar-screen'>
            <Navbar />


            <Calendar
                localizer={localizer}
                events={ event }
                startAccessor="start"
                endAccessor="end"
                notes="notes"
                messages={ messages }
                eventPropGetter={ eventStyleGetter}
                onDoubleClickEvent={ doubleCLick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    events: CalendarEvent
                }}
            />


            <CalendarModal />
        </div>
    )
}
