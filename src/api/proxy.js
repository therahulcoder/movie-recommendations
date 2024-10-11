export default async (req, res) => {
    const apiUrl = 'https://pastebin.com/raw/cVyp3McN';
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  };
  