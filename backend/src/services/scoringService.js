const cleanText = (text) => {
  return text
    .replace(/\s+/g, " ")
    .replace(/([A-Z])\s(?=[A-Z])/g, "$1")
    .replace(/([a-z])\s(?=[a-z])/g, "$1")
    .toLowerCase()
    .trim();
};

const containsKeyword = (text, keywords) => {
  return keywords.some((keyword) =>
    text.includes(keyword.toLowerCase())
  );
};

const scoreResume = (rawText) => {
  const text = cleanText(rawText);

  let score = 0;

  const strengths = [];
  const weaknesses = [];

  const skillsKeywords = [
    "skills",
    "technical skills",
    "frontend",
    "backend",
    "mongodb",
    "react",
  ];

  if (containsKeyword(text, skillsKeywords)) {
    score += 15;
    strengths.push("Skills section detected");
  } else {
    weaknesses.push("Missing skills section");
  }

  const projectKeywords = [
    "projects",
    "project",
    "developed",
    "built",
    "implemented",
  ];

  if (containsKeyword(text, projectKeywords)) {
    score += 15;
    strengths.push("Projects detected");
  } else {
    weaknesses.push("Missing projects section");
  }

  const educationKeywords = [
    "education",
    "college",
    "bca",
    "university",
  ];

  if (containsKeyword(text, educationKeywords)) {
    score += 10;
    strengths.push("Education section detected");
  } else {
    weaknesses.push("Missing education section");
  }

  const experienceKeywords = [
    "experience",
    "internship",
    "developer",
    "full stack developer",
  ];

  if (containsKeyword(text, experienceKeywords)) {
    score += 10;
    strengths.push("Experience detected");
  } else {
    weaknesses.push("Missing experience section");
  }

  if (text.includes("github")) {
    score += 10;
    strengths.push("GitHub profile found");
  } else {
    weaknesses.push("Missing GitHub profile");
  }

  if (text.includes("linkedin")) {
    score += 5;
    strengths.push("LinkedIn profile found");
  } else {
    weaknesses.push("Missing LinkedIn profile");
  }

  const metricsRegex =
    /\d+%|\d+\+|\d+\s?(users|projects|clients|students)/i;

  if (metricsRegex.test(text)) {
    score += 10;
    strengths.push("Quantified achievements found");
  } else {
    weaknesses.push("No measurable achievements");
  }

  if (text.length > 500) {
    score += 15;
    strengths.push("Good ATS resume length");
  } else {
    weaknesses.push("Resume too short");
  }

  const actionWords = [
    "developed",
    "built",
    "implemented",
    "created",
    "designed",
    "improved",
    "integrated",
  ];

  if (containsKeyword(text, actionWords)) {
    score += 10;
    strengths.push("Strong action words used");
  } else {
    weaknesses.push("Weak action language");
  }

  let status = "";

  if (score >= 80) {
    status = "Excellent";
  } else if (score >= 65) {
    status = "Placement Ready";
  } else if (score >= 40) {
    status = "Needs Improvement";
  } else {
    status = "High Risk";
  }

  return {
    totalScore: score,
    status,
    strengths,
    weaknesses,
  };
};

module.exports = scoreResume;