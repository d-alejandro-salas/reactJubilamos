import useScrolledPast from '../../hooks/useScrolledPast';

export default function BackToTopButton() {
  const visible = useScrolledPast(300);
  if (!visible) return null;

  return (
    <button
      type="button"
      id="scrollToTopButton"
      className="scrollTopBtn"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
