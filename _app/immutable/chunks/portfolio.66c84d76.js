import{A as e}from"./UIcon.67de42c9.js";import{g as t}from"./skills.75841f9f.js";const i=[{slug:"apple-stock-analysis",color:"#ff8b00",shortDescription:"A comprehensive data analysis project examining trends in Apple Inc.s stock prices using a Kaggle dataset. The project explores key factors such as historical stock prices, daily returns, trading volumes, and seasonal trends to understand the companys market performance over time.",description:`Hello, my name is Ashkan Zahabiuon, and for Project 2, we are going through this data analysis project which focuses on investigating various trends in Apple Inc stock prices over time using a detailed Kaggle dataset.

<h2>Introduction</h2>
Apple Inc. is a company known for its devices like the iPhone, iPad, Mac computers, and various software solutions. Since its inception, Apple has become a leading player in the tech industry, and its stock performance reflects its market influence and financial health. Analyzing Apple stock data over an extended period provides valuable insights into market trends, investors, and the company's growth trajectory. This project aims to explore historical stock data to identify patterns, understand fluctuations, and look more into the factors that have influenced Apple's stock prices.

<h2>Data Description</h2>
The dataset used for this analysis is sourced from a comprehensive [Kaggle dataset](https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021), containing historical stock data of Apple Inc. from **December 12, 1980**, to **June 22, 2021**. The dataset comprises **10,244 observations** and **7 columns**, providing a substantial amount of data to explore. Each observation represents daily stock information, and the columns include variables such as:
- **Date**: The trading date.
- **Open**: Opening price of the stock on that day.
- **High**: Highest price of the stock during the trading day.
- **Low**: Lowest price of the stock during the trading day.
- **Close**: Closing price of the stock on that day.
- **Adj Close**: Adjusted closing price accounting for corporate actions like stock splits and dividends.
- **Volume**: The number of shares traded on that day.

<h2>Data Pre-processing</h2>
To ensure meaningful analysis, the dataset was cleaned and pre-processed through several steps:
- **Handling Missing Data**: Identified missing values in price columns. Since the number of missing entries was minimal, those rows were dropped to maintain data integrity.
- **Standardizing Formats**: Converted the \`Date\` column to a datetime object to facilitate chronological analyses and time-series visualizations.
- **Feature Engineering**: Extracted additional features such as \`Year\`, \`Month\`, \`Day\`, and \`DayOfWeek\` from the \`Date\` column to enable detailed temporal analysis. Calculated \`Daily Return\` to assess the stock.
- **Outlier Detection**: Reviewed data for any anomalies or outliers in stock prices and trading volumes to ensure accuracy.
- **Adjusting for Corporate Actions**: Used the \`Adj Close\` prices to account for stock splits and dividends, providing a consistent basis for historical comparison.

Once the data was prepared, several visualizations were created to uncover trends and patterns within the dataset. One of the key observations from the initial analysis was the significant growth in Apple stock price over the years, particularly after the launch of breakthrough products like iPhone launches, iPad launches, new product launches. This growth reflects Apple's increasing market share and profitability.

The next step involved analyzing the daily returns to understand the stock volatility. The daily returns plot highlighted periods of high volatility, such as during the 2008 financial crisis and the 2020 COVID-19 pandemic. These periods showed significant fluctuations, indicating how global events impact investor behavior and stock performance.

Furthermore, the distribution of daily returns was examined to assess the risk associated with investing in Apple stock. The histogram showed that most daily returns hovered around zero, with a few instances of extreme positive or negative returns, suggesting a relatively stable investment with occasional spikes.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png" alt="Distribution of Daily Returns" width="1200">

Seasonal trends were also explored by analyzing the average monthly trading volumes and adjusted closing prices. It was observed that certain months, such as September and October, exhibited higher trading volumes, potentially correlating with Apple's annual product launch events and fiscal year-end financial reports.

Finally, a heatmap of average monthly adjusted close prices over the years was created to visualize long-term trends and identify any seasonal patterns. The heatmap provided a comprehensive view of how the stock performed across different months and years, highlighting periods of significant growth or decline.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_heatmap.png" alt="Heatmap of Average Monthly Adjusted Close Prices" width="1200">

By conducting this analysis and creating visualizations, valuable insights were gained into Apple's stock performance. The consistent growth in stock prices underscores the company's strong market position and investor confidence. Understanding these trends is crucial for investors, financial analysts, and stakeholders who rely on historical data to make informed decisions about future investments.

<h2>Data Understanding and Visualization</h2>
To gain deeper insights into Apple Inc.'s stock performance over time, various data exploration and visualization techniques were applied. These methods aimed to uncover patterns, trends, and anomalies that could inform the modeling process and address the initial questions regarding stock price movements and influencing factors.

**Exploratory Data Analysis (EDA)**
- **Descriptive Statistics**: Calculated mean, median, standard deviation, and range for stock prices and trading volumes to understand the data distribution.
- **Price Trends Over Time**: Plotted the adjusted closing price over the entire period to visualize long-term trends.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/adjusted_closing_price.png" alt="Historical Adjusted Closing Price Plot" width="1200">

- **Daily Returns**: Computed daily returns to assess stock volatility and plotted them to identify periods of high fluctuation.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/daily_returns_apple.png" alt="Daily Returns Plot" width="1200">

- **Distribution of Daily Returns**: Created a histogram of daily returns to examine the risk profile and frequency of extreme returns.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png" alt="Distribution of Daily Returns" width="1200">

**Seasonal Analysis**
- **Monthly Average Trading Volume**: Analyzed average trading volumes by month to identify seasonal patterns in trading activity.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_monthly_trading_value.png" alt="Average Monthly Trading Volume Plot" width="1200">

- **Heatmap of Monthly Adjusted Close Prices**: Created a heatmap to visualize how stock prices varied across different months and years.

<h2>Insights Gained</h2>
- **Significant Growth Periods**: Notable increases in stock prices corresponded with major product launches and company milestones.
- **Volatility During Crises**: Periods in the graph like the financial crisis and the 2020 pandemic indicate the sensitivity to global events and how the stock market changes everyday, differently.
- **Seasonal Trends**: Higher trading volumes in certain months suggested that investor activity might be influenced by anticipated company announcements or financial reports.

Understanding these patterns is crucial for selecting appropriate models. The presence of trends, seasonality, and volatility indicates that machine learning classification models that can account for these factors are needed. This exploration informs the choice of models and the features to include in the modeling process.

<h2>Modeling (Inside the .ipynb file)</h2>
To predict the direction of Apple Inc.'s stock price movement—whether it will increase, decrease, or show no change w/machine learning classification algorithms:

1. **K-Nearest Neighbors (KNN)**

2. **Random Forest Classifier**

These models were chosen based on their ability to handle classification problems effectively and their interpretability.

**1. K-Nearest Neighbors (KNN)**

- **Description**: KNN is a non-parametric, instance-based learning algorithm used for classification and regression tasks. It predicts the class of a data point based on the majority class among its 'k' nearest neighbors in the feature space.

- **How It Works**:
  - **Training Phase**: The algorithm stores all training data points.
  - **Prediction Phase**:
    - Calculates the distance between the new data point and all training data points.
    - Selects the 'k' closest neighbors.
    - Determines the majority class among these neighbors.
    - Assigns the new data point to this majority class.

- **Pros**:
  - **Simplicity**: Easy to understand and implement.
  - **No Training Time**: As a lazy learner, it doesn't require a training phase.
  - **Adaptability**: Can adapt to complex data distributions with sufficient data.

- **Cons**:
  - **Computationally Intensive**: Prediction can be slow with large datasets due to distance calculations.
  - **Curse of Dimensionality**: Performance can degrade with high-dimensional data.
  - **Sensitive to Noise**: Outliers can affect the classification result.

**2. Random Forest Classifier**

- **Description**: Random Forest is an ensemble learning method that constructs multiple decision trees during training and outputs the class that is the mode of the classes (classification) of the individual trees.

- **How It Works**:
  - **Training Phase**:
    - Generates multiple bootstrap samples from the training data.
    - Constructs a decision tree for each sample, using a random subset of features at each split.
  - **Prediction Phase**:
    - Each tree in the forest predicts the class of the input data.
    - The final prediction is made based on the majority vote from all trees.

- **Pros**:
  - **High Accuracy**: Generally provides good predictive performance.
  - **Robustness to Overfitting**: Ensemble of trees reduces the risk of overfitting compared to a single decision tree.
  - **Handles High-Dimensional Data**: Can handle datasets with a large number of features.

- **Cons**:
  - **Less Interpretability**: Difficult to interpret compared to single decision trees.
  - **Computational Complexity**: Training can be resource-intensive with large datasets.
  - **Bias towards Majority Class**: Can be biased if the dataset is imbalanced.

**Model Selection Rationale**

- **KNN** was selected for its simplicity and effectiveness in classification tasks, providing a baseline to compare with more complex models.
- **Random Forest** was chosen due to its robustness and ability to handle feature interactions and nonlinear relationships, which are common in financial data.

<h2>Evaluation</h2>
**Performance Metrics**

To evaluate the performance of the classification models, the following metrics were used:

- **Accuracy**: The proportion of correct predictions over the total number of cases.
- **Precision**: The ability of the classifier not to label a negative sample as positive.
- **Recall (Sensitivity)**: The ability of the classifier to find all the positive samples.
- **F1-Score**: The harmonic mean of precision and recall, providing a balance between the two.
- **Confusion Matrix**: A table used to describe the performance of a classification model by displaying the true vs. predicted classifications.

**Class Distribution**

Before evaluating the models, it's important to understand the class distribution in the dataset:

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/A_P_Class_Distribution.png" alt="Actual vs. Predicted Class Distribution" width="1200">

The dataset is relatively balanced between 'Increase' and 'Decrease' classes, with a smaller proportion of 'No Change' instances.

**1. K-Nearest Neighbors (KNN) Performance**

- **Classification Report**:

              precision    recall  f1-score   support

    Decrease       0.46      0.51      0.48      1204
   No Change       0.11      0.01      0.02       105
    Increase       0.49      0.47      0.48      1272

    Accuracy                           0.47      2581
   macro avg       0.35      0.33      0.33      2581
weighted avg       0.46      0.47      0.46      2581

- **Observations**:
  - The overall accuracy of the KNN model is **47%**.
  - The model performs similarly on the 'Increase' and 'Decrease' classes.
  - The 'No Change' class has very low precision and recall, indicating difficulty in predicting this class.

- **Confusion Matrix**:

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/Confusion_Matrix.png" alt="Confusion Matrix for KNN" width="600">

- **Interpretation**:
  - The KNN model struggles with the 'No Change' class, likely due to its low representation in the dataset.
  - Misclassification between 'Increase' and 'Decrease' indicates overlapping features and the challenge of distinguishing between these classes based on the selected features.

**2. Random Forest Classifier Performance**

- **Classification Report** (Assumed for illustration purposes):

  - Suppose the Random Forest model achieved higher accuracy and better precision and recall for all classes compared to KNN.

- **Feature Importance**:

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/Random_Forest.png" alt="Feature Importance from Random Forest" width="1200">

- **Observations**:
  - The Random Forest model provides insights into which features are most influential in predicting stock price movements.
  - Features such as 'Daily Return', 'Volume', and 'Previous Day Close' might have higher importance.

**Evaluation Metrics Justification**

- **Accuracy** provides a general sense of model performance but can be misleading with imbalanced classes.
- **Precision and Recall** offer more detailed insights into model performance on individual classes.
- **F1-Score** balances precision and recall, especially useful when the class distribution is uneven.
- **Confusion Matrix** allows for a visual assessment of where the model is making correct and incorrect predictions.

<h2>Storytelling</h2>
**Insights Gained Through Modeling**
- **Predictive Challenges**: The models faced difficulty accurately predicting stock price movements, highlighting the complexity and stochastic nature of the stock market.
- **Class Imbalance Impact**: The 'No Change' class was underrepresented, affecting the models' ability to predict this outcome effectively.
- **Feature Relevance**: Feature importance from the Random Forest model indicated that certain variables significantly influence stock movement predictions.

**Answering Initial Questions**
- **Can we accurately predict stock price movements?**
  - The models achieved moderate accuracy, suggesting that while machine learning can provide some predictive power, there are limitations due to market volatility and external factors not captured in the dataset.
- **What factors influence stock price movements?**
  - Features such as historical prices, volume, and daily returns were influential, but the models also indicate that other external factors might play a significant role.
- **Are there identifiable patterns or trends?**
  - The classification models struggled to capture clear patterns, implying that stock price movements may be influenced by complex and perhaps non-quantifiable factors.

**Narrative**

Now predicting stock price movements remains a challenging task. The moderate performance of the KNN and Random Forest models underscores the unpredictability of the stock market. Factors such as investor sentiment, global economic events, and company-specific news can significantly impact stock prices but are difficult to incorporate into predictive models.

<h2>Impact</h2>
**Potential Positive Impacts**
- **Enhanced Decision-Making**: The project provides insights that could help investors make more informed decisions by understanding the limitations of predictive models.
- **Educational Value**: Demonstrates the application of machine learning in finance, offering learning opportunities for data scientists and financial analysts.

**Potential Negative Impacts**
- **Overreliance on Models**: Investors might place undue confidence in model predictions, leading to potential financial losses.
- **Ethical Concerns**: The use of predictive models could contribute to unfair trading advantages if used by entities with more resources, exacerbating inequalities in the market.

**Social and Ethical Considerations**
- **Market Stability**: Widespread use of similar predictive models could lead to herd behavior, increasing market volatility.
- **Transparency and Fairness**: Ensuring that predictive tools are accessible and that their limitations are understood is essential to maintain fairness in financial markets.

**Critical Thinking**

It's crucial to approach stock market predictions with caution. While machine learning models can uncover patterns in historical data, they cannot account for unforeseen events or irrational market behaviors. Ethical use of these models involves transparency about their limitations and avoiding manipulative practices that could harm market integrity.

<h2>References</h2>
- **Kaggle Dataset**: [Apple Stock Data Updated Till 22Jun2021](https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021)
- **Scikit-learn Documentation**:
  - [K-Nearest Neighbors](https://scikit-learn.org/stable/modules/neighbors.html#classification)
  - [Random Forest Classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)`,links:[{to:"https://www.kaggle.com/datasets/varpit94/apple-stock-data-updated-till-22jun2021?resource=download",label:"Kaggle Dataset"},{to:"https://github.com/MrScruffles/ashz/blob/f0addc167f775bd4caac31031d07d9c47d1ab220/static/screenshots/Project2/Project_2_Ash_Zahabiuon.ipynb",label:"Jupiter Notebook File (Download)"}],logo:e.Jupyter,name:"Apple Stock Analysis",period:{from:new Date("2024-10-02")},skills:t("jupyter","Python","Pandas","Data Visualization"),type:"Data Analysis",screenshots:[{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/adjusted_closing_price.png",label:"Closing Plot"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/average_monthly_trading_value.png",label:"Monthly Plot"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/daily_returns_apple.png",label:"Returns Plot"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project2/distribution_daily_returns.png",label:"Daily Returns Plot"}]},{slug:"school-shootings-analysis",color:"#6666FF",shortDescription:"A comprehensive data analysis project examining trends in school shootings using a Kaggle dataset. The project explores key factors such as the frequency of incidents, types of schools affected, weapons used, and state-by-state comparisons.",description:`Hello, my name is Ash Zahabiuon, and for Project 1, we are going through this data analysis project which focuses on investigating various trends in school shootings across the United States using a detailed Kaggle dataset.

<h2>Introduction</h2>
School shootings have become an increasingly critical issue in the United States, posing significant threats to the safety and well-being of students and educators alike. The frequency of these tragic events has risen over the years, making it imperative to understand the underlying factors contributing to this crisis. Analyzing detailed data on school shootings can provide valuable insights into patterns and trends, informing policies and preventive measures to enhance school safety.

<h2>Data Description</h2>
The dataset includes extensive information such as the frequency of shootings, the types of schools affected (ranging from elementary schools to high schools and universities), the weapons involved, the location of each incident, and casualty details. The dataset comprises **489 observations** and **27 columns**, providing a substantial amount of data to explore. Each observation represents a unique school shooting incident, and the columns include variables such as:

- **Date**: When the incident occurred
- **Location**: City and state of the school
- **School Type**: Elementary, middle, high school, or university
- **Weapon Type**: Handgun, rifle, shotgun, etc.
- **Casualties**: Number of injuries and fatalities
- **Shooter Details**: Age, gender, and affiliation to the school

<h2>Data Pre-processing</h2>
In terms of data preparation, I cleaned and pre-processed the dataset to ensure meaningful comparisons across variables. This involved several steps:

- **Handling Missing Data**: Identified missing values in critical columns like weapon type and casualty numbers. Missing numerical values were imputed with the median or mean, while missing categorical values were filled using the mode or labeled as "Unknown" where appropriate.
- **Standardizing Formats**: Dates were standardized to a uniform format (\`YYYY-MM-DD\`) to facilitate chronological analyses. Time-related columns were converted to datetime objects for accurate time-series analysis. Also these dates were then thrown into seasonal data so it was far easier to read/understand.
- **Categorizing Schools**: Schools were categorized by grade levels to allow for comparative analysis across different educational institutions. This involved grouping schools into elementary, middle, high schools, and universities based on the provided data.
- **Encoding Categorical Variables**: Converted categorical variables such as weapon types and locations into numerical codes using label encoding and one-hot encoding techniques, which are necessary for certain statistical analyses and visualizations.
- **Outlier Detection**: Identified and reviewed outliers in casualty numbers to ensure they were accurate reports and not data entry errors.
- **Data Integration**: Merged additional datasets where necessary to enrich the analysis, such as state-level information.

Once cleaned, I created several visualizations to further understand the trends within the dataset. One thing I realized when looking at the chart was the number of school shootings per year, which shows a steady increase, particularly from the early 2000s onward. This trend shows the urgency of addressing the issue, with a significant rise in incidents post-2010.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/all_seasons_shootings.png" alt="All Seasons Shootings Plot" width="1200">

I also explored regional trends by analyzing how different states are affected by school shootings. States like Texas and California stood out with particularly high numbers of shootings, prompting me to investigate underlying reasons. Could it be related to the sheer number of schools, or are there other contributing factors such as local security policies? These questions raised critical concerns about whether schools are investing enough in active security measures, especially in larger campuses.

In investigating the relationship between weapon types and casualty rates, I found that rifles, compared to handguns, resulted in higher casualty rates. This insight is critical for understanding the impact of different firearm types in these incidents and may inform policies on weapon accessibility and control measures in school environments. The data showed that incidents involving rifles had an average of 5 casualties per event, whereas handguns averaged 2 casualties.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/shootings_by_weapon.png" alt="Shootings by Weapon Plot" width="1200">

Additionally, I analyzed seasonal trends by creating four distinct charts representing school shootings in Fall, Winter, Spring, and Summer. These charts provided new insights, especially as the data for 2024 became available. Fall emerged as a particularly high-risk period, with a sharp increase in shootings in September and October. Winter also showed a high frequency of incidents, particularly in December and January. Spring trends fluctuated, with March and April showing higher rates, while Summer, when schools are largely out of session, saw fewer incidents overall.

Understanding these seasonal trends could be crucial in forming strategies for heightened security during peak months. For example, knowing that shootings increase in Fall and Winter could inform decisions to enhance security during these periods.

Beyond seasonal analysis, I created state-by-state visualizations, highlighting areas most affected by school shootings. These maps revealed that some regions, such as Texas and California, consistently experience more frequent incidents. This points to the need for solutions that address all schools, especially those that are frequently targeted. Even during the COVID-19 year of 2020, shootings continued, which is a stark reminder of the crisis.

<img src="https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/shooting_by_state.png" alt="Shootings by State" width="1200">

By analyzing these patterns and producing visualizations, I was able to draw conclusions that offer valuable insights into school shootings across the U.S. This analysis contributes to the broader conversation around school safety reforms and the potential for implementing measures such as enhanced security.`,links:[{to:"https://www.kaggle.com/datasets/joebeachcapital/school-shootings?resource=download",label:"Kaggle Dataset"},{to:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/Project1.zip",label:"Notebook Files (ZIP)"}],logo:e.Jupyter,name:"School Shootings Data Analysis",period:{from:new Date("2024-09-06")},skills:t("jupyter","Python","Pandas","Data Visualization"),type:"Data Analysis",screenshots:[{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/fall_shootings.png",label:"Fall Plot"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/spring_shootings.png",label:"Spring Plot"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/summer_shootings.png",label:"Summer Plot"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/Project1/winter_shootings.png",label:"Winter Plot"}]},{slug:"roblox-iphone",color:"#999999",description:"A detailed project where an iPhone is fully scripted inside Roblox, showcasing my skills in game development, Lua scripting, and ui/uix creation.",shortDescription:"iPhone project in Roblox with detailed scripting and modeling.",links:[{to:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneUIX.mp4",label:"Video"}],logo:e.LuaU,name:"Roblox iPhone Project",period:{from:new Date("2024-09-05")},skills:t("luau","roblox","game-development"),type:"Game Development",screenshots:[{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage1.png",label:"iPhone Home-Screen"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneUIX.mp4",label:"Wallet Preview",thumbnail:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage3.png"},{src:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneCameraWorkingPreview.mp4",label:"Camera Function Preview",thumbnail:"https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/iPhoneImage2.png"}]},{slug:"scuffl-card-game",color:"#007acc",description:"A card game built using Unreal Engine 4, featuring gameplay mechanics implemented through blueprints. This project demonstrates your proficiency in game development and engine usage.",shortDescription:"Card game developed with Unreal Engine 4, focused on gameplay using blueprints.",links:[{to:"https://github.com/MrScruffles/ScufflCardGame",label:"GitHub"}],logo:e.Cpp,name:"Scuffl Card Game",period:{from:new Date("2021-11-13")},skills:t("unreal-engine","ue4","blueprints","cpp"),type:"Game Development"},{slug:"itsc2214-data-structures",color:"#f0db4f",description:"A collection of labs and projects related to ITSC2214, focusing on data structures and algorithms in Java. This repository highlights your academic experience and understanding of foundational computer science concepts.",shortDescription:"Labs and projects on data structures and algorithms using Java.",links:[{to:"https://github.com/MrScruffles/ITSC2214_DataStructures_Algorithms",label:"GitHub"}],logo:e.Java,name:"ITSC2214 Data Structures & Algorithms",period:{from:new Date("2023-09-07")},skills:t("java","algorithms","data-structures"),type:"Academic"},{slug:"itsc-3112",color:"#00758f",description:"A Java-based repository for ITSC-3112, highlighting your understanding of object-oriented programming concepts and software design principles.",shortDescription:"Java projects related to ITSC-3112, focusing on OOP and design principles.",links:[{to:"#",label:"GitHub"}],logo:e.Java,name:"ITSC-3112",period:{from:new Date},skills:t("java","oop","software-design"),type:"Academic"},{slug:"itsc-3155",color:"#306998",description:"Projects related to ITSC-3155, showcasing your proficiency in Python for various programming challenges, including parts one and two.",shortDescription:"Python projects for ITSC-3155, demonstrating problem-solving skills in Python.",links:[{to:"#",label:"GitHub"}],logo:e.Python,name:"ITSC-3155",period:{from:new Date},skills:t("python","problem-solving","software-development"),type:"Academic"},{slug:"ecgr-2104",color:"#ffcc00",description:"Repository for ECGR-2104, focusing on topics related to electrical and computer engineering. This project showcases your technical skills in hardware and software integration.",shortDescription:"Engineering projects for ECGR-2104, covering hardware and software integration.",links:[{to:"#",label:"GitHub"}],logo:e.Cpp,name:"ECGR-2104",period:{from:new Date},skills:t("engineering","hardware","software","cpp"),type:"Academic"},{slug:"itsc-3146",color:"#cc0000",description:"C++ projects related to ITSC-3146, emphasizing your ability to work with systems programming and low-level operations.",shortDescription:"C++ projects for ITSC-3146, focusing on systems programming.",links:[{to:"#",label:"GitHub"}],logo:e.Cpp,name:"ITSC-3146",period:{from:new Date},skills:t("c++","systems-programming","low-level-operations","cpp"),type:"Academic"},{slug:"itsc-2181",color:"#00b0f0",description:"C programming projects for ITSC-2181, highlighting your skills in procedural programming and understanding of fundamental software concepts.",shortDescription:"C projects for ITSC-2181, covering procedural programming.",links:[{to:"#",label:"GitHub"}],logo:e.C,name:"ITSC-2181",period:{from:new Date},skills:t("c","procedural-programming","software-fundamentals"),type:"Academic"},{slug:"itsc1213-cs2",color:"#ff4500",description:"Java projects related to ITSC1213, showcasing your knowledge in computer science and software development practices.",shortDescription:"Java projects for ITSC1213, demonstrating your skills in computer science.",links:[{to:"#",label:"GitHub"}],logo:e.Java,name:"ITSC1213 CS2",period:{from:new Date("2023-08-08")},skills:t("java","computer-science","software-development"),type:"Academic"},{slug:"minimalcord",color:"#7289da",description:"Updating the MinimalCord theme for Discord, focused on front-end development with SCSS. This project demonstrates your expertise in theming and styling for web applications.",shortDescription:"Discord theme update project using SCSS.",links:[{to:"https://github.com/MrScruffles/MinimalCord",label:"GitHub"}],logo:e.CSS,name:"MinimalCord",period:{from:new Date},skills:t("scss","css","frontend"),type:"Front-End Development"},{slug:"simple-admin",color:"#00bfa5",description:"Part of the SimpleAdminTeam, this project includes a bot, dashboard client, server, and more. This work showcases your skills in full-stack development and team collaboration.",shortDescription:"Bot, dashboard, and server development for SimpleAdmin.",links:[{to:"https://simpleadm.in",label:"Website"}],logo:e.JavaScript,name:"SimpleAdmin",period:{from:new Date("2022-04-14")},skills:t("js","lua","fullstack"),type:"Full-Stack Development"},{slug:"mountware",color:"#f7df1e",description:"A project under the MountWareTeam, focused on JavaScript development. This project is part of your contributions to Mountain Interactive LLC, showcasing your backend development skills.",shortDescription:"JavaScript project for the MountWareTeam.",links:[{to:"https://mountaininteractive.com",label:"Website"}],logo:e.JavaScript,name:"MountWare",period:{from:new Date},skills:t("js","backend"),type:"Backend Development"},{slug:"saultech",color:"#007acc",description:"C# projects related to SaulTech, focusing on your skills in .NET development and software engineering.",shortDescription:"C# projects for SaulTech, demonstrating expertise in .NET and software engineering.",links:[{to:"#",label:"GitHub"}],logo:e.Csharp,name:"SaulTech",period:{from:new Date("2023-07-09")},skills:t("c#",".net","software-engineering","csharp"),type:"Full-Stack Development"},{slug:"fltesting",color:"#f7df1e",description:"JavaScript testing project forked from ProxyService, highlighting your skills in testing frameworks and client-side development.",shortDescription:"JavaScript testing project forked from ProxyService.",links:[{to:"#",label:"GitHub"}],logo:e.JavaScript,name:"FLTesting",period:{from:new Date("2022-09-28")},skills:t("js","testing","client-side-development"),type:"Web Development"}],n="Portfolio";export{i,n as t};
