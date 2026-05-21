const news = [
    { 
        id: "1",
        date: "2026-05-12",
        img: "news-1", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum auctor nunc, quis convallis nibh sollicitudin et. Aenean efficitur arcu a justo varius, eu mattis diam dignissim. Cras libero quam, facilisis sed libero id, cursus lobortis purus. Curabitur et facilisis justo, et interdum nunc. Nullam at nisl in velit faucibus sagittis. Ut a neque justo. Curabitur sapien metus, suscipit placerat nulla eget, ultricies mollis urna. Fusce dignissim tempor eros, eget lobortis ante vulputate in. Sed porttitor eros lorem, quis molestie orci volutpat a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    { 
        id: "2",
        date: "2026-04-26", 
        img: "news-2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum auctor nunc, quis convallis nibh sollicitudin et. Aenean efficitur arcu a justo varius, eu mattis diam dignissim. Cras libero quam, facilisis sed libero id, cursus lobortis purus. Curabitur et facilisis justo, et interdum nunc. Nullam at nisl in velit faucibus sagittis. Ut a neque justo. Curabitur sapien metus, suscipit placerat nulla eget, ultricies mollis urna. Fusce dignissim tempor eros, eget lobortis ante vulputate in. Sed porttitor eros lorem, quis molestie orci volutpat a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    { 
        id: "3",
        date: "2026-03-07",
        img: "news-3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum auctor nunc, quis convallis nibh sollicitudin et. Aenean efficitur arcu a justo varius, eu mattis diam dignissim. Cras libero quam, facilisis sed libero id, cursus lobortis purus. Curabitur et facilisis justo, et interdum nunc. Nullam at nisl in velit faucibus sagittis. Ut a neque justo. Curabitur sapien metus, suscipit placerat nulla eget, ultricies mollis urna. Fusce dignissim tempor eros, eget lobortis ante vulputate in. Sed porttitor eros lorem, quis molestie orci volutpat a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
];

const table = document.getElementById("news-table");

news.forEach((item, index) => {
    const row = document.createElement("tr");
    row.setAttribute("id", `news-${item.id}`);

    row.innerHTML = `
        <td class="news-date">
            <h4>${item.date}</h4>
        </td>
        <td class="news-content">
            <img src="../assets/img/${item.img}.webp" alt="News Image">
            <p>${item.content}</p>
        </td>
    `;

    table.appendChild(row);
});