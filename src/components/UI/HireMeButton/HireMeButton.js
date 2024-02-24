function sendEmail() {
  window.location.href = "mailto:joshdevsmith.97@gmail.com";
}

const HireMeButton = () => {
  return (
    <button
      className="btn btn-neutral bg-slate-600 border-none"
      onClick={sendEmail}
    >
      Email me
    </button>
  );
};

export default HireMeButton;
