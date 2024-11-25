import React from 'react'
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';



const CalenderComponent = () => {
    function handleEventDrop(info) {
        // info contains details about the moved event
        const { event } = info;
        
        // You can access the new start and end times of the event
        console.log(`Event moved to: ${event.start} - ${event.end}`);
        
        // Here, you can call a function or API to update the event data in your backend
        // For example, you can send the new start/end times to your server:
        // updateEventInBackend(event.id, event.start, event.end);
      
        // Optionally, you can display a confirmation message
        alert(`Event "${event.title}" has been moved!`);
      }
    return (<>
        <div>CalenderComponent</div>
        <div style={{ width: "100%", height: "100px", padding:"15px"}}>
            
            <FullCalendar
                plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth" //[dayGridMonth, dayGridYear, timeGridDay, timeGridWeek]
                headerToolbar={{
                    start:'today prev,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                eventDrop={handleEventDrop}
                weekNumbers={false}
                height={'90vh'}
                events={[
                    { 
                      title: 'Event 1', 
                      start: '2024-11-12T06:00:00', // Start at 6:00 AM
                      end: '2024-11-13T12:30:00', // End at 12:30 PM
                      color:"red"

                    },
                    { 
                      title: 'Event 2', 
                      start: '2024-11-13T06:00:00',
                      end: '2024-11-13T12:30:00',
                      color:"blue",
                      textColor:"black",
                      startEditable: true,
                      endEditable: true,
                      draggable: true, // This allows you to drag and resize the event
                    },
                    { 
                      title: 'Event 3', 
                      start: '2024-11-15T06:00:00',
                      end: '2024-11-15T12:30:00',
                      color:"green",
                      allDay:true // This makes the event span across the whole day
                      // If you want to make the event start at 6:00 AM and end at 12:00 PM, remove the 'allDay' property
                      // And set the start and end properties to '2024-11-15T06:00:00' and '2024-11-15T12:00:00' respectively

                    }
                ]}
            />
        </div>
    </>)
}

export default CalenderComponent