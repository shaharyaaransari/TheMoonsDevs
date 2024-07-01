import axios from "axios";

const ShowData = (prompt, generatedPost) => {
  const timestamp = new Date().toISOString()
  
  const data = {
    data: [
      {
        Timestamp: timestamp,
        Prompt: prompt,
        Post: generatedPost
      }
    ]
  };

  axios.post('https://sheetdb.io/api/v1/os7z3l7ouqvta', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log("Data successfully sent to Google Sheets:", response.data);
  })
  .catch(error => {
    console.error("Error sending data to Google Sheets:", error);
  });
};

export default ShowData;
