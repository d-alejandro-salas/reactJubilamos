// src/components/WspButton.jsx

function WspButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5491132140614"
      className="wsp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp icono"></i>
    </a>
  );
}

export default WspButton;