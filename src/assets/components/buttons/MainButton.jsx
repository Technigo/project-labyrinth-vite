

export const MainButton = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="main-button">
      {children}
    </button>
  );
};

