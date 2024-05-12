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
    const results = [];

    data.forEach(item => {
        // 假设日期存在于 properties 的 Date 属性中，需要根据你的实际数据结构调整
        const date = item.properties["Date"]?.date?.start;
        const checkboxValue = item.properties[checkboxPropertyName]?.checkbox;
        // 只处理 checkboxValue 为 true 的情况
        if (date && checkboxValue) {
            results.push({
                date: date,
                checked: 1 // 因为我们只关心勾选的情况，直接设置为1
            });
        }
    });

    return results;
};

