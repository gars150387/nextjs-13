import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'



import { messages } from '../helper/calendar-messages-es'
import { Navbar } from '../ui/Navbar'



import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendarScreen.css'

// import 'moment/locale/es'  // this is the config to change the language in moment

// moment.locale( 'es' )

const localizer = momentLocalizer(moment);

const events = [{
    title: 'cumpleanos de mi mama',
    start: moment().toDate(),
    end: moment().add( 2, 'hours').toDate(),
    bgcolor: '#fafafa'
}]


export const CalendarScreen = () => {

    const eventStyleGetter = () =>{

    }
    return (
        <div className='calendar-screen'>
            <Navbar />


            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventStyleGetter={ eventStyleGetter}
            />
        </div>
    )
}
