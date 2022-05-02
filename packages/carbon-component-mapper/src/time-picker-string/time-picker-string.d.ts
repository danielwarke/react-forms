import { UseFieldApiComponentConfig } from "@data-driven-forms/react-form-renderer";

import { FormGroupProps } from "../form-group";

import { TimePickerProps as CarbonTimePickerProps, SelectItemProps } from 'carbon-components-react';

export interface Timezone extends SelectItemProps {
    value: string;
    label?: string;
}

interface InternalTimePickerProps extends CarbonTimePickerProps {
    twelveHoursFormat?: boolean;
    timezones?: Timezone[];
}

export type TimePickerStringProps = InternalTimePickerProps & FormGroupProps & UseFieldApiComponentConfig;

declare const TimePickerString: React.ComponentType<TimePickerStringProps>;

export default TimePickerString;
