function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  const ContactButton = () => {
    return (
      <button
        className="text-xl p-6 transition-colors duration-500 font-bold font-playfair hover:text-white hover:bg-black rounded"
        onClick={scrollToContact}
      >
        Contact Me
      </button>
    );
  }
  
  export default ContactButton;