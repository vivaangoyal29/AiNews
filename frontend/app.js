document.getElementById("fetch-news").addEventListener("click", async () => {
    const category = document.getElementById("category").value;
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "<p>Loading...</p>";
  
    try {
      const response = await fetch(`/api/news?category=${category}`);
      if (!response.ok) throw new Error("Failed to fetch news");
  
      const data = await response.json();
      newsContainer.innerHTML = data.news;
    } catch (error) {
      console.error("Error fetching news:", error);
      newsContainer.innerHTML = "<p>Error fetching news. Please try again.</p>";
    }
  });