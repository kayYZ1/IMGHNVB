import { Alert } from 'antd';

interface AlertProps {
  message: string,
  description: string
  type: "success" | "info" | "warning" | "error"
}

const AlertComponent = ({ message, description, type }: AlertProps) => {
  return (
    <Alert message={message} type={type} description={description} showIcon/>
  )
}

export default AlertComponent