import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
    {
    slug: 'catwatcher',
    color: '#d83030ff',
    description: 'Website & API that allows big game developers to easily integrate the catwatcher system in game. Which checks if a player has used or is using cheats. This also includes a full backend system with a dashboard for developers to manage their games and view stats, along with having a discord bot & a chrome extension for users to easily view profiles. There is also a active database that is always increasing, as the system is being used more and more by users which indexes these cheaters and finds their RBX accounts which get added to the database. The postgreSQL database is used to store all of the data for the website, API, dashboard, and discord bot, which also are used to add whitelisted users, developers, and api information (total requests, ratelimit, and request cap, etc).',
    shortDescription: 'Catwatcher system integration for game developers, that has an API, dashboard, discord bot, and chrome extension.',
    links: [{ to: 'https://catwatcher.org/', label: 'Catwatcher Website' }],
    logo: Assets.PostgreSQL,
    name: 'CatWatcher',
    period: { from: new Date('2025-08-10') },
    skills: getSkills('postgresql', 'html', 'js', 'roblox', 'game-development'),
    type: 'Full-Stack Development',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CatWatcher/CatWatcherDiscord_Preview.png', label: 'CatWatcher Discord Preview' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CatWatcher/CatWatcherWebsite_Preview.png', label: 'CatWatcher Website Preview' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CatWatcher/CatWatcherDashboard.png', label: 'CatWatcher Dashboard Preview' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CatWatcher/CatWatcherExtension_Video.mp4', label: 'Video' , thumbnail: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CatWatcher/CatWatcherExtension_Thumbnail.png' },
    ]
  },
  {
    slug: 'discord-bot-relay',
    color: '#00ADD8',
    description: 'A secure GoLang service that replaced traditional webhooks with a custom Discord bot. The original webhook system faced repeated unauthorized message injection and spam attempts, so the architecture was redesigned as a rate-limited relay bot with no direct permissions except sending messages. The service accepts channel IDs and authorization keys, validates them, and transmits JSON-encoded embeds safely to Discord. It includes built-in rate limit handling, @everyone mention protection, and Firebase integration for organizational data management.',
    shortDescription: 'Secure GoLang relay bot replacing webhooks with key-based channel messaging and rate-limit protection.',
    links: [
      { to: '#', label: '(Private) GitHub' }
    ],
    logo: Assets.Go,
    name: 'Discord Bot Relay Service',
    period: { from: new Date('2025-06-16') },
    skills: getSkills('go'),
    type: 'Backend & Infrastructure',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/GoLang/CPU_MEM_Consumption.png', label: 'CPU & Memory Usage' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/GoLang/NetworkImage.png', label: 'Network Flow Visualization' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/GoLang/SubMSResponses.png', label: 'Sub-ms Response Test' }
    ]
  },
  {
    slug: 'miroles',
    color: '#2563ebff',
    description: 'React-based internal web app built at Mountain Interactive. It integrates with Firebase to read and visualize production data when native realtime limits are exceeded, and connects to their Invision platform via REST APIs with OAuth2.0 for authentication. The app implements an approval flow and role-based access controls that unlock pages by permission level, audits user actions, and provides a suite of operational pages and tools for game team workflows.',
    shortDescription: 'React web app for Mountain Interactive with Firebase data views, OAuth2.0 login to Invision, RBAC, audit logging, and game ops tools.',
    links: [{ to: 'https://miroles.com/', label: 'MIRoles Website' }],
    logo: Assets.ReactJs,
    name: 'MIRoles',
    period: { from: new Date('2025-5-13') },
    skills: getSkills('reactjs', 'firebase', 'html', 'js', 'rest', 'oauth2'),
    type: 'Frontend & Backend Integrations',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesDashboard.png', label: 'MIRoles Dashboard' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesGameAdminOverview.png', label: 'MIRoles Game Admin Overview' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesGameAdminOverview2.png', label: 'MIRoles Game Admin Overview 2' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesMoneyLeaderboards.png', label: 'MIRoles Money Leaderboards' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesSystemLogs.png', label: 'MIRoles System Logs' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesUserDataEditor.png', label: 'MIRoles User Data Editor' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/MIRoles/MIRolesXPLeaderboard.png', label: 'MIRoles XP Leaderboard' }
    ]
  },
  {
    slug: 'course-enrollment-feedback',
    color: '#b91c1cff',
    description: 'Full-stack academic project developed for the CSC 517: Object-Oriented Design and Development course at North Carolina State University. The system enables administrators to manage courses, students, and feedback through a structured Ruby-based backend and HTML interface. It supports user authentication, enrollment workflows, and a dynamic feedback module allowing students to rate and review courses. Administrators can view all submissions in an organized dashboard, track course-level statistics, and monitor participation trends. The project demonstrates strong adherence to MVC principles, modular Ruby design, and database-backed form handling following Rails conventions.',
    shortDescription: 'Ruby and HTML-based academic course management system for CSC 517 at NCSU, supporting enrollments, feedback, and admin dashboards.',
    links: [{ to: 'https://github.ncsu.edu/vpatel29/oodd_program_2', label: 'GitHub Repository' }],
    logo: Assets.Ruby,
    name: 'Course Enrollment & Feedback System',
    period: { from: new Date('2025-10-03') },
    skills: getSkills('ruby', 'html', 'css', 'js', 'sqlite'),
    type: 'Academic',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/MainDashboard.png', label: 'Main Dashboard' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/OverviewPage.png', label: 'Overview Page' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/AdminDashboard.png', label: 'Admin Dashboard' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/Admin_CoursesPage.png', label: 'Courses Management Page' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/Admin_StudentsPage.png', label: 'Students Management Page' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/Admin_FeedbackPage.png', label: 'Feedback Management Page' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/Admin_LogsPage.png', label: 'Admin Logs' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC517/StudentsCourses_Page.png', label: 'Student Courses Page' }
    ]
  },
  {
    slug: 'customizable-belt-system',
    color: '#0ea5aaff',
    description: 'An advanced Roblox system integrating 3D DragDetectors to allow fully interactive belt customization directly within the game world. Players can drag, snap, and attach equipment dynamically to their character belts, simulating a modular tactical gear setup. The system combines precise spatial interaction with real-time physics validation, ensuring smooth placement and realistic behavior for tools and accessories. Designed for roleplay and simulation experiences, it provides both developers and players with a production-grade, intuitive interface that bridges UI and in-world customization. Inspired by in-engine demonstrations such as the official DragDetector showcase, this system expands the boundaries of player interaction in Roblox environments.',
    shortDescription: 'Roblox belt customization system using 3D DragDetectors for interactive, modular gear attachment.',
    links: [
      { to: 'https://youtu.be/ssGkDTBpfNk', label: 'YouTube Showcase' },
      { to: 'https://create.roblox.com/docs/ui/3D-drag-detectors', label: 'Roblox DragDetector Docs' }
    ],
    logo: Assets.LuaU,
    name: 'Customizable Belt System',
    period: { from: new Date('2025-12-03') },
    skills: getSkills('luau'),
    type: 'Gameplay Systems',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/BeltSystem/ShowcaseOne.png', label: 'DragDetector Gear Interaction' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/BeltSystem/ShowcaseTwo.png', label: 'Belt Customization Demo' }
    ]
  },
  {
    slug: 'invision-community-plugin',
    color: '#0ea5aaff',
    description: 'A production-grade Invision Community plugin developed entirely in PHP, designed to extend the native platform with a custom REST API for game developer integration. It exposes endpoints for purchase data, account details, and subscription information, allowing external systems to authenticate users and synchronize in-game purchases seamlessly. The plugin also implements RBX OAuth 2.0 to link accounts directly within user profiles, enabling a unified login and purchase experience between the forum and game environment. With secure token-based access, rate limits, and consistent JSON schema, it ensures reliable data flow between Invision and third-party systems.',
    shortDescription: 'PHP Invision plugin exposing a REST API for purchases, account info, subscriptions, and RBX OAuth 2.0 profile linking.',
    links: [
      { to: 'https://invisioncommunity.com/forums/', label: 'Invision Community Forums' },
      { to: 'https://invisioncommunity.com/developers/rest-api/index/', label: 'Invision REST API Docs' }
    ],
    logo: Assets.PHP,
    name: 'Invision Community Plugin',
    period: { from: new Date('2024-01-29') },
    skills: getSkills('php'),
    type: 'Backend Integrations',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/InvisionCommunityPlugin/InvisionAPIPage.png', label: 'Invision API Page' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/InvisionCommunityPlugin/APIOutput_1.png', label: 'API Output – Purchases & Account' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/InvisionCommunityPlugin/APIOutput_2.png', label: 'API Output – Subscriptions' }
    ]
  },
  {
    slug: 'regression-health-insurance',
    color: '#ff8b00',
    shortDescription: 'A comprehensive data analysis project predicting health insurance premium costs using a Kaggle dataset. The project explores key factors such as age, BMI, smoking status, and region to understand how health and lifestyle choices impact insurance premiums.',
    description: 'Hello, my name is Ashkan Zahabiuon, and for Project 3, this data analysis project focuses on predicting the premium price of health insurance using a detailed Kaggle dataset.\n\n<h2>Introduction</h2>\nHealth insurance premium costs are determined by several factors such as age, BMI, smoking status, and other health-related variables. The goal of this project is to create a regression model to predict insurance premium costs based on these factors. This prediction model can be beneficial for both patients and healthcare providers, providing insight into how lifestyle choices affect premium costs. However, there are potential ethical concerns, such as insurance companies using this data to raise premiums for those deemed higher risk.\n\n<h2>Data Description</h2>\nThe dataset used for this analysis is sourced from a Kaggle dataset that includes information about individual health profiles and the insurance charges they incur. The dataset comprises **1338 observations** and **7 columns**:\n\n- **age**: The age of the individual\n- **sex**: Gender of the individual\n- **bmi**: Body Mass Index, an indicator of whether an individual is underweight, normal weight, or overweight\n- **children**: Number of children the individual has\n- **smoker**: Whether the individual is a smoker or not\n- **region**: The region in the United States where the individual lives\n- **charges**: The insurance premium charged to the individual\n\n<h2>What is Regression?</h2>\nRegression is a statistical technique used to understand relationships between variables, predicting a continuous output based on inputs. In this project, I use regression to predict `charges` (insurance premiums) based on factors like age, BMI, and smoking status. For linear regression, the formula `y = B0 + B1*x1 + ... + Bn*xn + e` minimizes the error between predicted and actual values, fitting a line through the data. We also employed Random Forest Regression, which uses an ensemble of decision trees to capture non-linear relationships, making it more robust for complex data.\n\n<h2>Math Section</h2>\nIn this project, I implemented linear regression, random forest regression, and polynomial regression to predict health insurance premiums.\n\nFor **Linear Regression**, the relationship between the input features (such as age, BMI, and smoking status) and the target variable (insurance charges) is represented by the formula:\n\ny = B0 + B1*x1 + B2*x2 + ... + Bn*xn + e\n\nWhere:\n- `y` is the predicted insurance charge,\n- `B0` is the intercept,\n- `B1, B2, ..., Bn` are the coefficients for each feature,\n- `x1, x2, ..., xn` are the input features (age, BMI, etc.),\n- `e` represents the error term.\n\nFor **Polynomial Regression**, the formula expands to:\n\ny = B0 + B1*x1 + B2*x2 + B3*(x1^2) + B4*(x2^2) + ... + e\n\nWhere higher-order terms (e.g., `x1^2`) allow the model to capture non-linear relationships.\n\nFor **Random Forest Regression**, predictions are computed as:\n\ny = (1/N) * Σ<sub>t=1</sub><sup>N</sup> f<sub>t</sub>(x)\n\nWhere:\n- `N` is the number of trees,\n- `f_t(x)` is the prediction from the `t`-th tree,\n- `y` is the average of all predictions, providing robustness to non-linear patterns.\n\n<h2>Experiment Setup</h2>\nTo ensure accurate modeling and fair evaluation, the dataset was split into training and testing subsets using an 80/20 split. This ensures that 80% of the data is used to train the models, and 20% is reserved for testing and evaluation. The input features (independent variables) are:\n- `age`\n- `bmi`\n- `children`\n- `sex` (one-hot encoded)\n- `smoker` (one-hot encoded)\n- `region` (one-hot encoded)\n\nThe target variable (dependent variable) is:\n- `charges` (health insurance premiums)\n\nThe data was pre-processed to ensure quality and consistency:\n- **Numerical Scaling**: All numerical features (e.g., `age`, `bmi`) were standardized using `StandardScaler`.\n- **One-Hot Encoding**: Categorical variables (`sex`, `smoker`, `region`) were transformed into binary columns.\n\n<h2>Models Used</h2>\n1. **Linear Regression**:\n   - **Description**: A simple, interpretable model that establishes a linear relationship between input features and the target variable.\n   - **Training**: The model was trained on the standardized and one-hot encoded training set.\n   - **Target Features**: All input features (`age`, `bmi`, etc.) were included to predict `charges`.\n   - **Evaluation**:\n     - **MSE**: 33,596,915.85\n     - **R-squared**: 0.784\n\n2. **Random Forest Regressor**:\n   - **Description**: An ensemble-based model that captures non-linear relationships by averaging multiple decision trees.\n   - **Training**: The model was trained with 100 estimators (trees) and default depth. Hyperparameter tuning was conducted using GridSearchCV to optimize performance.\n   - **Target Features**: All input features were used to predict `charges`.\n   - **Evaluation**:\n     - **MSE**: 20,895,941.13\n     - **R-squared**: 0.865\n\n3. **Polynomial Regression (Experiment)**:\n   - **Description**: A model that extends linear regression by incorporating polynomial terms (e.g., `age^2`, `bmi^2`) to capture non-linear relationships.\n   - **Training**: The model was trained using PolynomialFeatures with degree 2.\n   - **Target Features**: Polynomial features were generated for all numerical columns, and categorical variables were one-hot encoded.\n   - **Evaluation**:\n     - **MSE**: 20,712,805.99\n     - **R-squared**: 0.867\n\n<h2>Model Evaluation</h2>\nThe performance of the models was evaluated using **Mean Squared Error (MSE)** and **R-squared (R²)** metrics. These metrics provide insight into the model’s accuracy and its ability to explain variance in the data.\n\n<h2>Data Understanding and Visualization</h2>\nTo gain a better understanding of the relationships in the data, several visualizations were created:\n\n1. **Correlation Heatmap**\n   This heatmap reveals the relationships between different variables, with strong positive correlations indicating higher insurance charges, particularly for `smoker_yes` and `age`.\n\n   <img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/HeatMap_Data.png" alt="Correlation Heatmap of Insurance Data" width="1200">\n\n2. **Feature Importance in Random Forest**\n   The following bar chart demonstrates feature importance as determined by the Random Forest model, where smoking status (`smoker_yes`) has the highest importance, followed by `age` and `bmi`.\n\n   <img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/Bargraph_Data.png" alt="Feature Importance in Random Forest" width="1200">\n\n3. **Pairplot**\n   A pairplot was created to visualize relationships between `age`, `bmi`, and `charges`, providing insights into how these factors contribute to insurance premiums. Smokers, in particular, tend to have higher premiums.\n\n   <img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/Pairplot_Data.png" alt="Pairplot of Age, BMI, and Charges" width="1200">\n\n<h2>Insights Gained</h2>\n- **Age and Smoking**: Older individuals and smokers consistently had higher insurance premiums.\n- **BMI**: BMI, while significant, did not contribute as strongly as smoking or age.\n\n<h2>Impact</h2>\n- **Positive Impact**: This project can help individuals understand which lifestyle choices (e.g., quitting smoking) may lead to reduced health insurance premiums.\n- **Negative Impact**: Insurance companies might use such models to disproportionately raise premiums for high-risk individuals, which could exacerbate health inequalities.\n\n<h2>Conclusion</h2>\nThis project demonstrated how data-driven models can predict health insurance premiums based on personal health characteristics. The Random Forest model’s superior performance highlights the importance of using complex models for non-linear relationships. Standardizing features and encoding categorical variables were essential steps in improving the model’s accuracy. These findings underscore the potential impact of predictive models in healthcare pricing, though ethical considerations must be addressed.\n\n<h2>References</h2>\n- **Kaggle Dataset**: [Premium Health Insurance Dataset](https://www.kaggle.com/datasets/willianoliveiragibin/healthcare-insurance)\n- **Scikit-learn Documentation**:\n  - [Linear Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)\n  - [Random Forest Regressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)\n  - [Polynomial Features](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html)\n\n<h2>Code</h2>\nYou can find the full Jupyter Notebook at the top of this webpage, which includes all code, data pre-processing, model training, and evaluation steps.',
    links: [      
      { to: 'https://www.kaggle.com/datasets/willianoliveiragibin/healthcare-insurance', label: 'Kaggle Dataset' },
      { to: 'https://github.com/MrScruffles/ashz/blob/09993b337fb35a59619ec295cd3dc9cfc057f278/static/screenshots/Project3/ITSC-3162%20--%20Project3.ipynb', label: 'Jupiter Notebook File (Download)' },
      { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/Project3.zip', label: 'Entire Project w/ Images (ZIP)' }
    ],
    logo: Assets.Jupyter,
    name: 'Regression of Health Insurance',
    period: { from: new Date('2024-10-02') },
    skills: getSkills('jupyter', 'Python', 'Pandas', 'Data Visualization'),
    type: 'Data Analysis', 
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/HeatMap_Data.png', label: 'Heatmap Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/Bargraph_Data.png', label: 'Bargraph Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project3/Pairplot_Data.png', label: 'Pairplot Data' },
    ]
  }, 
  {
    slug: 'classification-apple-stock-analysis',
    color: '#ff8b00',
    shortDescription: 'A comprehensive data analysis project examining trends in Apple Inc.s stock prices using a Kaggle dataset. The project explores key factors such as historical stock prices, daily returns, trading volumes, and seasonal trends to understand the companys market performance over time.',
    description: 'Hello, my name is Ashkan Zahabiuon, and for Project 2, this data analysis project focuses on the various trends in Apple Inc stock prices over time using a detailed Kaggle dataset.\n\n<h2>Introduction</h2>\nApple Inc. is a company known for its devices like the iPhone, iPad, Mac computers, and various software solutions. Since its inception, Apple which is also one of the leader players in the tech industry, and its stock performance reflects its market influence and financial health. Analyzing Apple stock data over an extended period provides valuable insights into market trends, investors, and the company\'s growth trajectory. This project aims to explore historical stock data to identify patterns, understand fluctuations, and look more into the factors that have influenced Apple\'s stock prices.\n\n<h2>Data Description</h2>\nThe dataset used for this analysis is sourced a Kaggle dataset [Kaggle dataset](https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021), containing stock data of Apple Inc. from **December 12, 1980**, to **June 22, 2021**. The dataset comprises **10,244 observations** and **7 columns**, providing a substantial amount of data to explore. Each observation represents daily stock information, and the columns include variables such as:\n- **Date**: The trading date.\n- **Open**: Opening price of the stock on that day.\n- **High**: Highest price of the stock during the trading day.\n- **Low**: Lowest price of the stock during the trading day.\n- **Close**: Closing price of the stock on that day.\n- **Adj Close**: Adjusted closing price accounting for corporate actions like stock splits and dividends.\n- **Volume**: The number of shares traded on that day.\n\n<h2>Data Pre-processing</h2>\nTo ensure meaningful analysis, the dataset was cleaned and pre-processed through several steps:\n- **Handling Missing Data**: Identified missing values in price columns. Since the number of missing entries was minimal, those rows were dropped to maintain data integrity.\n- **Standardizing Formats**: Converted the `Date` column to a datetime object to facilitate chronological analyses and time-series visualizations.\n- **Feature Engineering**: Extracted additional features such as `Year`, `Month`, `Day`, and `DayOfWeek` from the `Date` column to enable detailed temporal analysis. Calculated `Daily Return` to assess the stock.\n- **Outlier Detection**: Reviewed data for any anomalies or outliers in stock prices and trading volumes to ensure accuracy.\n- **Adjusting for Corporate Actions**: Used the `Adj Close` prices to account for stock splits and dividends, providing a consistent basis for historical comparison.\n\nOnce the data was prepared, several visualizations were created to uncover trends and patterns within the dataset. One of the key observations from the initial analysis was the significant growth in Apple stock price over the years, particularly after the launch of breakthrough products like iPhone launches, iPad launches, new product launches. This growth reflects Apple\'s increasing market share and profitability.\n\nThe next step involved analyzing the daily returns to understand the stock volatility. The daily returns plot highlighted periods of high volatility, such as during the 2008 financial crisis and the 2020 pandemic. These periods showed significant fluctuations, indicating how global events impact investor behavior and stock performance.\n\nFurthermore, the distribution of daily returns was examined to assess the risk associated with investing in Apple stock. The histogram showed that most daily returns hovered around zero, with a few instances of extreme positive or negative returns, suggesting a relatively stable investment with occasional spikes.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png" alt="Distribution of Daily Returns" width="1200">\n\nSeasonal trends were also explored by analyzing the average monthly trading volumes and the closing prices. Certain months, such as September and October, show higher trading volumes, potentially correlating with Apple\'s annual product launch events and year of the end financial reports.\n\nFinally as seen the heatmap of average monthly adjusted close prices over the years was created to visualize long-term trends and identify any seasonal patterns. The heatmap provided a comprehensive view of how the stock performed across different months and years, highlighting periods of significant growth or decline.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_heatmap.png" alt="Heatmap of Average Monthly Adjusted Close Prices" width="1200">\n\nBy conducting this analysis and creating visualizations, valuable insights were gained into Apple\'s stock performance. The consistent growth in stock prices underscores the company\'s strong market position and investor confidence. Understanding these trends is crucial for investors, financial analysts, and stakeholders who rely on historical data to make informed decisions about future investments.\n\n<h2>Data Understanding and Visualization</h2>\nTo gain deeper insights into Apple Inc.\'s stock performance over time, various data exploration and visualization techniques were applied. These methods used to uncover patterns, trends, and anomalies (edge cases) that could inform the modeling process and address the initial questions regarding stock price movements and influencing factors.\n\n**Exploratory Data Analysis (EDA)**\n- **Descriptive Statistics**: Calculated mean, median, standard deviation, and range for stock prices and trading volumes to understand the data distribution.\n- **Price Trends Over Time**: Plotted the adjusted closing price over the entire period to visualize long-term trends.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/adjusted_closing_price.png" alt="Historical Adjusted Closing Price Plot" width="1200">\n\n- **Daily Returns**: Computed daily returns to assess stock volatility and plotted them to identify periods of high fluctuation.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/daily_returns_apple.png" alt="Daily Returns Plot" width="1200">\n\n- **Distribution of Daily Returns**: Created a histogram of daily returns to examine the risk profile and frequency of extreme returns.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png" alt="Distribution of Daily Returns" width="1200">\n\n**Seasonal Analysis**\n- **Monthly Average Trading Volume**: Analyzed average trading volumes by month to identify seasonal patterns in trading activity.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_monthly_trading_value.png" alt="Average Monthly Trading Volume Plot" width="1200">\n\n- **Heatmap of Monthly Adjusted Close Prices**: Created a heatmap to visualize how stock prices varied across different months and years.\n\n<h2>Insights Gained</h2>\n- **Significant Growth Periods**: Notable increases in stock prices corresponded with major product launches and company milestones.\n- **Volatility During Crises**: Periods in the graph like the financial crisis and the 2020 pandemic indicate the sensitivity to global events and how the stock market changes everyday, differently.\n- **Seasonal Trends**: Higher trading volumes in certain months suggested that investor activity might be influenced by anticipated company announcements or financial reports.\n\nUnderstanding these patterns is crucial for selecting appropriate models. The presence of trends, seasonality, and volatility indicates that machine learning classification models that can account for these factors are needed. This exploration informs the choice of models and the features to include in the modeling process.\n\n<h2>Modeling (Inside the .ipynb file)</h2>\nTo predict the direction of Apple Inc.\'s stock price movement and whether any outcomes will cause it to increase, decrease, or show no change w/machine learning classification algorithms:\n\n1. **K-Nearest Neighbors (KNN)**\n\n2. **Random Forest Classifier**\n\nThese models were chosen based on their ability to handle classification problems effectively and how easy it is to interpret.\n\n**1. K-Nearest Neighbors (KNN)**\n\n- **Description**: KNN is a non-parametric, instance-based learning algorithm used for classification and regression tasks. It predicts the class of a data point based on the majority class among its \'k\' nearest neighbors in the feature space.\n\n- **How It Works**:\n  - **Training Phase**: The algorithm stores all training data points.\n  - **Prediction Phase**:\n    - Calculates the distance between the new data point and all training data points.\n    - Selects the \'k\' closest neighbors.\n    - Determines the majority class among these neighbors.\n    - Assigns the new data point to this majority class.\n\n- **Pros**:\n  - **Simplicity**: Easy to understand and implement.\n  - **No Training Time**: As a lazy learner, it doesn\'t require a training phase.\n  - **Adaptability**: Can adapt to complex data distributions with sufficient data.\n\n- **Cons**:\n  - **Computationally Intensive**: Prediction can be slow with large datasets due to distance calculations.\n  - **Curse of Dimensionality**: Performance can degrade with high-dimensional data.\n  - **Sensitive to Noise**: Outliers can affect the classification result.\n\n**2. Random Forest Classifier**\n\n- **Description**: Random Forest is an ensemble learning method that constructs multiple decision trees during training and outputs the class that is the mode of the classes (classification) of the individual trees.\n\n- **How It Works**:\n  - **Training Phase**:\n    - Generates multiple bootstrap samples from the training data.\n    - Constructs a decision tree for each sample, using a random subset of features at each split.\n  - **Prediction Phase**:\n    - Each tree in the forest predicts the class of the input data.\n    - The final prediction is made based on the majority vote from all trees.\n\n- **Pros**:\n  - **High Accuracy**: Generally provides good predictive performance.\n  - **Robustness to Overfitting**: Ensemble of trees reduces the risk of overfitting compared to a single decision tree.\n  - **Handles High-Dimensional Data**: Can handle datasets with a large number of features.\n\n- **Cons**:\n  - **Less Interpretability**: Difficult to interpret compared to single decision trees.\n  - **Computational Complexity**: Training can be resource-intensive with large datasets.\n  - **Bias towards Majority Class**: Can be biased if the dataset is imbalanced.\n\n**Model Selection Rationale**\n\n- **KNN** was selected for its simplicity and effectiveness in classification tasks, which provided a good baseline, and can grab certain aspects of the data to turn into graphs like we did.\n- **Random Forest** was chosen due to its robustness and ability to handle feature interactions and nonlinear relationships, which are common in financial data.\n\n<h2>Evaluation</h2>\n**Performance Metrics**\n\nTo evaluate the performance of the classification models, the following metrics were used:\n\n- **Accuracy**: The proportion of correct predictions over the total number of cases.\n- **Precision**: The ability of the classifier not to label a negative sample as positive.\n- **Recall (Sensitivity)**: The ability of the classifier to find all the positive samples.\n- **F1-Score**: The harmonic mean of precision and recall, providing a balance between the two.\n- **Confusion Matrix**: A table used to describe the performance of a classification model by displaying the true vs. predicted classifications.\n\n**Class Distribution**\n\nBefore evaluating the models, it\'s important to understand the class distribution in the dataset:\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/A_P_Class_Distribution.png" alt="Actual vs. Predicted Class Distribution" width="1200">\n\nThe dataset is relatively balanced between \'Increase\' and \'Decrease\' classes, with a smaller proportion of \'No Change\' instances.\n\n**1. K-Nearest Neighbors (KNN) Performance**\n\n- **Classification Report**:\n\n              precision    recall  f1-score   support\n\n    Decrease       0.46      0.51      0.48      1204\n   No Change       0.11      0.01      0.02       105\n    Increase       0.49      0.47      0.48      1272\n\n    Accuracy                           0.47      2581\n   macro avg       0.35      0.33      0.33      2581\nweighted avg       0.46      0.47      0.46      2581\n\n- **Observations**:\n  - The overall accuracy of the KNN model is **47%**.\n  - The model performs similarly on the \'Increase\' and \'Decrease\' classes.\n  - The \'No Change\' class has very low precision and recall, indicating difficulty in predicting this class.\n\n- **Confusion Matrix**:\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/Confusion_Matrix.png" alt="Confusion Matrix for KNN" width="600">\n\n- **Interpretation**:\n  - The KNN model struggles with the \'No Change\' class, likely due to its low representation in the dataset.\n  - Misclassification between \'Increase\' and \'Decrease\' indicates overlapping features and the challenge of distinguishing between these classes based on the selected features.\n\n**2. Random Forest Classifier Performance**\n\n- **Classification Report** (Assumed for illustration purposes):\n\n  - Suppose the Random Forest model achieved higher accuracy and better precision and recall for all classes compared to KNN.\n\n- **Feature Importance**:\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/Random_Forest.png" alt="Feature Importance from Random Forest" width="1200">\n\n- **Observations**:\n  - The Random Forest model provides insights into which features are most influential in predicting stock price movements.\n  - Features such as \'Daily Return\', \'Volume\', and \'Previous Day Close\' might have higher importance.\n\n**Evaluation Metrics Justification**\n\n- **Accuracy** provides a general sense of model performance but can be misleading with imbalanced classes.\n- **Precision and Recall** offer more detailed insights into model performance on individual classes.\n- **F1-Score** balances precision and recall, especially useful when the class distribution is uneven.\n- **Confusion Matrix** allows for a visual assessment of where the model is making correct and incorrect predictions.\n\n<h2>Storytelling</h2>\n**Insights Gained Through Modeling**\n- **Predictive Challenges**: The models faced difficulty accurately predicting stock price movements, highlighting the complexity and stochastic nature of the stock market.\n- **Class Imbalance Impact**: The \'No Change\' class was underrepresented, affecting the models\' ability to predict this outcome effectively.\n- **Feature Relevance**: Feature importance from the Random Forest model indicated that certain variables significantly influence stock movement predictions.\n\n**Answering Initial Questions**\n- **Can we accurately predict stock price movements?**\n  - The models achieved moderate accuracy, suggesting that while machine learning can provide some predictive power, there are limitations due to market volatility and external factors not captured in the dataset.\n- **What factors influence stock price movements?**\n  - Features such as historical prices, volume, and daily returns were influential, but the models also indicate that other external factors might play a significant role.\n- **Are there identifiable patterns or trends?**\n  - The classification models struggled to capture clear patterns, implying that stock price movements may be influenced by complex and perhaps non-quantifiable factors.\n\n**Narrative**\n\nNow predicting stock price movements remains a challenging task. The performance of the KNN and Random Forest models and the unpredictability of the stock markeet are the leading facctors which can effect things such as investor sentiment, global economic events, and company news can significantly impact stock prices but are difficult to incorporate into predictive models.\n\n<h2>Impact</h2>\n**Potential Positive Impacts**\n- **Enhanced Decision-Making**: The project provides insights that could help investors make more informed decisions by understanding the limitations of predictive models.\n- **Educational Value**: Demonstrates the application of machine learning in finance, offering learning opportunities for data scientists and financial analysts.\n\n**Potential Negative Impacts**\n- **Overreliance on Models**: Investors might place undue confidence in model predictions, leading to potential financial losses.\n- **Ethical Concerns**: The use of predictive models could contribute to unfair trading advantages if used by entities with more resources, exacerbating inequalities in the market.\n\n**Social and Ethical Considerations**\n- **Market Stability**: Widespread use of similar predictive models could lead to herd behavior, increasing market volatility.\n- **Transparency and Fairness**: Ensuring that predictive tools are accessible and that their limitations are understood is essential to maintain fairness in financial markets.\n\n**Critical Thinking**\n\nIt\'s crucial to approach stock market predictions with caution. While machine learning models can uncover patterns in historical data, they cannot account for unforeseen events or irrational market behaviors. Ethical use of these models involves transparency about their limitations and avoiding manipulative practices that could harm market integrity.\n\n<h2>References</h2>\n- **Kaggle Dataset**: [Apple Stock Data Updated Till 22Jun2021](https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021)\n- **Scikit-learn Documentation**:\n  - [K-Nearest Neighbors](https://scikit-learn.org/stable/modules/neighbors.html#classification)\n  - [Random Forest Classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)',
    links: [      
      { to: 'https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021?resource=download', label: 'Kaggle Dataset' },
      { to: 'https://github.com/MrScruffles/ashz/blob/7120057ffc83efd7f709e0c2b065f9a5e486028d/static/screenshots/Project2/ITSC-3162%20--%20Project2.ipynb', label: 'Jupiter Notebook File (Download)' },
      { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/Project2.zip', label: 'Entire Project w/ Images (ZIP)' }
    ],
    logo: Assets.Jupyter,
    name: 'Classification of Apple Stock Analysis',
    period: { from: new Date('2024-10-02') },
    skills: getSkills('jupyter', 'Python', 'Pandas', 'Data Visualization'),
    type: 'Data Analysis',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/adjusted_closing_price.png', label: 'Closing Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_monthly_trading_value.png', label: 'Monthly Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/daily_returns_apple.png', label: 'Returns Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png', label: 'Daily Returns Plot' }
    ]
  }, 
  {
    slug: 'school-shootings-analysis',
    color: '#6666FF',
    shortDescription: 'A comprehensive data analysis project examining trends in school shootings using a Kaggle dataset. The project explores key factors such as the frequency of incidents, types of schools affected, weapons used, and state-by-state comparisons.',
    description: 'Hello, my name is Ash Zahabiuon, and for Project 1, we are going through this data analysis project which focuses on investigating various trends in school shootings across the United States using a detailed Kaggle dataset.\n\n<h2>Introduction</h2>\nSchool shootings have become an increasingly critical issue in the United States, posing significant threats to the safety and well-being of students and educators alike. The frequency of these tragic events has risen over the years, making it imperative to understand the underlying factors contributing to this crisis. Analyzing detailed data on school shootings can provide valuable insights into patterns and trends, informing policies and preventive measures to enhance school safety.\n\n<h2>Data Description</h2>\nThe dataset includes extensive information such as the frequency of shootings, the types of schools affected (ranging from elementary schools to high schools and universities), the weapons involved, the location of each incident, and casualty details. The dataset comprises **489 observations** and **27 columns**, providing a substantial amount of data to explore. Each observation represents a unique school shooting incident, and the columns include variables such as:\n\n- **Date**: When the incident occurred\n- **Location**: City and state of the school\n- **School Type**: Elementary, middle, high school, or university\n- **Weapon Type**: Handgun, rifle, shotgun, etc.\n- **Casualties**: Number of injuries and fatalities\n- **Shooter Details**: Age, gender, and affiliation to the school\n\n<h2>Data Pre-processing</h2>\nIn terms of data preparation, I cleaned and pre-processed the dataset to ensure meaningful comparisons across variables. This involved several steps:\n\n- **Handling Missing Data**: Identified missing values in critical columns like weapon type and casualty numbers. Missing numerical values were imputed with the median or mean, while missing categorical values were filled using the mode or labeled as "Unknown" where appropriate.\n- **Standardizing Formats**: Dates were standardized to a uniform format (`YYYY-MM-DD`) to facilitate chronological analyses. Time-related columns were converted to datetime objects for accurate time-series analysis. Also these dates were then thrown into seasonal data so it was far easier to read/understand.\n- **Categorizing Schools**: Schools were categorized by grade levels to allow for comparative analysis across different educational institutions. This involved grouping schools into elementary, middle, high schools, and universities based on the provided data.\n- **Encoding Categorical Variables**: Converted categorical variables such as weapon types and locations into numerical codes using label encoding and one-hot encoding techniques, which are necessary for certain statistical analyses and visualizations.\n- **Outlier Detection**: Identified and reviewed outliers in casualty numbers to ensure they were accurate reports and not data entry errors.\n- **Data Integration**: Merged additional datasets where necessary to enrich the analysis, such as state-level information.\n\nOnce cleaned, I created several visualizations to further understand the trends within the dataset. One thing I realized when looking at the chart was the number of school shootings per year, which shows a steady increase, particularly from the early 2000s onward. This trend shows the urgency of addressing the issue, with a significant rise in incidents post-2010.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/all_seasons_shootings.png" alt="All Seasons Shootings Plot" width="1200">\n\nI also explored regional trends by analyzing how different states are affected by school shootings. States like Texas and California stood out with particularly high numbers of shootings, prompting me to investigate underlying reasons. Could it be related to the sheer number of schools, or are there other contributing factors such as local security policies? These questions raised critical concerns about whether schools are investing enough in active security measures, especially in larger campuses.\n\nIn investigating the relationship between weapon types and casualty rates, I found that rifles, compared to handguns, resulted in higher casualty rates. This insight is critical for understanding the impact of different firearm types in these incidents and may inform policies on weapon accessibility and control measures in school environments. The data showed that incidents involving rifles had an average of 5 casualties per event, whereas handguns averaged 2 casualties.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/shootings_by_weapon.png" alt="Shootings by Weapon Plot" width="1200">\n\nAdditionally, I analyzed seasonal trends by creating four distinct charts representing school shootings in Fall, Winter, Spring, and Summer. These charts provided new insights, especially as the data for 2024 became available. Fall emerged as a particularly high-risk period, with a sharp increase in shootings in September and October. Winter also showed a high frequency of incidents, particularly in December and January. Spring trends fluctuated, with March and April showing higher rates, while Summer, when schools are largely out of session, saw fewer incidents overall.\n\nUnderstanding these seasonal trends could be crucial in forming strategies for heightened security during peak months. For example, knowing that shootings increase in Fall and Winter could inform decisions to enhance security during these periods.\n\nBeyond seasonal analysis, I created state-by-state visualizations, highlighting areas most affected by school shootings. These maps revealed that some regions, such as Texas and California, consistently experience more frequent incidents. This points to the need for solutions that address all schools, especially those that are frequently targeted. Even during the COVID-19 year of 2020, shootings continued, which is a stark reminder of the crisis.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/shooting_by_state.png" alt="Shootings by State" width="1200">\n\nBy analyzing these patterns and producing visualizations, I was able to draw conclusions that offer valuable insights into school shootings across the U.S. This analysis contributes to the broader conversation around school safety reforms and the potential for implementing measures such as enhanced security.',    
    links: [      
      { to: 'https://www.kaggle.com/datasets/joebeachcapital/school-shootings?resource=download', label: 'Kaggle Dataset' },
      { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/Project1.zip', label: 'Notebook Files (ZIP)' }
    ],
    logo: Assets.Jupyter,
    name: 'School Shootings Data Analysis',
    period: { from: new Date('2024-09-06') },
    skills: getSkills('jupyter', 'Python', 'Pandas', 'Data Visualization'),
    type: 'Data Analysis',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/fall_shootings.png', label: 'Fall Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/spring_shootings.png', label: 'Spring Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/summer_shootings.png', label: 'Summer Plot' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/winter_shootings.png', label: 'Winter Plot' }
    ]
  },  
{
  slug: 'lab5-uart-adc',
  color: '#8b5cf6ff',
  description: 'MSP430 program using UART and ADC. Reads analog sensor data and transmits 8-bit values over UART. A button sends a fire command to a connected controller via serial.',
  shortDescription: 'UART + ADC communication with fire button trigger.',
  links: [
    { to: 'https://youtu.be/jHYgZ0sjfCg', label: 'YouTube Demo' },
    { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/labs/Zahabiuon_Ash_Lab5.txt', label: 'Source Code' }
  ],
  logo: Assets.C,
  name: 'Lab 5 – UART ADC Controller',
  period: { from: new Date('2024-08-05') },
  skills: getSkills('c'),
  type: 'Embedded Systems',
  screenshots: [
    { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Lab5/Lab5_UART.png', label: 'UART ADC Demo' }
  ]
},
{
  slug: 'lab4-tripwire-alarm',
  color: '#3b82f6ff',
  description: 'A tripwire alarm using an ultrasonic sensor, PWM buzzer, and LEDs. The button arms or disarms the system, and the alarm triggers if movement is detected within range.',
  shortDescription: 'Ultrasonic tripwire alarm with LEDs and PWM buzzer.',
  links: [
    { to: 'https://youtu.be/AsoatPVCDps', label: 'YouTube Demo' },
    { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/labs/Zahabiuon_Ash_Lab4.txt', label: 'Source Code' }
  ],
  logo: Assets.C,
  name: 'Lab 4 – Tripwire Alarm System',
  period: { from: new Date('2024-07-17') },
  skills: getSkills('c'),
  type: 'Embedded Systems',
  screenshots: [
    { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Lab4/Lab4_Alarm.png', label: 'Tripwire Alarm Demo' }
  ]
},
{
  slug: 'lab3-cyclone-game',
  color: '#ef4444ff',
  description: 'Implements a small Cyclone arcade game on the MSP430. LEDs move back and forth until the player presses the button to stop them at the target LED. Win or lose is shown by LED patterns.',
  shortDescription: 'Cyclone-style LED game using button timing on MSP430.',
  links: [
    { to: 'https://www.youtube.com/watch?v=4kC4S-FP-vg', label: 'YouTube Demo' },
    { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/labs/Zahabiuon_Ash_Lab3.txt', label: 'Source Code' }
  ],
  logo: Assets.C,
  name: 'Lab 3 – Cyclone Game',
  period: { from: new Date('2024-07-01') },
  skills: getSkills('c'),
  type: 'Embedded Systems',
  screenshots: [
    { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Lab3/Lab3_Cyclone.png', label: 'Cyclone Game Demo' }
  ]
},
{
  slug: 'lab2-led-cycle',
  color: '#22c55eff',
  description: 'An MSP430 project that cycles LEDs with a button press. Each press switches between red, green, and both LEDs on, using simple debounce logic.',
  shortDescription: 'Button-controlled LED cycle with debounce on MSP430.',
  links: [
    { to: 'https://youtu.be/9DWMKz36roA', label: 'YouTube Demo' },
    { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/labs/Zahabiuon_Ash_Lab2.txt', label: 'Source Code' }
  ],
  logo: Assets.C,
  name: 'Lab 2 – LED Button Cycle',
  period: { from: new Date('2024-05-26') },
  skills: getSkills('c'),
  type: 'Embedded Systems',
  screenshots: [
    { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Lab2/Lab2_Cycle.png', label: 'LED Cycle Demo' }
  ]
},
{
  slug: 'lab1-blinking-led',
  color: '#facc15ff',
  description: 'A simple MSP430 program that blinks an LED using GPIO control. Demonstrates basic output pin setup, direction configuration, and delay loop operation for LED toggling.',
  shortDescription: 'MSP430 blinking LED using GPIO toggle and delay loop.',
  links: [
    { to: 'https://youtu.be/3TEgFfDGL5Y', label: 'YouTube Demo' },
    { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/labs/Zahabiuon_Ash_Lab1.txt', label: 'Source Code' }
  ],
  logo: Assets.C,
  name: 'Lab 1 – Blinking LED',
  period: { from: new Date('2024-05-26') },
  skills: getSkills('c'),
  type: 'Embedded Systems',
  screenshots: [
    { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Lab1/Lab1_Blink.png', label: 'LED Blink Demo' }
  ]
},
  {
    slug: 'roblox-iphone',
    color: '#999999',
    description: 'A detailed project where an iPhone is fully scripted inside Roblox, showcasing my skills in game development, Lua scripting, and ui/uix creation.',
    shortDescription: 'iPhone project in Roblox with detailed scripting and modeling.',
    links: [{ to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneUIX.mp4', label: 'Video' }],
    logo: Assets.LuaU,
    name: 'Roblox iPhone Project',
    period: { from: new Date('2024-09-05') },
    skills: getSkills('luau', 'roblox', 'game-development'),
    type: 'Game Development',
    screenshots: [
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage1.png', label: 'iPhone Home-Screen' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneUIX.mp4', label: 'Wallet Preview', thumbnail: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage3.png' },
      { src: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneCameraWorkingPreview.mp4', label: 'Camera Function Preview' , thumbnail: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage2.png' },
    ]
  },
 
  {
    slug: 'scuffl-card-game',
    color: '#007acc',
    description:
      'A card game built using Unreal Engine 4, featuring gameplay mechanics implemented through blueprints. This project demonstrates your proficiency in game development and engine usage.',
    shortDescription:
      'Card game developed with Unreal Engine 4, focused on gameplay using blueprints.',
    links: [{ to: 'https://github.com/MrScruffles/ScufflCardGame', label: 'GitHub' }],
    logo: Assets.Cpp,
    name: 'Scuffl Card Game',
    period: {
      from: new Date('2021-11-13'),
    },
    skills: getSkills('unreal-engine', 'ue4', 'blueprints', 'cpp'),
    type: 'Game Development',
  },

  // Academic Projects
  {
    slug: 'itsc2214-data-structures',
    color: '#f0db4f',
    description:
      'A collection of labs and projects related to ITSC2214, focusing on data structures and algorithms in Java. This repository highlights your academic experience and understanding of foundational computer science concepts.',
    shortDescription:
      'Labs and projects on data structures and algorithms using Java.',
    links: [{ to: 'https://github.com/MrScruffles/ITSC2214_DataStructures_Algorithms', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'ITSC2214 Data Structures & Algorithms',
    period: {
      from: new Date('2023-09-07'),
    },
    skills: getSkills('java', 'algorithms', 'data-structures'),
    type: 'Academic',
  },
  {
    slug: 'itsc-3112',
    color: '#00758f',
    description:
      'A Java-based repository for ITSC-3112, highlighting your understanding of object-oriented programming concepts and software design principles.',
    shortDescription:
      'Java projects related to ITSC-3112, focusing on OOP and design principles.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'ITSC-3112',
    period: {
      from: new Date(),
    },
    skills: getSkills('java', 'oop', 'software-design'),
    type: 'Academic',
  },
  {
    slug: 'itsc-3155',
    color: '#306998',
    description:
      'Projects related to ITSC-3155, showcasing your proficiency in Python for various programming challenges, including parts one and two.',
    shortDescription:
      'Python projects for ITSC-3155, demonstrating problem-solving skills in Python.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Python,
    name: 'ITSC-3155',
    period: {
      from: new Date(),
    },
    skills: getSkills('python', 'problem-solving', 'software-development'),
    type: 'Academic',
  },
  {
    slug: 'ecgr-2104',
    color: '#ffcc00',
    description:
      'Repository for ECGR-2104, focusing on topics related to electrical and computer engineering. This project showcases your technical skills in hardware and software integration.',
    shortDescription:
      'Engineering projects for ECGR-2104, covering hardware and software integration.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Cpp,
    name: 'ECGR-2104',
    period: {
      from: new Date(),
    },
    skills: getSkills('engineering', 'hardware', 'software', 'cpp'),
    type: 'Academic',
  },
  {
    slug: 'itsc-3146',
    color: '#cc0000',
    description:
      'C++ projects related to ITSC-3146, emphasizing your ability to work with systems programming and low-level operations.',
    shortDescription:
      'C++ projects for ITSC-3146, focusing on systems programming.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Cpp,
    name: 'ITSC-3146',
    period: {
      from: new Date(),
    },
    skills: getSkills('c++', 'systems-programming', 'low-level-operations', 'cpp'),
    type: 'Academic',
  },
  {
    slug: 'itsc-2181',
    color: '#00b0f0',
    description:
      'C programming projects for ITSC-2181, highlighting your skills in procedural programming and understanding of fundamental software concepts.',
    shortDescription:
      'C projects for ITSC-2181, covering procedural programming.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.C,
    name: 'ITSC-2181',
    period: {
      from: new Date(),
    },
    skills: getSkills('c', 'procedural-programming', 'software-fundamentals'),
    type: 'Academic',
  },
  {
    slug: 'itsc1213-cs2',
    color: '#ff4500',
    description:
      'Java projects related to ITSC1213, showcasing your knowledge in computer science and software development practices.',
    shortDescription:
      'Java projects for ITSC1213, demonstrating your skills in computer science.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'ITSC1213 CS2',
    period: {
      from: new Date('2023-08-08'),
    },
    skills: getSkills('java', 'computer-science', 'software-development'),
    type: 'Academic',
  },

  // Full-Stack & Front-End Development Projects
  {
    slug: 'minimalcord',
    color: '#7289da',
    description:
      'Updating the MinimalCord theme for Discord, focused on front-end development with SCSS. This project demonstrates your expertise in theming and styling for web applications.',
    shortDescription: 'Discord theme update project using SCSS.',
    links: [{ to: 'https://github.com/MrScruffles/MinimalCord', label: 'GitHub' }],
    logo: Assets.CSS,
    name: 'MinimalCord',
    period: {
      from: new Date(),
    },
    skills: getSkills('scss', 'css', 'frontend'),
    type: 'Front-End Development',
  },
  {
    slug: 'simple-admin',
    color: '#00bfa5',
    description:
      'Part of the SimpleAdminTeam, this project includes a bot, dashboard client, server, and more. This work showcases your skills in full-stack development and team collaboration.',
    shortDescription: 'Bot, dashboard, and server development for SimpleAdmin.',
    links: [{ to: 'https://simpleadm.in', label: 'Website' }],
    logo: Assets.JavaScript,
    name: 'SimpleAdmin',
    period: {
      from: new Date('2022-04-14'),
    },
    skills: getSkills('js', 'lua', 'fullstack'),
    type: 'Full-Stack Development',
  },
  {
    slug: 'mountware',
    color: '#f7df1e',
    description:
      'A project under the MountWareTeam, focused on JavaScript development. This project is part of your contributions to Mountain Interactive LLC, showcasing your backend development skills.',
    shortDescription: 'JavaScript project for the MountWareTeam.',
    links: [{ to: 'https://mountaininteractive.com', label: 'Website' }],
    logo: Assets.JavaScript,
    name: 'MountWare',
    period: {
      from: new Date('2023-02-26'),
    },
    skills: getSkills('js', 'backend'),
    type: 'Backend Development',
  },
  {
    slug: 'saultech',
    color: '#007acc',
    description:
      'C# projects related to SaulTech, focusing on your skills in .NET development and software engineering.',
    shortDescription:
      'C# projects for SaulTech, demonstrating expertise in .NET and software engineering.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.Csharp,
    name: 'SaulTech',
    period: {
      from: new Date('2023-07-09'),
    },
    skills: getSkills('c#', '.net', 'software-engineering', 'csharp'),
    type: 'Full-Stack Development',
  },

  // Web Development Projects
  {
    slug: 'fltesting',
    color: '#f7df1e',
    description:
      'JavaScript testing project forked from ProxyService, highlighting your skills in testing frameworks and client-side development.',
    shortDescription: 'JavaScript testing project forked from ProxyService.',
    links: [{ to: '#', label: 'GitHub' }],
    logo: Assets.JavaScript,
    name: 'FLTesting',
    period: {
      from: new Date('2022-09-28'),
    },
    skills: getSkills('js', 'testing', 'client-side-development'),
    type: 'Web Development',
  },
];

export const title = 'Portfolio';
