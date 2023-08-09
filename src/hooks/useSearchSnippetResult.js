import { useEffect, useState } from "react";

function useSearchSnippetResult(searchResults) {
  const [snippetResult, setSnippetResult] = useState([]);

  useEffect(() => {
    if (!searchResults || searchResults.length === 0 || searchResults === "") {
      setSnippetResult([]);
      return;
    }

    const filteredResults = searchResults.filter(
      (result) => result.poster_path
    );

    setSnippetResult(filteredResults.slice(0, 6));
  }, [searchResults]);

  return { snippetResult };
}

export default useSearchSnippetResult;
