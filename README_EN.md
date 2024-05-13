# Notion-Progress-Heatmap

[Chinese Readme](README.md)

[English Readme](README_EN.md)

## One-click Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZippland%2FNotion-Progress-Heatmap&env=ENV_DATABASE_ID&env=ENV_NOTION_TOKEN&env=ENV_CHECKBOX_PROPERTY_NAME&project-name=notion-progress-heatmap&repository-name=notion-progress-heatmap)

## Project Overview

Notion-Progress-Heatmap is designed for tracking the completion status of individual tasks. It is a cloud-based application deployed on the Vercel platform using the Notion API. The main function of this project is to retrieve data from the Notion database and display daily progress records in the form of a heatmap on a web page.

For tracking the completion rate of multiple tasks, use: [Notion-Progress-Heatmap](https://github.com/Zippland/Notion-Progress-Heatmap)

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/63b0375e-7526-4863-8a87-cf56dcf75047)

**Automatic switch to night mode**:
![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/fef9ffdc-9509-4980-8f03-05f1210a35d2)

## Technology Stack

- **HTML/CSS**: For front-end display.
- **JavaScript**: For front-end logic handling.
- **Node.js**: For back-end API services.
- **Vercel**: For cloud deployment and hosting services.
- **Notion API**: As the data source.

## Project Structure

```
/
├── api
│   └── database.js       # Serverless function, handles interaction with Notion API
├── public
│   └── index.html        # Main page
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Feature Description

- **Data Display**: Retrieves data through the Notion API and displays it on the web page as a heatmap.
- **Automatic Refresh**: The page periodically updates data from the Notion database to ensure real-time data accuracy.

## How to Use

### Step 1: Preparation

1. **Register a Notion account**: If you don't already have a Notion account, register one on [Notion's official website](https://www.notion.so/).
2. **Create a Notion database**: Create a task table containing a `Date` property for recording each day's date, along with your custom task names (Checkbox property).
3. **Obtain the Notion API key**: To allow the application access to your Notion database, create an integration and obtain the "Internal Integration Token" from the "Integration" section in Notion settings.
4. **Get the database ID**: In the URL of your Notion database page, copy the part after "https://www.notion.so/" and before the "?" (excluding "?"), this URL segment is your database ID.

### Step 2: Deploy to Vercel

1. **Register a Vercel account**: Visit the [Vercel official website](https://vercel.com/) and register an account.
2. **Create a Vercel project**: In the Vercel dashboard, choose "New Project" and create a project by importing your repository from GitHub.
3. **Configure Environment Variables**: In the Vercel project settings under "Environment Variables", add the following variables:
   - `ENV_NOTION_TOKEN`: Your Notion internal integration token.
   - `ENV_DATABASE_ID`: Your Notion database ID.
   - `ENV_CHECKBOX_PROPERTY_NAME`: Your custom task name.
4. **Deploy the project**: After configuring the environment variables, go back to the project dashboard and click the "Deploy" button. Vercel will automatically deploy your application.

### Step 3: Access and Use

Once deployed, Vercel will provide a URL for you to access your Notion progress heatmap. Open this URL to see the data retrieved from the Notion database displayed as a heatmap on the web page.

In Notion, insert a web view by using the `\embed` command.

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/9298c5aa-bd5e-49d2-979f-546f3bf469f0)


## Frequently Asked Questions

**Q1: How can I ensure the security of my Notion data?**

A1: Ensure your Notion API key and

 database ID are used only when necessary and are well-protected. Do not share them with untrusted parties.

**Q2: How can I update the data display?**

A2: The webpage automatically refreshes the data every 30 seconds. You can also manually update the display by refreshing the webpage.

**Q3: What if the data does not update?**

A3: Ensure there is new data input in your Notion database, and check the Vercel project logs to determine if there are any backend errors.
