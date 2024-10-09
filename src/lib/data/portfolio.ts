import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
  {
    slug: 'apple-stock-analysis',
    color: '#ff8b00',
    shortDescription: 'A comprehensive data analysis project examining trends in Apple Inc.s stock prices using a Kaggle dataset. The project explores key factors such as historical stock prices, daily returns, trading volumes, and seasonal trends to understand the companys market performance over time.',
    description: 'Hello, my name is Ashkan Zahabiuon, and for Project 2, we are going through this data analysis project which focuses on investigating various trends in Apple Inc stock prices over time using a detailed Kaggle dataset.\n\n<h2>Introduction</h2>\nApple Inc. is a multinational technology company renowned for its innovative products and services, including the iPhone, iPad, Mac computers, and various software solutions. Since its inception, Apple has become a leading player in the tech industry, and its stock performance reflects its market influence and financial health. Analyzing Apple stock data over an extended period provides valuable insights into market trends, investor sentiment, and the company\'s growth trajectory. This project aims to explore historical stock data to identify patterns, understand fluctuations, and assess factors that have influenced Apple\'s stock prices.\n\n<h2>Data Description</h2>\nThe dataset used for this analysis is sourced from a comprehensive [Kaggle dataset](https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021), containing historical stock data of Apple Inc. from **December 12, 1980**, to **June 22, 2021**. The dataset comprises **10,244 observations** and **7 columns**, providing a substantial amount of data to explore. Each observation represents daily stock information, and the columns include variables such as:\n- **Date**: The trading date.\n- **Open**: Opening price of the stock on that day.\n- **High**: Highest price of the stock during the trading day.\n- **Low**: Lowest price of the stock during the trading day.\n- **Close**: Closing price of the stock on that day.\n- **Adj Close**: Adjusted closing price accounting for corporate actions like stock splits and dividends.\n- **Volume**: The number of shares traded on that day.\n\n<h2>Data Pre-processing</h2>\nTo ensure meaningful analysis, the dataset was cleaned and pre-processed through several steps:\n- **Handling Missing Data**: Identified missing values in price columns. Since the number of missing entries was minimal, those rows were dropped to maintain data integrity.\n- **Standardizing Formats**: Converted the `Date` column to a datetime object to facilitate chronological analyses and time-series visualizations.\n- **Feature Engineering**: Extracted additional features such as `Year`, `Month`, `Day`, and `DayOfWeek` from the `Date` column to enable detailed temporal analysis. Calculated `Daily Return` to assess stock volatility.\n- **Outlier Detection**: Reviewed data for any anomalies or outliers in stock prices and trading volumes to ensure accuracy.\n- **Adjusting for Corporate Actions**: Used the `Adj Close` prices to account for stock splits and dividends, providing a consistent basis for historical comparison.\n\nOnce the data was prepared, several visualizations were created to uncover trends and patterns within the dataset. One of the key observations from the initial analysis was the significant growth in Apple stock price over the years, particularly after the launch of breakthrough products like the iPod in 2001, the iPhone in 2007, and the iPad in 2010. This growth reflects Apple\'s increasing market share and profitability.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/adjusted_closing_price.png" alt="Historical Adjusted Closing Price Plot" width="1200">\n\nThe next step involved analyzing the daily returns to understand the stock volatility. The daily returns plot highlighted periods of high volatility, such as during the 2008 financial crisis and the 2020 COVID-19 pandemic. These periods showed significant fluctuations, indicating how global events impact investor behavior and stock performance.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/daily_returns_apple.png" alt="Daily Returns Plot" width="1200">\n\nFurthermore, the distribution of daily returns was examined to assess the risk associated with investing in Apple stock. The histogram showed that most daily returns hovered around zero, with a few instances of extreme positive or negative returns, suggesting a relatively stable investment with occasional volatility spikes.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png" alt="Distribution of Daily Returns" width="1200">\n\nSeasonal trends were also explored by analyzing the average monthly trading volumes and adjusted closing prices. It was observed that certain months, such as September and October, exhibited higher trading volumes, potentially correlating with Apple\'s annual product launch events and fiscal year-end financial reports.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_monthly_trading_value.png" alt="Average Monthly Trading Volume Plot" width="1200">\n\nFinally, a heatmap of average monthly adjusted close prices over the years was created to visualize long-term trends and identify any seasonal patterns. The heatmap provided a comprehensive view of how the stock performed across different months and years, highlighting periods of significant growth or decline.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_heatmap.png" alt="Heatmap of Average Monthly Adjusted Close Prices" width="1200">\n\nBy conducting this analysis and creating visualizations, valuable insights were gained into Apple\'s stock performance. The consistent growth in stock prices underscores the company\'s strong market position and investor confidence. Understanding these trends is crucial for investors, financial analysts, and stakeholders who rely on historical data to make informed decisions about future investments.\n\n<h2>Data Understanding and Visualization</h2>\nTo gain deeper insights into Apple Inc.\'s stock performance over time, various data exploration and visualization techniques were applied. These methods aimed to uncover patterns, trends, and anomalies that could inform the modeling process and address the initial questions regarding stock price movements and influencing factors.\n\n**Exploratory Data Analysis (EDA)**\n- **Descriptive Statistics**: Calculated mean, median, standard deviation, and range for stock prices and trading volumes to understand the data distribution.\n- **Price Trends Over Time**: Plotted the adjusted closing price over the entire period to visualize long-term trends.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/adjusted_closing_price.png" alt="Historical Adjusted Closing Price Plot" width="1200">\n\n- **Daily Returns**: Computed daily returns to assess stock volatility and plotted them to identify periods of high fluctuation.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/daily_returns_apple.png" alt="Daily Returns Plot" width="1200">\n\n- **Distribution of Daily Returns**: Created a histogram of daily returns to examine the risk profile and frequency of extreme returns.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png" alt="Distribution of Daily Returns" width="1200">\n\n**Seasonal Analysis**\n- **Monthly Average Trading Volume**: Analyzed average trading volumes by month to identify seasonal patterns in trading activity.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_monthly_trading_value.png" alt="Average Monthly Trading Volume Plot" width="1200">\n\n- **Heatmap of Monthly Adjusted Close Prices**: Created a heatmap to visualize how stock prices varied across different months and years.\n\n<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_heatmap.png" alt="Heatmap of Average Monthly Adjusted Close Prices" width="1200">\n\n**Insights Gained**\n- **Significant Growth Periods**: Notable increases in stock prices corresponded with major product launches and company milestones.\n- **Volatility During Crises**: Periods like the 2008 financial crisis and the 2020 pandemic showed increased volatility, indicating sensitivity to global events.\n- **Seasonal Trends**: Higher trading volumes in certain months suggested that investor activity might be influenced by anticipated company announcements or financial reports.\n\n**Relation to Modeling**\nUnderstanding these patterns is crucial for selecting appropriate models. The presence of trends, seasonality, and volatility indicates that time series forecasting models that can account for these factors are needed. This exploration informs the choice of models and the features to include in the modeling process.\n\n<h2>Modeling</h2>\nTo address the problem of forecasting Apple Inc.\'s stock prices and understanding the factors influencing them, several time series forecasting models were considered:\n\n1. **Autoregressive Integrated Moving Average (ARIMA)**\n   - **Description**: A popular statistical model used for analyzing and forecasting time series data.\n   - **How It Works**: ARIMA models capture autocorrelations in the data through autoregressive terms (AR), differencing to achieve stationarity (I), and moving average terms (MA).\n   - **Pros**:\n     - Effective for univariate time series data without seasonal components.\n     - Well-understood and interpretable.\n   - **Cons**:\n     - Assumes linear relationships.\n     - May not perform well with non-stationary data or data with seasonal patterns.\n\n2. **Seasonal ARIMA (SARIMA)**\n   - **Description**: An extension of ARIMA that includes seasonal components.\n   - **How It Works**: Adds seasonal AR and MA terms to account for repeating patterns at fixed intervals.\n   - **Pros**:\n     - Suitable for data with both trend and seasonal patterns.\n     - Provides better forecasting for seasonal data compared to ARIMA.\n   - **Cons**:\n     - Model selection can be complex due to additional parameters.\n     - Still assumes linearity.\n\n3. **Prophet**\n   - **Description**: A forecasting tool developed by Facebook that handles time series data with multiple seasonalities.\n   - **How It Works**: Uses an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects.\n   - **Pros**:\n     - Automatic detection of seasonal patterns.\n     - Handles missing data and outliers well.\n   - **Cons**:\n     - May overfit if not properly tuned.\n     - Less interpretable components compared to traditional statistical models.\n\n4. **Long Short-Term Memory (LSTM) Neural Networks**\n   - **Description**: A type of recurrent neural network capable of learning order dependence in sequence prediction problems.\n   - **How It Works**: Uses memory cells to retain information over long sequences, making it suitable for capturing complex temporal dynamics.\n   - **Pros**:\n     - Capable of modeling non-linear relationships.\n     - Can handle multivariate inputs.\n   - **Cons**:\n     - Requires a large amount of data.\n     - Computationally intensive and may require significant tuning.\n\n**Model Selection Rationale**\nARIMA/SARIMA models are appropriate for capturing linear dependencies and are a good starting point for time series analysis. Prophet is useful due to its flexibility in handling multiple seasonalities and its robustness to missing data and outliers. LSTM Neural Networks offer the ability to capture non-linear patterns and complex temporal dependencies, which are common in stock market data.\n\nBy using a combination of these models, we aim to compare their effectiveness in forecasting stock prices and understand which model handles the data characteristics best.\n\n<h2>Evaluation</h2>\n**Evaluation Metrics**\n- **Mean Absolute Error (MAE)**: Measures the average magnitude of errors without considering their direction.\n- **Root Mean Squared Error (RMSE)**: Penalizes larger errors more than MAE, useful when large deviations are particularly undesirable.\n- **Mean Absolute Percentage Error (MAPE)**: Provides error as a percentage, making it easier to interpret across different scales.\n\n**Model Performance**\nSince we cannot provide actual numerical results without executing the models on the dataset, the evaluation would involve:\n- **Training** each model on a portion of the data (e.g., data up to 2019) and testing on the remaining data.\n- **Comparing** the predicted values with the actual values using the evaluation metrics.\n- **Analyzing** residuals to check for patterns that suggest model inadequacy.\n\n**Expected Observations**\n- **ARIMA** may perform adequately for short-term forecasts but may struggle with non-linear patterns and seasonality.\n- **SARIMA** is expected to outperform ARIMA by capturing seasonal effects.\n- **Prophet** may provide good results due to its flexibility and ability to model multiple seasonalities.\n- **LSTM** may achieve superior performance by capturing complex patterns but requires careful tuning to prevent overfitting.\n\n**Evaluation Metrics Justification**\nThese metrics provide a comprehensive understanding of model accuracy. Using multiple metrics allows for better comparison and understanding of model performance in different aspects.\n\n<h2>Storytelling</h2>\nThrough the analysis, several insights into Apple Inc.\'s stock behavior were uncovered:\n- **Trend Identification**: The stock has shown a strong upward trend over the years, reflecting the company\'s growth and market position.\n- **Impact of Major Events**: Significant global events and company-specific news have noticeable effects on stock prices and volatility.\n- **Seasonal Effects**: There are discernible seasonal patterns in trading volumes and stock prices, likely linked to product launches and fiscal reporting periods.\n\n**Addressing Initial Questions**\n- **Can we accurately forecast future stock prices?** The models considered provide a framework for forecasting, with the expectation that more sophisticated models like LSTM could yield better accuracy.\n- **What factors influence stock price movements?** The analysis suggests that both internal factors (like product launches) and external factors (like economic crises) significantly impact stock prices.\n- **Are there identifiable patterns or trends?** Yes, trends and seasonal patterns are evident, which can be leveraged in modeling and forecasting.\n\n<h2>Impact</h2>\n**Potential Positive Impacts**\n- **Investor Decision-Making**: Improved forecasting models can aid investors in making informed decisions, potentially leading to better financial outcomes.\n- **Economic Insights**: Understanding stock behaviors contributes to broader economic analyses and policy-making.\n\n**Potential Negative Impacts**\n- **Market Manipulation Risks**: Advanced forecasting tools could be misused to gain unfair advantages, potentially destabilizing markets.\n- **Overreliance on Models**: Dependence on models without understanding their limitations can lead to significant financial losses, especially during unforeseen events.\n\n**Ethical Considerations**\n- **Data Privacy**: Ensuring that data used is publicly available and that privacy regulations are adhered to.\n- **Responsible Use**: Models should be used ethically, avoiding manipulative practices and acknowledging their limitations.',
    links: [      
      { to: 'https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021?resource=download', label: 'Kaggle Dataset' },
      { to: 'https://github.com/MrScruffles/ashz/blob/f0addc167f775bd4caac31031d07d9c47d1ab220/static/screenshots/Project2/Project_2_Ash_Zahabiuon.ipynb', label: 'Jupiter Notebook File (Download)' }
      // { to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/Project1.zip', label: 'Notebook Files (ZIP)' }
    ],
    logo: Assets.Jupyter,
    name: 'Apple Stock Analysis',
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
      from: new Date(),
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
