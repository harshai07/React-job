const Card = ({ children, bg = 'card-gray' }) => {
  return <div className={`card ${bg}`}>{children}</div>;
};
export default Card;
