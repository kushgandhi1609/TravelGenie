import axios from 'axios';

export const generateItinerary = async (req, res) => {
  const { destination, budget, days } = req.body;

  const prompt = `
Create a detailed ${days}-day travel itinerary for ${destination}
within a budget of ₹${budget} Indian Rupees.

Include:
- Tourist attractions
- Food recommendations
- Hotels
- Transportation
- Daily schedule
`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({
      itinerary: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: 'AI generation failed',
    });
  }
};