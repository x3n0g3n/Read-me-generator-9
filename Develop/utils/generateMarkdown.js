function renderLicenseBadge(license) {
  const badges = {
  
  };
  
  return license ? badges[license.toLowerCase()] : '';
}

function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    isc: '[ISC](https://choosealicense.com/licenses/isc/)',
    gnu: '[GNU](https://choosealicense.com/licenses/gpl-3.0/)'
  };
  
  return license ? licenseLinks[license.toLowerCase()] : '';
}

function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the ${renderLicenseLink(license)} license.`;
  } else {
    return '';
  }
};
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [Installation](#installation)
- [License](#license)

## Description
${data.description}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Questions
If you have any questions, you can reach me at ${data.email}. You can also find more of my work on [GitHub](https://github.com/${data.github}).

## Installation
${data.installation}
## License
${renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;
