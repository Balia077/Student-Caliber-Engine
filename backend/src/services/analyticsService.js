const generateAnalytics = (resumes) => {
  const totalResumes = resumes.length;

  let totalScore = 0;
  let highRiskCount = 0;

  const weaknessMap = {};

  resumes.forEach((resume) => {
    totalScore += resume.totalScore;

    if (resume.totalScore < 40) {
      highRiskCount++;
    }

    resume.weaknesses.forEach((weakness) => {
      weaknessMap[weakness] = (weaknessMap[weakness] || 0) + 1;
    });
  });

  const calibreScore = Math.round(totalScore / totalResumes);

  const topWeaknesses = Object.entries(weaknessMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([weakness, count]) => ({
      weakness,
      count,
    }));

  return {
    calibreScore,
    totalResumes,
    highRiskCount,
    topWeaknesses,
  };
};

module.exports = generateAnalytics;