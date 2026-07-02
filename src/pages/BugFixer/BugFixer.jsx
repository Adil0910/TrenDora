import { useState } from "react";
import Button from "../../components/ui/Button";
import { fixBug } from "../../services/aiService.js";
import { LANGUAGES } from "../../utils/constants.js";
import "../CodeGenerator/CodeGenerator.css";

const BugFixer = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFix = async () => {
    if (!code.trim()) {
      setError("Please paste the code you want fixed");
      return;
    }
    setError("");

    try {
      setLoading(true);
      const { data } = await fixBug(code, language, errorMessage);
      setResult(data.data.result);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to analyze code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="code-gen-page">
      <h1 className="page-title">Bug Fixer</h1>
      <p className="page-subtitle">Paste your broken code and let AI find and fix the issue.</p>

      <div className="code-gen-controls">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="code-gen-select">
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="code-gen-textarea"
          rows={8}
        />

        <textarea
          value={errorMessage}
          onChange={(e) => setErrorMessage(e.target.value)}
          placeholder="Error message (optional)"
          className="code-gen-textarea"
          rows={2}
        />

        {error && <p className="code-gen-error">{error}</p>}

        <Button onClick={handleFix} disabled={loading}>
          {loading ? "Analyzing..." : "Fix Bug"}
        </Button>
      </div>

      {result && (
        <pre className="code-gen-output">
          <code>{result}</code>
        </pre>
      )}
    </div>
  );
};

export default BugFixer;
