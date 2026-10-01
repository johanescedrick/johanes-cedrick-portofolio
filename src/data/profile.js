export const profile = {
  name: 'Johanes Cedrick Wijaya',
  role: 'Data Science & AI Enthusiast',
  tagline:
    'Integrating computational and mathematical approaches to solve real-world challenges.',
  email: 'johanes.wijaya002@binus.ac.id',
  linkedin: 'https://www.linkedin.com/in/johanes-cedrick/',
  github: 'https://github.com/johanescedrick',
  location: 'Jakarta, Indonesia',
  about: [
    'Hi! My name is Johanes Cedrick, and I am a student in the double degree program for Computer Science and Mathematics at Bina Nusantara University. I have an interest in Artificial Intelligence, Data Science, and mathematical problem-solving approaches.',
    'My primary focus is analyzing data and designing intelligent, data-driven solutions to address real-world problems. I am passionate about integrating computational approaches and mathematical logic to formulate solutions, for example by combining optimization, mathematical modeling, and machine learning to tackle a specific problem.',
  ],
  education: [
    {
      degree: 'S.Kom. Computer Science',
      school: 'Bina Nusantara University',
      gpa: '3.79 / 4.00',
      grad: 'Expected 2027',
      coursework:
        'Data Structures, OOP, Database, Artificial Intelligence, Machine Learning, Deep Learning & Optimization, Text Mining, Computer Vision, Speech & Audio Processing',
    },
    {
      degree: 'S.Mat. Mathematics',
      school: 'Bina Nusantara University',
      gpa: '3.79 / 4.00',
      grad: 'Expected 2027',
      coursework:
        'Calculus, Discrete Mathematics, Mathematical Statistics, Complex Variable, Differential Equations, Geometry, Mathematical Modeling, Real Analysis, Abstract Algebra, Number Theory',
    },
  ],
  // Newest first. `imagePosition` is the object-position used when the photo
  // is cropped into the card frame.
  awards: [
    {
      award: 'Most Favorite Winner',
      event: 'WebGIS Competition 2026',
      organizer: 'MAPID',
      scope: 'National',
      year: '2026',
      project: 'StaSIUN: Station Spatial Intelligence for Urban Network',
      description:
        "Won Most Favorite at MAPID's WebGIS Competition 2026 with StaSIUN (Station Spatial Intelligence for Urban Network), a geospatial analysis application built to uncover commercial opportunities around train stations. The project used spatial intelligence to identify high-potential tenant locations within station areas, turning geographic and demographic data into actionable insights for commercial space planning.",
      tags: ['WebGIS', 'Geospatial Analysis', 'Spatial Intelligence'],
      image: 'mapid_webGIS_favorite_winner.jpeg',
      imagePosition: 'center 66%',
    },
    {
      award: 'Master of Data Analysis V',
      event: 'DAC 2025',
      organizer: 'Institut Teknologi Sepuluh Nopember (ITS)',
      scope: 'Southeast Asia',
      year: '2025',
      project: 'NLP and text processing',
      description:
        'Achieved Master of Data Analysis V at DAC 2025, a data science and analytics competition centered on NLP and text processing. Worked across three components: emotion analysis in song lyrics, song popularity prediction, and sentiment analysis, combining text representation, feature engineering, and model development to extract meaningful patterns from unstructured text data.',
      tags: ['NLP', 'Emotion Analysis', 'Sentiment Analysis', 'Popularity Prediction'],
      image: 'DAC_2025_juara5-web.jpg',
      imagePosition: 'center 40%',
    },
  ],
  skills: {
    Languages: ['Python', 'SQL', 'C', 'C++', 'Java', 'PHP', 'JavaScript'],
    'ML / AI': ['Machine Learning', 'Deep Learning', 'NLP', 'Text Mining', 'Computer Vision', 'Model Architecture Design'],
    Mathematics: ['Mathematical Modeling', 'Linear Programming', 'Mathematical Statistics', 'Real Analysis', 'Number Theory'],
    Frameworks: ['PyTorch', 'TensorFlow', 'Keras', 'PySpark', 'Laravel', 'React', 'FastAPI'],
  },
}
