document.addEventListener('DOMContentLoaded', function() {
  const generateBtn = document.getElementById('generate-btn');

  generateBtn.addEventListener('click', function() {
    const summary = document.getElementById('summary').value;
    const workExperience = [
      {
        company: document.getElementById('company-1').value,
        location: document.getElementById('location-1').value,
        duration: document.getElementById('duration-1').value,
        designation: document.getElementById('designation-1').value,
        description: document.getElementById('description-1').value
      },
    ]; // This can be extended to include more work experience items

    const education = document.getElementById('education').value;
    const certifications = document.getElementById('certifications').value;
    const skills = document.getElementById('skills').value;
    const jobDescription = document.getElementById('job-description').value;

    // Call the function to simulate a search and show results
    searchAndDisplayResults(summary, workExperience, education, certifications, skills, jobDescription);
  });

  function searchAndDisplayResults(summary, workExperience, education, certifications, skills, jobDescription) {
    // This function simulates sending data to ChatGPT, Google Gemini, and Copilot APIs
    // In this case, it's just displaying the collected data in the results section

    const resume1 = document.getElementById('resume1');
    const resume2 = document.getElementById('resume2');
    const resume3 = document.getElementById('resume3');

    resume1.innerHTML = `
      <h4>Resume 1 (ChatGPT)</h4>
      <p><strong>Professional Summary:</strong> ${summary}</p>
      <p><strong>Work Experience:</strong> ${JSON.stringify(workExperience)}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Certifications:</strong> ${certifications}</p>
      <p><strong>Skills:</strong> ${skills}</p>
    `;

    resume2.innerHTML = `
      <h4>Resume 2 (Google Gemini)</h4>
      <p><strong>Job Description:</strong> ${jobDescription}</p>
    `;

    resume3.innerHTML = `
      <h4>Resume 3 (Copilot)</h4>
      <p><strong>Work Experience and Skills:</strong> ${skills}</p>
    `;

    // Display the results section
    document.getElementById('results-section').style.display = 'block';
  }
});
