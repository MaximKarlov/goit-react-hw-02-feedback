import MessageCss from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={MessageCss.message}>{message}</p>;
};
