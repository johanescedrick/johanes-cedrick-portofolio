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
    tagline:
      'Detection, Quantification, Prioritization — a statistical & ML approach.',
    problem:
      'Health insurers lose 3–10% of annual claim spend to fraud, yet audit teams can only review 5% of incoming claims. A standard classifier tuned for overall accuracy misses the real need: what matters is not how well the model separates the whole population, but how pure the top 5% priority list actually is.',
    solution: [
      'Clinical–administrative feature generation to surface fraud signals hidden in relationships between variables.',
      'A blended LightGBM + CatBoost model, evaluated with 5-fold cross-validation and combined via rank-based sorting.',
      'Platt Scaling calibration so risk scores are trustworthy for human auditors.',
      'Optimized on NormalizedRecall@5% — the metric that reflects real audit capacity, not AUC.',
      'Fairness analysis across age and gender to guard against demographic bias.',
    ],
    result:
      'At 5% audit capacity (8,008 claims examined), the model caught 7,808 fraudulent claims with only 200 false alarms — NormalizedRecall@5% of 0.975, meaning 97.5% of the achievable audit value was captured. Performance stayed stable across 1%–7% budgets.',
    recommendation:
      'Feature-interaction predictors dominate, showing fraud is organized in hotspots rather than random per claim. Audits should target clusters of high-risk facilities and regions, not just individual claims.',
    metrics: [
      { value: '0.975', label: 'NormalizedRecall@5%' },
      { value: '7,808', label: 'Fraud caught / 8,008' },
      { value: '200', label: 'False alarms only' },
    ],
    stack: ['Python', 'LightGBM', 'CatBoost', 'Scikit-learn', 'SciPy', 'Statsmodels'],
    repo: 'https://github.com/johanescedrick/health-insurance-claim-fraud-risk-system',
    accent: 'royal',
    visuals: [
      { src: 'p1-severity-secondary.jpg', caption: 'Fraud rate: severity level × secondary diagnosis' },
      { src: 'p1-los-heatmap.jpg', caption: 'Fraud rate: length-of-stay interval × severity' },
    ],
    steps: [
      { t: 'Data Understanding', d: 'Mapped data structure, explored conditions, and identified labels plus numerical/categorical features.' },
      { t: 'Exploratory Data Analysis', d: 'Univariate patterns failed to indicate fraud; multivariate analysis uncovered hidden patterns like high severity without a secondary diagnosis.' },
      { t: 'Statistical Testing', d: 'Validated significance with Chi-Square (categorical) and Mann-Whitney U (numerical) tests.' },
      { t: 'End-to-end System Design', d: 'Designed the workflow diagram from feature generation to audit allocation so model output integrates into the auditor workflow.' },
      { t: 'Prescriptive Analysis', d: 'Formulated strategic insights and recommendations from the overall results.' },
    ],
  },
  {
    id: 'mbg-sentiment',
    index: 2,
    date: 'Aug 2026',
    role: 'Individual Project · Lead Data Scientist',
    domain: 'NLP · Sentiment & Topic Modeling',
    title:
      'Public Sentiment & Topics on the Makan Bergizi Gratis (MBG) Program',
    tagline: 'What the crowd feels — and what it is actually arguing about.',
    problem:
      'Public perception of the MBG program is dominated by viral, negative-leaning issues (negativity bias), drowning out the opinions and positive aspects actually emerging. A method was needed to map the discourse comprehensively — not just the size of negative sentiment, but the substance underneath it.',
    solution: [
      'Collected YouTube comments from videos relevant to the MBG program.',
      'Sentiment analysis with BERT to split comments into positive / negative groups.',
      'LDA topic modeling run separately on each sentiment group to find the dominant topics per side.',
    ],
    result:
      'Sentiment was heavily skewed — 70.36% negative. But the topics show the program is supported in principle: criticism targets execution and transparency (budget, distribution, alleged corruption), not the program\u2019s urgency. Positive voices report real benefits for students at school.',
    recommendation:
      'Because complaints center on execution rather than the idea itself, priority should go to budget transparency and on-the-ground distribution oversight — the true root of dissatisfaction.',
    metrics: [
      { value: '70.36%', label: 'Negative sentiment' },
      { value: '3 + 3', label: 'Topics (pos / neg)' },
      { value: 'BERT', label: 'Sentiment engine' },
    ],
    stack: ['Python', 'BERT', 'Gensim', 'Transformers', 'WordCloud', 'YouTube API'],
    repo: 'https://github.com/johanescedrick/mbg-youtube-comments-topic-modeling-analysis',
    accent: 'ember',
    visuals: [
      { src: 'p2-positive-wc.jpg', caption: 'Word cloud — positive comments' },
      { src: 'p2-negative-wc.jpg', caption: 'Word cloud — negative comments' },
      { src: 'p2-corruption-wc.jpg', caption: 'Negative topic: alleged project corruption' },
    ],
    steps: [
      { t: 'Data Scraping', d: 'Collected comment data from YouTube videos relevant to the MBG program.' },
      { t: 'Exploratory Data Analysis', d: 'Examined word and character distributions to understand comment-text patterns.' },
      { t: 'Cleaning & Preprocessing', d: 'Text cleaning, abbreviation handling, stopword and noise removal.' },
      { t: 'Sentiment Analysis', d: 'Classified comments into positive / negative with IndoBERT to separate public pros and cons.' },
      { t: 'Per-Class Analysis', d: 'Explored each sentiment class with word clouds and frequency charts.' },
      { t: 'Topic Modeling (LDA)', d: 'Ran LDA on pro and con comments, characterized each topic, and assigned names.' },
      { t: 'Conclusion & Recommendation', d: 'Formulated findings and recommendations from the full analysis.' },
    ],
  },
  {
    id: 'rice-supply',
    index: 3,
    date: 'Jun 2026',
    role: 'Team Project · Data & Mathematical Analyst',
    domain: 'Operations Research · Optimization',
    title:
      'Rice Supply Chain Profit Maximization with LP & Machine Learning',
    tagline: 'Identification, Reduction, Optimization across five key actors.',
    problem:
      'West Java\u2019s rice supply chain links five interdependent actors — when one is inefficient, the cost ripples through the whole chain. No integrated approach existed to systematically locate inefficiency and translate it into actionable, per-actor cost-optimization recommendations.',
    solution: [
      'Data Envelopment Analysis (DEA) with CRS & VRS models to measure each actor\u2019s efficiency across five regencies.',
      'K-Means clustering to group farmers and middlemen by business scale for realistic benchmarking.',
      'XGBoost regression to predict efficiency and revenue, with SHAP to surface the most influential factors.',
      'Linear Programming to minimize controllable operating costs without cutting production output.',
    ],
    result:
      'Farmers (0.581) and wholesalers (0.599) were the primary inefficiency sources. After LP optimization, more than 50% of business units across every actor group increased profit — biggest cuts in retailer building rent (14.4%) and farmer labor cost (14.1%).',
    recommendation:
      'The greatest inefficiency comes not from commodity prices but from operating costs, asset rentals, and labor allocation. Shared facilities (collective warehouses) and a B2B link from millers to retailers can shorten the chain and cut non-value-added cost.',
    metrics: [
      { value: '>50%', label: 'Units with higher profit' },
      { value: '14.4%', label: 'Top cost reduction' },
      { value: '5 × 5', label: 'Actors × regencies' },
    ],
    stack: ['Python', 'DEA', 'XGBoost', 'SHAP', 'PuLP', 'K-Means'],
    repo: 'https://github.com/johanescedrick/rice-supply-chain-profit-optimization',
    accent: 'royal',
    visuals: [
      { src: 'p3-dea-efficiency.jpg', caption: 'DEA-VRS efficiency per supply-chain actor' },
      { src: 'p3-cost-reduction.jpg', caption: '% cost reduction per input per actor' },
      { src: 'p3-cost-saving.jpg', caption: 'Total cost saving per actor after LP' },
    ],
    steps: [
      { t: 'Data Understanding', d: 'Checked data conditions, duplication, and structure for five actors across five regencies.' },
      { t: 'Feature Generation', d: 'Built total cost, operating profit, and profit margin to deepen the data.' },
      { t: 'Exploratory Data Analysis', d: 'Analyzed distributions and characteristics across all actors to find inefficiency sources and early insights.' },
      { t: 'Building DEA Model', d: 'Measured relative efficiency (CRS & VRS) to locate inefficiency along the chain.' },
      { t: 'Linear Programming', d: 'Minimized cost / maximized profit using LP, guided by DEA benchmarks and ML feature importance.' },
      { t: 'Prescriptive Insights', d: 'Identified bottlenecks and formulated strategic recommendations for the chain.' },
    ],
  },
  {
    id: 'ai-education',
    index: 4,
    date: 'Jun 2026',
    role: 'Individual Project · Lead Data Scientist',
    domain: 'NLP · Clustering & Topic Modeling',
    title:
      'Public Opinion on AI in Education: Clustering & Topic Modeling',
    tagline: 'Reading thousands of comments without reading them one by one.',
    problem:
      'Opinion about AI in education is scattered across platforms like YouTube in huge volume. Manually reading and grouping thousands of comments is not feasible, so an unsupervised approach was needed to cluster the data and extract topics automatically.',
    solution: [
      'TF-IDF and CountVectorizer text representations each tested as model input.',
      'K-Means clustering (k chosen via Elbow Method & Silhouette Score) to group comments by semantic similarity.',
      'LDA topic modeling comparing three approaches: Sklearn LDA (TF-IDF & CountVectorizer) and Gensim LDA.',
    ],
    result:
      'K-Means with CountVectorizer produced sharper, more specific clusters than TF-IDF. Gensim LDA was the best model — six main topics at a coherence score of 0.527, with detailed, interpretable topics that captured the specific context of the comments.',
    recommendation:
      'CountVectorizer + Gensim LDA is the stronger route for informal Indonesian comment data. Next steps: stronger preprocessing to filter mixed-in foreign language, and scaling up with a richer method such as BERTopic.',
    metrics: [
      { value: '0.527', label: 'Coherence (Gensim LDA)' },
      { value: '6', label: 'Main topics' },
      { value: '3', label: 'Approaches compared' },
    ],
    stack: ['Python', 'Gensim', 'Scikit-learn', 'K-Means', 'WordCloud', 'YouTube API'],
    repo: 'https://github.com/johanescedrick/public-opinion-analysis-using-clustering-topic-modeling',
    accent: 'ember',
    visuals: [
      { src: 'p4-cluster-anak.jpg', caption: 'Cluster: youth & education ("anak muda")' },
      { src: 'p4-topic2.jpg', caption: 'Topic word cloud — AI & learning' },
      { src: 'p4-silhouette.jpg', caption: 'Silhouette / Elbow for optimal k' },
    ],
    steps: [
      { t: 'Scraping & Understanding', d: 'Collected YouTube comments on AI in education and checked data state.' },
      { t: 'EDA & Frequency Analysis', d: 'Analyzed comment length, word counts, and frequent words with word clouds and charts — the data was short and noisy.' },
      { t: 'Cleaning & Preprocessing', d: 'Lowercased, removed noise, handled slang abbreviations and Indonesian stopwords.' },
      { t: 'Text Representation', d: 'Converted text to numerical form with TF-IDF and CountVectorizer.' },
      { t: 'Clustering & Topic Modeling', d: 'Grouped comments and extracted dominant hidden topics.' },
      { t: 'Interpretation & Analysis', d: 'Characterized each cluster/topic and named them via persona analysis.' },
      { t: 'Conclusion & Recommendation', d: 'Compared performance and recommended the best approach and next directions.' },
    ],
  },
  {
    id: 'gojek-reviews',
    index: 5,
    date: 'May 2026',
    role: 'Team Project · Lead Data Scientist',
    domain: 'NLP · Sentiment & Topic Modeling',
    title:
      'User Feedback Across Gojek App Versions',
    tagline: 'Every update ships — but what did users actually feel about it?',
    problem:
      'Companies focus on shipping updates without understanding how perception shifts version to version. Gojek has hundreds of thousands of Play Store reviews, yet star ratings alone don\u2019t explain the reasons. A method was needed to map praise and complaints per app version and catch issues early after each update.',
    solution: [
      'Sentiment analysis with IndoBERT — only high-confidence reviews kept for further processing.',
      'LDA topic modeling run separately for positive and negative reviews, with topic count set by coherence score.',
      'Reviews and topics mapped by major and minor version to track satisfaction and complaint trends over time.',
    ],
    result:
      'From ~118k clean reviews, 100,291 passed the high-confidence filter (sentiment accuracy 0.866). LDA produced 7 positive and 6 negative topics (manual precision 0.86). Driver quality, app quality, and GoPay all improved v3→v5, while driver availability and wait times consistently worsened — a spike to 51.9% "hard to find a driver" flagged the Ramadan 2026 driver crisis.',
    recommendation:
      'The real bottleneck is the driver allocation & availability system, not individual driver quality. Promos have become a baseline expectation, so cut them gradually. Version-level topic distribution can serve as an early-warning system for operational crises.',
    metrics: [
      { value: '100,291', label: 'High-confidence reviews' },
      { value: '0.866', label: 'Sentiment accuracy' },
      { value: '51.9%', label: 'Ramadan driver-crisis spike' },
    ],
    stack: ['Python', 'IndoBERT', 'Gensim', 'Scikit-learn', 'google-play-scraper'],
    repo: 'https://github.com/johanescedrick/gojek-reviews-analysis-using-sentiment-analysis-topic-modeling',
    accent: 'royal',
    visuals: [
      { src: 'p5-driver-wc.jpg', caption: 'Negative topic word cloud — "driver hard to find"' },
      { src: 'p5-version-heatmap.jpg', caption: 'Topic distribution by app version' },
      { src: 'p5-topwords.jpg', caption: 'Top words across reviews' },
    ],
    steps: [
      { t: 'Scraping & Understanding', d: 'Collected Gojek reviews via google-play-scraper, then cleaned and filtered.' },
      { t: 'Exploratory Data Analysis', d: 'Explored reviews with word clouds and frequency charts to read general patterns.' },
      { t: 'Data Preprocessing', d: 'Case folding, irrelevant-character removal, non-standard word normalization, stopword removal.' },
      { t: 'Text Representation', d: 'Converted text to numerical form for topic modeling.' },
      { t: 'Topic Modeling (LDA)', d: 'Ran separate LDA for positive/negative reviews, coherence-optimized topic count, then labeled each.' },
      { t: 'Advanced & Prescriptive', d: 'Mapped topic distribution by version to find trends and anomalies, then built business insights and strategy.' },
    ],
  },
  {
    id: 'axa-claims',
    index: 6,
    date: 'Mar 2026',
    role: 'Team Project · Data & Risk Analyst',
    domain: 'Predictive Analytics · Risk',
    title:
      'Health Insurance Claim Analysis & Risk Prediction — AXA Financial Indonesia',
    tagline: 'Which diseases quietly drive the cost — and what 2026 looks like.',
    problem:
      'Rising interest in health insurance brings rising claim volume and value, risking premium hikes that burden policyholders. AXA needed a data-driven way to understand what drives claim surges, predict future trends, and keep costs under control without compromising coverage or affordability.',
    solution: [
      'Comprehensive EDA on claim & policy data — trend analysis, feature–target relationships, and statistical tests.',
      'Four forecasting models compared — Hybrid, Ensemble, Random Forest, and SARIMA — for frequency, severity, and total claims.',
      'Advanced analysis: Disease Cost Driver Analysis, Insurance Risk Map, and Anomaly Analysis.',
    ],
    result:
      'Cancer is a major, monthly-recurring cost driver, driven by routine chemo/radiotherapy. The Risk Map flags five high-risk conditions: cancer, heart disease, musculoskeletal, respiratory, and trauma. The best forecaster (Hybrid) hit 4.83% MAPE, projecting a seasonal 2026 pattern with an upward claim trend.',
    recommendation:
      'Adjust underwriting and premiums by disease risk and history — especially for ages 45–60 and 60+. Prepare seasonal preventive campaigns for the early-year surge, and refine policy benefits as overseas treatment (consistently pricier) rises.',
    metrics: [
      { value: '4.83%', label: 'Best model MAPE' },
      { value: '5', label: 'High-risk diseases' },
      { value: '2026', label: 'Forecast horizon' },
    ],
    stack: ['Python', 'Random Forest', 'SARIMA', 'Statsmodels', 'SciPy', 'Scikit-learn'],
    repo: 'https://github.com/johanescedrick/axa-health-insurance-claim-analysis-and-risk-prediction',
    accent: 'ember',
    visuals: [
      { src: 'p6-riskmap.jpg', caption: 'Insurance risk map — frequency × severity' },
      { src: 'p6-forecast.jpg', caption: 'Forecast: total claim value per month, 2026' },
      { src: 'p6-feature-importance.jpg', caption: 'Feature importance across models' },
    ],
    steps: [
      { t: 'Understanding & Cleaning', d: 'Examined structure, missing values, and types; built column-specific imputation strategies.' },
      { t: 'Exploratory Data Analysis', d: 'Analyzed claim trends by day/month/quarter and feature–claim relationships.' },
      { t: 'Statistical Test', d: 'Correlation map plus Mann-Whitney U and Kruskal-Wallis to validate feature significance.' },
      { t: 'Feature Engineering', d: 'Set up aggregation features, handled high-cardinality ICD, and tailored preprocessing per model.' },
      { t: 'Advanced Data Analysis', d: 'Disease cost drivers, risk mapping, anomaly analysis (split billing, overseas cases), seasonal patterns.' },
      { t: 'Prescriptive Insights', d: 'Recommended underwriting, premium, and preventive-care strategies from all findings.' },
    ],
    note: 'Modeling & forecasting handled by a teammate; all other stages were mine.',
  },
  {
    id: 'used-car-ann',
    index: 7,
    date: 'Nov 2025',
    role: 'Individual Project · Lead Data Scientist',
    domain: 'Deep Learning · Comparative Analysis',
    title:
      'Activation Functions in ANNs for Used Car Price Prediction',
    tagline: 'A "trivial" choice — the activation function — that isn\u2019t.',
    problem:
      'Used car prices depend on many factors with non-linear relationships. The hidden-layer activation function is often treated as trivial, yet it strongly affects a model\u2019s ability to learn complex patterns and avoid issues like the vanishing gradient problem.',
    solution: [
      'EDA to understand feature–price relationships and detect extreme outliers.',
      'A 3-hidden-layer ANN built with two activation functions for comparison: sigmoid and ReLU.',
      'Hyperparameter tuning with Random Search (Keras Tuner) over neuron counts and learning rate.',
    ],
    result:
      'ReLU beat sigmoid for this regression task by addressing vanishing gradients — but the best result came from combining ReLU with the right hyperparameters (R² 0.959), not from swapping the activation alone. Sigmoid stalled at loss ~0.7 until the learning rate was lowered, freeing it from the local minimum.',
    recommendation:
      'Architecture and hyperparameters matter as much as the activation function itself. Add dropout to curb the mild overfitting seen with ReLU, grow the dataset for more variety, and consider deeper layers for more complex patterns.',
    metrics: [
      { value: '0.959', label: 'Best model R²' },
      { value: '$1,054', label: 'MAE (Model 1)' },
      { value: '3', label: 'Models compared' },
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Keras Tuner', 'Scikit-learn'],
    repo: 'https://github.com/johanescedrick/used-car-price-prediction',
    accent: 'royal',
    visuals: [
      { src: 'p7-model2-reg.jpg', caption: 'Best model — actual vs predicted price' },
      { src: 'p7-price-trend.jpg', caption: 'Selling price over years by seller type' },
      { src: 'p7-brand-price.jpg', caption: 'Average price per brand' },
    ],
    steps: [
      { t: 'Understanding & Cleaning', d: 'Examined structure, handled missing values, fixed inconsistent column formats, corrected unit outliers manually.' },
      { t: 'Exploratory Data Analysis', d: 'Analyzed numerical/categorical distributions, handled extreme outliers, studied feature–price relationships.' },
      { t: 'Feature Engineering', d: 'Created car age, scaled numerics (RobustScaler), encoded categoricals (One-Hot & Label).' },
      { t: 'Building Model', d: 'Built two 3-hidden-layer ANNs (sigmoid & ReLU) and analyzed the differences and issues of each.' },
      { t: 'Hyperparameter Tuning', d: 'Ran Random Search (Keras Tuner) over neurons per layer and learning rate.' },
      { t: 'Evaluation & Comparison', d: 'Evaluated all three models on the test set, then drew conclusions and recommendations.' },
    ],
  },
]

