import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import { analyzeResume } from "../../services/resumeService.js";
import "./ResumeAnalyzer.css";

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [targetRole, setTargetRole] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a PDF resume file");
      return;
    }
    setError("");

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("targetRole", targetRole);

    try {
      setLoading(true);
      const { data } = await analyzeResume(formData);
      setResult(data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to analyze resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-page">
      <h1 className="page-title">Resume Analyzer</h1>
      <p className="page-subtitle">Upload your resume and get instant AI-powered feedback.</p>

      <form className="resume-upload-card" onSubmit={handleSubmit}>
        <label className="resume-upload-label">
          <MdCloudUpload size={28} />
          <span>{file ? file.name : "Click to upload PDF resume"}</span>
          <input
            type="file"
            accept="application/pdf"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <input
          type="text"
          placeholder="Target role (optional, e.g. Frontend Developer)"
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          className="resume-role-input"
        />

        {error && <p className="resume-error">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Resume"}
        </Button>
      </form>

      {loading && <Loader fullPage={false} />}

      {result && (
        <div className="resume-result-card">
          <div className="resume-score">Score: {result.score}/100</div>

          <div className="resume-section">
            <h3>Strengths</h3>
            <ul>
              {result.strengths.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3>Weaknesses</h3>
            <ul>
              {result.weaknesses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3>Suggestions</h3>
            <ul>
              {result.suggestions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
