// All project content for the portfolio.
// Each project renders as a scroll "chapter".

export const projects = [
  {
    id: 'fraud-risk',
    index: 1,
    date: 'Aug 2026',
    role: 'Team Project · Data & Statistical Analyst',
    domain: 'Statistical Analysis · Machine Learning',
    title:
      'Health Insurance Claim Fraud Risk Scoring System under Limited Audit Capacity',
    tagline: 'Detection, quantification, and prioritization.',
    problem:
      'Health insurers lose 3 to 10% of their annual claim spend to fraud, yet audit teams can only review about 5% of incoming claims. A standard classifier does not answer the real question here. What matters is not how well a model separates the whole claim population, but how much fraud it can actually find inside that top 5%.',
    solution: [
      'Feature generation on clinical and administrative data to surface fraud signals hidden in the relationships between variables.',
      'A blend of LightGBM and CatBoost, evaluated with 5-fold cross validation and combined through rank-based sorting.',
      'Score calibration with Platt Scaling so the probabilities are reliable enough for auditors to act on.',
      'Normalized Recall@5% as the main metric, which is far more relevant than AUC.',
      'Fairness analysis across age and gender to make sure the model is not biased against any demographic.',
    ],
    result:
      'At 5% audit capacity, 8,008 claims were examined and the model identified 7,808 fraudulent ones with only 200 false alarms. That is a NormalizedRecall@5% of 0.975, meaning 97.5% of the achievable audit value was captured. Performance stayed stable when the budget moved between 1% and 7%.',
    recommendation:
      'The combined features from feature generation turned out to be the dominant predictors, which tells us fraud is not random per claim but organized in specific hotspots. Audits should also be pointed at clusters of facilities and regions with high risk scores, not only at individual claims.',
    metrics: [
      { value: '0.975', label: 'Normalized Recall at 5%' },
      { value: '7,808', label: 'Fraud caught of 8,008' },
      { value: '200', label: 'False alarms' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'Pandas', 'Numpy', 'Scipy', 'Statsmodels', 'Sklearn', 'Matplotlib', 'Seaborn'],
    repo: 'https://github.com/johanescedrick/health-insurance-claim-fraud-risk-system',
    accent: 'royal',
    visuals: [
      { src: 'p1-severity-secondary.jpg', caption: 'Fraud rate by severity level and secondary diagnosis' },
      { src: 'p1-los-heatmap.jpg', caption: 'Fraud rate by length of stay and severity' },
    ],
    steps: [
      { t: 'Data Understanding', d: 'Mapped the data structure, explored its condition, and identified the label along with the numerical and categorical features.' },
      { t: 'Exploratory Data Analysis', d: 'Looked at distribution, outliers, and anomalies. Univariate patterns failed to indicate fraud, while multivariate analysis uncovered the hidden ones.' },
      { t: 'Statistical Testing', d: 'Validated pattern significance with the Chi-Square test for categorical features and Mann-Whitney U for numerical ones.' },
      { t: 'End-to-end System Design', d: 'Designed the workflow from feature generation and preprocessing through inference and audit allocation so the output fits into the auditor workflow.' },
      { t: 'Prescriptive Analysis', d: 'Turned the overall analysis and model results into strategic insights and recommendations.' },
    ],
  },
  {
    id: 'mbg-sentiment',
    index: 2,
    date: 'Aug 2026',
    role: 'Individual Project · Lead Data Scientist · NLP',
    domain: 'NLP · Sentiment & Topic Modeling',
    title:
      'Public Sentiment Topics on the Makan Bergizi Gratis (MBG) Program',
    tagline: 'Reading what the public is actually arguing about, using BERT and topic modeling.',
    problem:
      'Public perception of the MBG program is usually dominated by viral issues with a negative tone, driven by negativity bias, so the opinions and positive aspects that actually emerge go unnoticed. Mapping the discourse properly takes more than counting negative sentiment. It takes the substance of the conversation underneath it.',
    solution: [
      'Collected sample comments from YouTube videos relevant to the MBG program.',
      'Sentiment analysis with BERT to classify the comments into sentiment groups.',
      'LDA topic modeling run separately on the positive and negative comments to find the dominant topics within each group.',
    ],
    result:
      'Sentiment is heavily skewed, with 70.36% negative. Even so, the topics show the program is supported in principle. Criticism lands on execution and transparency, covering economic and policy critique, operational and budget complaints, and alleged corruption, rather than on whether the program is needed. On the positive side, people report real benefits for students at school.',
    recommendation:
      'Since the complaints are about execution rather than the idea itself, the priority is budget transparency and closer oversight of distribution on the ground.',
    metrics: [
      { value: '70.36%', label: 'Negative sentiment' },
      { value: '3 + 3', label: 'Topics, positive and negative' },
      { value: 'BERT', label: 'Sentiment model' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'Transformers', 'Gensim', 'Pandas', 'Numpy', 'Wordcloud', 'Matplotlib', 'Seaborn', 'YouTube API'],
    repo: 'https://github.com/johanescedrick/mbg-youtube-comments-topic-modeling-analysis',
    accent: 'ember',
    visuals: [
      { src: 'p2-positive-wc.jpg', caption: 'Word cloud of positive comments' },
      { src: 'p2-negative-wc.jpg', caption: 'Word cloud of negative comments' },
      { src: 'p2-corruption-wc.jpg', caption: 'Negative topic: alleged project corruption' },
    ],
    steps: [
      { t: 'Data Scraping', d: 'Collected comment data from YouTube videos relevant to the MBG program.' },
      { t: 'Exploratory Data Analysis', d: 'Examined word and character distributions to understand the general patterns of the comment texts.' },
      { t: 'Cleaning & Preprocessing', d: 'Cleaned the text and handled abbreviations, stop words, and other noise.' },
      { t: 'Sentiment Analysis', d: 'Classified comments as positive or negative with IndoBERT so the public pros and cons could be told apart.' },
      { t: 'Sentiment Class Analysis', d: 'Explored each sentiment class with word clouds and frequency charts.' },
      { t: 'Topic Modeling (LDA)', d: 'Ran LDA on the pro and con comments, then characterized and named each topic with word clouds.' },
      { t: 'Conclusion & Recommendation', d: 'Formulated the conclusions, findings, and recommendations from the full analysis.' },
    ],
  },
  {
    id: 'rice-supply',
    index: 3,
    date: 'Jun 2026',
    role: 'Team Project · Data & Mathematical Analyst',
    domain: 'Operations Research · Optimization',
    title:
      'Rice Supply Chain Profit Maximization with Linear Programming and Machine Learning',
    tagline: 'Identification, reduction, and optimization across five connected actors.',
    problem:
      'The rice supply chain in West Java involves five interconnected actors, and inefficiency at one of them ripples through the entire chain. So far there has been no integrated approach that can systematically locate the sources of inefficiency while turning those findings into cost optimization recommendations each actor can act on.',
    solution: [
      'Data Envelopment Analysis with CRS and VRS models to measure the efficiency of every actor across five regencies.',
      'K-Means clustering to group farmers and middlemen by business scale so benchmarking and optimization targets stay realistic.',
      'XGBoost regression to predict efficiency scores and revenue, with SHAP to identify the most influential factors.',
      'Linear programming to minimize controllable operating costs without reducing production output.',
    ],
    result:
      'Farmers (0.581) and wholesalers (0.599) are the primary sources of inefficiency. After optimization with LP, more than 50% of the business units in every stakeholder group saw their profit rise. The largest cost reductions came from retailer building rent (14.4%) and farmer labor cost (14.1%).',
    recommendation:
      'The biggest inefficiency does not come from the price of the main commodity but from operating costs, asset rentals, and labor allocation, so that is where intervention should start.',
    metrics: [
      { value: '>50%', label: 'Units with higher profit' },
      { value: '14.4%', label: 'Largest cost cut' },
      { value: '5 × 5', label: 'Actors and regencies' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'PuLP', 'Numpy', 'Matplotlib', 'Seaborn'],
    repo: 'https://github.com/johanescedrick/rice-supply-chain-profit-optimization',
    accent: 'royal',
    visuals: [
      { src: 'p3-dea-efficiency.jpg', caption: 'DEA-VRS efficiency per supply chain actor' },
      { src: 'p3-cost-reduction.jpg', caption: 'Cost reduction per input for each actor' },
      { src: 'p3-cost-saving.jpg', caption: 'Total cost saving per actor after LP' },
    ],
    steps: [
      { t: 'Data Understanding', d: 'Checked data condition, duplication, and structure for the five supply chain actors across five regencies.' },
      { t: 'Feature Generation', d: 'Built additional features such as total cost, operating profit, and profit margin to add depth to the data.' },
      { t: 'Exploratory Data Analysis', d: 'Analyzed distribution and characteristics across all actors to find the sources of inefficiency and gather early insight before modeling.' },
      { t: 'Building DEA Model', d: 'Measured the relative efficiency of each actor with CRS and VRS to locate inefficiency along the chain.' },
      { t: 'Linear Programming', d: 'Minimized cost and maximized profit with LP, guided by DEA benchmarks and feature importance from the ML models.' },
      { t: 'Prescriptive Insights', d: 'Identified the key bottlenecks and formulated strategic recommendations for the supply chain.' },
    ],
  },
  {
    id: 'ai-education',
    index: 4,
    date: 'Jun 2026',
    role: 'Individual Project · Lead Data Scientist · NLP',
    domain: 'NLP · Clustering & Topic Modeling',
    title:
      'Public Opinion on AI in Education in Indonesia: A Clustering and Topic Modeling Approach',
    tagline: 'Reading thousands of YouTube comments without reading them one by one.',
    problem:
      'Opinions about using AI in education are spread widely across platforms like YouTube. Reading and grouping thousands of comments by hand to see the patterns is not feasible, so an unsupervised approach was needed to cluster the data and extract the topics from the text.',
    solution: [
      'TF-IDF and CountVectorizer text representations, each tested as model input.',
      'K-Means clustering, with k selected through the Elbow Method and Silhouette Score, to group comments by semantic similarity.',
      'LDA topic modeling comparing three approaches: Sklearn LDA on TF-IDF, Sklearn LDA on CountVectorizer, and Gensim LDA.',
    ],
    result:
      'K-Means with CountVectorizer gave better and more specific cluster separation than the TF-IDF representation. Gensim LDA came out as the best model, producing six main topics at a coherence score of 0.527 that were detailed, easy to interpret, and true to the context of the comments.',
    recommendation:
      'For short and noisy Indonesian comment data, CountVectorizer paired with Gensim LDA is the stronger route to carry forward.',
    metrics: [
      { value: '0.527', label: 'Coherence, Gensim LDA' },
      { value: '6', label: 'Main topics' },
      { value: '3', label: 'LDA approaches compared' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'Gensim', 'Sklearn', 'Pandas', 'Numpy', 'Wordcloud', 'Matplotlib', 'Seaborn', 'YouTube API'],
    repo: 'https://github.com/johanescedrick/public-opinion-analysis-using-clustering-topic-modeling',
    accent: 'ember',
    visuals: [
      { src: 'p4-cluster-anak.jpg', caption: 'Cluster on youth and education' },
      { src: 'p4-topic2.jpg', caption: 'Topic word cloud on AI and learning' },
      { src: 'p4-silhouette.jpg', caption: 'Silhouette and Elbow for the optimal k' },
    ],
    steps: [
      { t: 'Scraping & Understanding', d: 'Collected YouTube comments about AI in education and checked the state of the data.' },
      { t: 'EDA & Frequency Analysis', d: 'Analyzed comment length, word counts, and frequent words with word clouds and frequency charts, since the comments are short and noisy.' },
      { t: 'Cleaning & Preprocessing', d: 'Lowercased the text, removed noise, and handled slang abbreviations and Indonesian stopwords.' },
      { t: 'Text Representation', d: 'Converted the text into numerical representations with TF-IDF and CountVectorizer as model input.' },
      { t: 'Clustering & Topic Modeling', d: 'Grouped the comments and extracted the dominant topics hidden in the text data.' },
      { t: 'Topic Interpretation', d: 'Analyzed the characteristics of each cluster and topic, then named them through persona analysis.' },
      { t: 'Conclusion & Recommendation', d: 'Compared performance and recommended the best approach along with directions for further development.' },
    ],
  },
  {
    id: 'gojek-reviews',
    index: 5,
    date: 'May 2026',
    role: 'Team Project · Lead Data Scientist · NLP',
    domain: 'NLP · Sentiment & Topic Modeling',
    title:
      'User Feedback Across Gojek App Versions',
    tagline: 'Watching how perception shifts release by release.',
    problem:
      'Companies often focus on shipping updates without fully understanding how user perception shifts from one version to the next. Gojek has hundreds of thousands of reviews on the Play Store, but star ratings alone do not explain the reasons behind them. Mapping praise and complaints per version makes it possible to catch problems early after an update.',
    solution: [
      'Sentiment analysis with IndoBERT, keeping only the reviews the model was confident about.',
      'LDA topic modeling run separately for positive and negative reviews, with the number of topics set by coherence score.',
      'Reviews and topics mapped by major and minor version to track satisfaction and complaint trends over time.',
    ],
    result:
      'Driver quality kept improving from v3.x to v5.x, and so did the quality of the app and the GoPay experience. Driver availability moved the other way and has been consistently worsening, along with long waiting times.',
    recommendation:
      'The main bottleneck right now is not driver quality but the allocation system and driver availability, and it has stayed unresolved across versions. Promos have also become a baseline expectation, so cutting them abruptly is likely to trigger complaints about pricing.',
    metrics: [
      { value: 'IndoBERT', label: 'Sentiment model' },
      { value: 'v3 to v5', label: 'Versions tracked' },
      { value: 'LDA', label: 'Topics per sentiment' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'Gensim', 'Sklearn', 'Pandas', 'Numpy', 'Wordcloud', 'Matplotlib', 'Seaborn', 'Google Play Scraper'],
    repo: 'https://github.com/johanescedrick/gojek-reviews-analysis-using-sentiment-analysis-topic-modeling',
    accent: 'royal',
    visuals: [
      { src: 'p5-driver-wc.jpg', caption: 'Negative topic word cloud on hard to find drivers' },
      { src: 'p5-version-heatmap.jpg', caption: 'Topic distribution by app version' },
      { src: 'p5-topwords.jpg', caption: 'Top words across the reviews' },
    ],
    steps: [
      { t: 'Scraping & Understanding', d: 'Collected Gojek reviews from the Play Store with google-play-scraper, then cleaned and filtered the data.' },
      { t: 'Exploratory Data Analysis', d: 'Explored the review data with word clouds and frequency charts to understand the general patterns first.' },
      { t: 'Data Preprocessing', d: 'Case folding, removal of irrelevant characters, normalization of non-standard words, and stopword removal.' },
      { t: 'Text Representation', d: 'Converted the text into numerical representations as input for topic modeling.' },
      { t: 'Topic Modeling (LDA)', d: 'Ran separate LDA models for positive and negative reviews, optimized the topic count with coherence scores, then analyzed and labeled each topic.' },
      { t: 'Advanced & Prescriptive', d: 'Mapped topic distribution by major and minor version to spot trends and anomalies, then formulated business insights and strategic recommendations.' },
    ],
  },
  {
    id: 'axa-claims',
    index: 6,
    date: 'Mar 2026',
    role: 'Team Project · Data & Risk Analyst',
    domain: 'Predictive Analytics · Risk',
    title:
      'Health Insurance Claim Analysis and Risk Prediction at AXA Financial Indonesia',
    tagline: 'Finding the diseases that quietly drive cost.',
    problem:
      'Public interest in health insurance keeps growing, and with it the volume and value of claims, which risks premium adjustments that burden policyholders. AXA needed a data driven way to understand what drives the surge in claims, predict future trends, and shape a strategy that keeps claim cost under control without compromising coverage quality or premium affordability.',
    solution: [
      'Comprehensive EDA on claim and policy data, covering trend analysis, feature to target relationships, and statistical tests.',
      'Four forecasting models compared, Hybrid, Ensemble, Random Forest, and SARIMA, for claim frequency, severity, and total claims.',
      'Advanced analysis through disease cost driver analysis, an insurance risk map, and anomaly analysis.',
    ],
    result:
      'Cancer is a major cost driver that recurs every month, driven by the nature of routine treatment such as chemotherapy and radiotherapy. The risk map identifies five high risk conditions: cancer, heart disease, musculoskeletal disorders, respiratory disease, and trauma. The 2026 projection shows a seasonal pattern with claims trending upward compared to previous years.',
    recommendation:
      'Underwriting and premium strategy should follow disease risk and claim history, and preventive care campaigns are worth preparing ahead of the seasonal peak the forecast points to.',
    metrics: [
      { value: '5', label: 'High risk conditions' },
      { value: '4', label: 'Forecasting models' },
      { value: '2026', label: 'Projection year' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'Pandas', 'Numpy', 'Scipy', 'Statsmodels', 'Sklearn', 'Matplotlib', 'Seaborn'],
    repo: 'https://github.com/johanescedrick/axa-health-insurance-claim-analysis-and-risk-prediction',
    accent: 'ember',
    visuals: [
      { src: 'p6-riskmap.jpg', caption: 'Insurance risk map by frequency and severity' },
      { src: 'p6-forecast.jpg', caption: 'Forecast of total claim value per month in 2026' },
      { src: 'p6-feature-importance.jpg', caption: 'Feature importance across the models' },
    ],
    steps: [
      { t: 'Understanding & Cleaning', d: 'Examined the structure, missing values, and data types of the claims, then set an imputation strategy per column.' },
      { t: 'Exploratory Data Analysis', d: 'Analyzed claim trends by day, month, and quarter, plus the relationship between features and claim amounts.' },
      { t: 'Statistical Test', d: 'Used a correlation map and non-parametric tests, Mann-Whitney U and Kruskal-Wallis, to validate feature significance against the target.' },
      { t: 'Feature Engineering', d: 'Set up aggregation features, handled high-cardinality ICD data, and tailored preprocessing to each model.' },
      { t: 'Advanced Data Analysis', d: 'Looked at disease cost drivers, insurance risk mapping, anomalies such as split billing and overseas cases, and seasonal claim patterns.' },
      { t: 'Prescriptive Insights', d: 'Formulated recommendations for underwriting, premiums, and preventive care from all the findings and prediction results.' },
    ],
  },
  {
    id: 'used-car-ann',
    index: 7,
    date: 'Nov 2025',
    role: 'Individual Project · Lead Data Scientist · Predictive & Comparative Analysis',
    domain: 'Deep Learning · Comparative Analysis',
    title:
      'Comparative Analysis of Activation Functions in Artificial Neural Networks for Used Car Price Prediction',
    tagline: 'A choice people treat as trivial, tested properly.',
    problem:
      'Predicting used car prices accurately is difficult because price is shaped by many factors whose relationships are not always linear. The activation function in the hidden layer is often treated as a trivial matter, yet it has a real effect on how well the model learns complex patterns and whether it runs into problems like vanishing gradients.',
    solution: [
      'EDA to understand how the features relate to selling price and to detect extreme outliers.',
      'An ANN with three hidden layers built with two different activation functions for comparison, sigmoid and ReLU.',
      'Hyperparameter tuning with Random Search in Keras Tuner to find the best combination of neuron counts and learning rate.',
    ],
    result:
      'ReLU proved superior to sigmoid for this regression task because it addresses the vanishing gradient problem. The best result, though, came from pairing ReLU with the right hyperparameters rather than from swapping the activation function alone. Tuning gave the strongest performance across every metric.',
    recommendation:
      'The choice of architecture and hyperparameters matters just as much as the choice of activation function, so tuning deserves the same attention as picking the function itself.',
    metrics: [
      { value: '3', label: 'Models compared' },
      { value: 'ReLU', label: 'Best activation' },
      { value: '3', label: 'Hidden layers' },
    ],
    stack: ['Python', 'Jupyter Notebook', 'Tensorflow', 'Keras', 'Sklearn', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn'],
    repo: 'https://github.com/johanescedrick/used-car-price-prediction',
    accent: 'royal',
    visuals: [
      { src: 'p7-model2-reg.jpg', caption: 'Best model, actual against predicted price' },
      { src: 'p7-price-trend.jpg', caption: 'Selling price over the years by seller type' },
      { src: 'p7-brand-price.jpg', caption: 'Average price per brand' },
    ],
    steps: [
      { t: 'Understanding & Cleaning', d: 'Examined the data structure, handled missing values, fixed inconsistent column formats, and corrected unit related outliers by hand.' },
      { t: 'Exploratory Data Analysis', d: 'Analyzed numerical and categorical distributions, detected and handled extreme outliers, and studied how features relate to selling price.' },
      { t: 'Feature Engineering', d: 'Created a car age feature, scaled numerics with RobustScaler, and encoded categoricals with One-Hot and Label Encoding.' },
      { t: 'Building Model', d: 'Built two ANNs with three hidden layers using sigmoid and ReLU, then analyzed the differences and issues tied to each function.' },
      { t: 'Hyperparameter Tuning', d: 'Ran Random Search with Keras Tuner to find the best combination of neurons per layer and learning rate.' },
      { t: 'Evaluation & Comparison', d: 'Evaluated all three models on the test set, then drew conclusions and recommendations for further development.' },
    ],
  },
]

// Additional projects that appear on the CV/PDF but without full case studies.
export const moreProjects = [
  { title: 'Multi-Commodity Distribution Optimization using Stochastic and Distributionally Robust Optimization Methods', date: 'Jun 2026', kind: 'Mathematical Modeling' },
  { title: 'Comparison of Single-Stage and Multi-Stage Classification Approaches for IndoBERT-Based Sports News Classification', date: 'Jun 2026', kind: 'NLP' },
  { title: 'MonoClip, a video editor app with directly integrated AI features', date: 'Jun 2026', kind: 'Software Engineering' },
  { title: 'Text Analysis and Classification of Game Reviews Using Different Text Representation Methods', date: 'Apr 2026', kind: 'NLP' },
  { title: 'Emotion Analysis: Multiclass Classification using Bidirectional GRU and DistilBERT', date: 'Jan 2026', kind: 'Deep Learning' },
  { title: 'Fruit Image Reconstruction using Variational Autoencoder (VAE)', date: 'Jan 2026', kind: 'Deep Learning' },
  { title: 'A Mathematical Model of Serious and Minor Criminal Activity using Non-Linear Systems of Ordinary Differential Equations', date: 'Dec 2025', kind: 'Differential Equations' },
  { title: 'A Multi-Task Learning Approach to Cyberbullying Detection via XLM-RoBERTa, ResNet50, and CentralNet Fusion', date: 'Dec 2025', kind: 'Deep Learning' },
  { title: 'A Comparative Study of Standard CNN and Transfer Learning Architectures for Human Nail Condition Classification', date: 'Nov 2025', kind: 'Deep Learning' },
]
