import { useState } from "react";
import Button from "../../components/ui/Button";
import { generateCode } from "../../services/aiService.js";
import { LANGUAGES } from "../../utils/constants.js";
import "./CodeGenerator.css";

const CodeGenerator = () => {
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!description.trim()) {
      setError("Please describe what you want to build");
      return;
    }
    setError("");

    try {
      setLoading(true);
      const { data } = await generateCode(description, language);
      setCode(data.data.code);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to generate code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="code-gen-page">
      <h1 className="page-title">Code Generator</h1>
      <p className="page-subtitle">Describe what you need, and let AI write the code.</p>

      <div className="code-gen-controls">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="code-gen-select">
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. A function that debounces API calls"
          className="code-gen-textarea"
          rows={4}
        />

        {error && <p className="code-gen-error">{error}</p>}

        <Button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Code"}
        </Button>
      </div>

      {code && (
        <pre className="code-gen-output">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

export default CodeGenerator;
