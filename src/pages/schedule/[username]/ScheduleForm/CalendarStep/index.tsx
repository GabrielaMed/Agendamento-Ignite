import { Calendar } from "../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {
    const isDateSelected = false
    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar />
            {isDateSelected && (
                <TimePicker>
                    <TimePickerHeader>
                        Quarta-feira <span>18 de janeiro</span>
                    </TimePickerHeader>
                    <TimePickerList>
                        <TimePickerItem>09:00h</TimePickerItem>
                        <TimePickerItem>10:00h</TimePickerItem>
                        <TimePickerItem>11:00h</TimePickerItem>
                        <TimePickerItem>13:00h</TimePickerItem>
                        <TimePickerItem>14:00h</TimePickerItem>
                        <TimePickerItem>15:00h</TimePickerItem>
                        <TimePickerItem>16:00h</TimePickerItem>
                        <TimePickerItem>17:00h</TimePickerItem>
                    </TimePickerList>
                </TimePicker>
            )}
        </Container>
    )
}