const DownloadResumeButton = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aayush-Barik-Resume.pdf'; // Make sure the path is correct
    link.download = 'Aayush-Barik-Resume.pdf'; // This is the file name the user will get
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
    >
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
