import { Button } from "antd";
import React from 'react';

const MyButton = (value: string | number) => {
    const alertValue = () => {
        try {
            alert(value)
        } catch (e) {
            alert('Định dạng không chính xác')
        }
    }
    return (
        <Button onClick={alertValue}>Click me</Button>
    )
}

export default MyButton;