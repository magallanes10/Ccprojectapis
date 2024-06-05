document.addEventListener("DOMContentLoaded", function () {
    const apiList = [
        {
            name: "AI",
            description: "AI Also know as CHATGPT",
            method: "GET",
            url: "api/ai?query="
        },
        {
            name: "Gemini AI",
            description: "Gemini AI Powered By Google",
            method: "GET",
            url: "api/gen?ask=hi"
        },
        {
            name: "AM LINK GET INFO",
            description: "Get Info From AlightMotion Projects",
            method: "GET",
            url: "api/am?alightlink="
        },
        {
            name: "Capcut Downloader",
            description: "Download Video From Capcut Template",
            method: "GET",
            url: "api/capcut?url="
        },
        { 
            name: "Chatgpt 3.5",
            description: "Chatgpt 3.5 Conversation",
            method: "GET",
            url: "api/chatgpt?input"
        },
        {
            name: "Random Edit Video",
            description: "Random Edit Video From Tiktok",
            method: "GET",
            url: "api/edit"
        },
        {
            name: "SoundCloud",
            description: "Listening Music from SoundCloud API",
            method: "GET",
            url: "api/soundcloud?search="
        },
        {
            name: "Emoji Reaction Message",
            description: "React Message based on the Context of Chats",
            method: "GET",
            url: "api/text?content="
        },
        {
            name: "Facebook Downloader Video and Instagram",
            description: "Download Video From Facebook and Instagram",
            method: "GET",
            url: "api/fbdl?url="
        },
        {
            name: "Geometry Dash Random Video",
            description: "Random Video of Geometry Dash...",
            method: "GET",
            url: "api/gd"
        },
        {
            name: "ChatGPT Conversation Continues",
            description: "Chatgpt conversation continues features",
            method: "GET",
            url: "api/gptconvo?ask=hi&id=1"
        },
        {
            name: "Gschoolar",
            description: "Finding your research using gschoolar",
            method: "GET",
            url: "api/gs?q="
        },
        {
            name: "Instagram Stalk",
            description: "Get info user of Instagram",
            method: "GET",
            url: "api/insta/stalk?ig="
        },
        {
            name: "Ip locator",
            description: "This api to locate the user uisng ip but don't support private ip",
            method: "GET",
            url: "api/ip?ipnum="

        },
        {
            name: "LLAMA META AI",
            description: "Ask Questions With Meta AI",
            method: "GET",
            url: "api/meta?inputText=hi"
        },
        {
            name: "Pinterest API",
            description: "Get image from Pinterest API",
            method: "GET",
            url: "api/pin?title=wallpaper&count=10"
        },
        {
            name: "Remini API",
            description: "Enhance Images",
            method: "GET",
            url: "api/remini?imageUrl="
        },
        {
            name: "Remove Background API",
            description: "Remove Background An Image Using API",
            method: "GET",
            url: "api/rbg?imageUrl="
        },
        {
            name: "TikStalk",
            description: "Tiktok Stalk Inf User",
            method: "GET",
            url: "api/tikstalk?unique_id="
        },
        {
            name: "Tiktok Search API",
            description: "Search Tiktok Video",
            method: "GET",
            url: "api/tiktok/searchvideo?keywords="
        },
        {
            name: "Tinyurl",
            description: "Shorter Url Using Tinyurl",
            method: "GET",
            url: "api/tinyurl?url="
        },
        {
            name: "Fb Cover API",
            description: "Create your fb cover design",
            method: "GET",
            url: "https://fbcover-e9d446e57c55.herokuapp.com/fbcover?name=YourName&color=green&address=Ohio&email=harold@example.com&subname=Ccproject&uid=100036956043695&sdt=097272729383"
        }
    ];

    const apiListElement = document.getElementById("apiList");

    apiList.forEach(api => {
        const listItem = document.createElement("li");
        listItem.className = "api-item";
        listItem.innerHTML = `
            <h3>${api.name}</h3>
            <p>${api.description}</p>
            <p class="api-method">Method: ${api.method}</p>
            <button onclick="redirectToApi('${api.url}')">Select</button>
        `;
        apiListElement.appendChild(listItem);
    });
});

function redirectToApi(url) {
    window.location.href = url;
}
