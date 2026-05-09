import Weakness from "./Weakness";
import ResumeTable from "./ResumeTable";
import DownloadButton from "./DownloadButton";
import AnalyzeCard from "./AnalyzeCard";

const Dashboard = ({ data }) => {
  return (
    <div className="mt-14">
      <AnalyzeCard analytics={data.analytics} />

      <Weakness
        weaknesses={data.analytics.topWeaknesses}
      />

      <ResumeTable resumes={data.resumes} />

      <DownloadButton />
    </div>
  );
};

export default Dashboard;