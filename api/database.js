import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
    const token = process.env.ENV_NOTION_TOKEN;
    const databaseId = process.env.ENV_DATABASE_ID;
    const checkboxPropertyName = process.env.ENV_CHECKBOX_PROPERTY_NAME;

    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Notion-Version': '2021-05-13',
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Notion API error: ${response.status} ${JSON.stringify(data)}`);
        }

        const processedData = processData(data.results, checkboxPropertyName);
        res.json(processedData);
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: error.message });
    }
};

const processData = (data, checkboxPropertyName) => {
    const checkboxMap = {
        checked: 0,
        unchecked: 0
    };

    data.forEach(item => {
        const checkboxValue = item.properties[checkboxPropertyName]?.checkbox;
        if (checkboxValue !== undefined) {
            if (checkboxValue) {
                checkboxMap.checked += 1;
            } else {
                checkboxMap.unchecked += 1;
            }
        }
    });

    return checkboxMap;
};
