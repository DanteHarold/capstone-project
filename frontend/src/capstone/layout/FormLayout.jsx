export const FormLayout = ({ children, title }) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};
