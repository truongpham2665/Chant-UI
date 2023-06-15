export function formatCurrency(value: number): string {
    const tmpString = value.toString();
    return tmpString.replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

import MyButton from './MyButton';

export {MyButton}
