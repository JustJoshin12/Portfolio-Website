

function scrollToPortfolio() {
 
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

const PortfolioButton = () => {
  return (
    <button
      className="btn btn-neutral bg-slate-600 border-none"
      onClick={scrollToPortfolio}
    >
      My Portfolio
    </button>
  );
}

export default PortfolioButton;