// Additional projects that appear on the CV/PDF but without full case studies.
export const moreProjects = [
  { title: 'Multi-Commodity Distribution Optimization via Stochastic & Distributionally Robust Optimization', date: 'Jun 2026', kind: 'Mathematical Modeling' },
  { title: 'Single-Stage vs Multi-Stage Classification for IndoBERT-Based Sports News Classification', date: 'Jun 2026', kind: 'NLP' },
  { title: 'MonoClip — a video editor app with directly integrated AI features', date: 'Jun 2026', kind: 'Software Engineering' },
  { title: 'Text Analysis & Classification of Game Reviews Using Different Text Representation Methods', date: 'Apr 2026', kind: 'NLP' },
  { title: 'Emotion Analysis: Multiclass Classification using Bidirectional GRU & DistilBERT', date: 'Jan 2026', kind: 'Deep Learning' },
  { title: 'Fruit Image Reconstruction using Variational Autoencoder (VAE)', date: 'Jan 2026', kind: 'Deep Learning' },
  { title: 'A Mathematical Model of Serious & Minor Criminal Activity using Non-Linear ODE Systems', date: 'Dec 2025', kind: 'Differential Equations' },
  { title: 'Multi-Task Cyberbullying Detection via XLM-RoBERTa, ResNet50 & CentralNet Fusion', date: 'Dec 2025', kind: 'Deep Learning' },
  { title: 'Standard CNN vs Transfer Learning for Human Nail Condition Classification', date: 'Nov 2025', kind: 'Deep Learning' },
]
