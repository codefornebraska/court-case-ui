import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export default function MyCalendar(props) {
    return (
        <div>
            Calendar here
        </div>
    )
}
