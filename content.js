const colors = [
    [
        "rgb(207, 217, 222)",
        "rgb(15, 20, 25)",
        "rgba(0, 0, 0, 0)",
        "rgb(255, 255, 255)"
    ],
    [
        "rgb(83, 100, 113)",
        "rgb(255, 255, 255)",
        "rgba(0, 0, 0, 0)",
        "rgb(15, 20, 25)"
    ],
    [
        "rgb(83, 100, 113)",
        "rgb(255, 255, 255)",
        "rgba(0, 0, 0, 0)",
        "rgb(15, 20, 25)"
    ]
]

function main() {
    let nightMode = document.cookie.match(/night_mode=(\d)/);
    let nightModeNum = parseInt(nightMode[1]);
    let style = document.getElementById("invertColor-style") ?? document.createElement("style");
    style.innerHTML = `:root {
        --border-color: ${colors[nightModeNum][0]};
        --fill-color: ${colors[nightModeNum][1]};
        --transparent-color: ${colors[nightModeNum][2]};
        --text-color: ${colors[nightModeNum][3]};
    }
    
    /* アイコン系 */
    a[data-testid="AppTabBar_Notifications_Link"] > div > div > div:nth-child(2),
    a[data-testid="AppTabBar_Home_Link"] > div > div > div:nth-child(2),
    label[data-testid="SearchBox_Search_Input_label"] > div > div[role="button"] {
        background-color: var(--fill-color) !important;
        color: var(--text-color) !important;
    }
    div[data-testid="toolBar"] > div div > svg,
    aside[role="complementary"] > div:nth-child(2) > div > div > div > svg,
    li[role="listitem"][data-testid="UserCell"] > div > div:nth-child(2) > div > svg,
    div[role="button"][data-testid="UserCell"] > div > div:nth-child(2) > div > div[role="button"] > div > svg,
    div[role="option"] > div > div:nth-child(2) > div:nth-child(2) > div > svg,
    div[role="presentation"] > svg:nth-child(2) {
        color: var(--fill-color) !important;
    }
    div[data-testid="primaryColumn"] > div > div:nth-child(2) > div > div[role="progressbar"],
    div[role="listbox"][id^="typeaheadDropdown-"] > div[role="progressbar"] > div {
        background-color: var(--fill-color) !important;
    }
    div[aria-describedby="conversation-controls-details"][aria-labelledby="conversation-controls-title"] > div:nth-child(2) > div[role="menuitem"] > div:nth-child(1) {
        background-color: var(--border-color) !important;
    }
    div[aria-describedby="conversation-controls-details"][aria-labelledby="conversation-controls-title"] > div:nth-child(2) > div[role="menuitem"] > div:nth-child(3) > svg {
        color: var(--fill-color) !important;
    }
    div[role="progressbar"] > div > svg circle {
        stroke: var(--fill-color) !important;
    }

    
    /* ボタン系 */
    div[role="button"][data-testid="tweetButton"],
    a[data-testid="SideNav_NewTweet_Button"],
    div[data-testid="tweetButtonInline"],
    div[role="button"][data-testid="LoginForm_Login_Button"],
    section[aria-labelledby="detail-header"] > div:nth-child(2) > div > div[role="button"]:not([data-testid]),
    div[aria-labelledby="modal-header"][role="dialog"] > div > div:nth-child(2) > div > div > div >  div[role="button"] {
        border-color: var(--border-color) !important;
        background-color: var(--fill-color) !important;
    }
    div[data-testid="emptyState"] > a[href="/messages/compose"],
    div[role="status"] > div[role="button"],
    div[role="presentation"] > a[role="tab"] > div > div {
        background-color: var(--fill-color) !important;
    }
    div[role="button"][data-testid="tweetButton"] > div,
    a[data-testid="SideNav_NewTweet_Button"] > div,
    a[data-testid="SideNav_NewTweet_Button"] > div > svg,
    div[data-testid="tweetButtonInline"] > div,
    div[data-testid="emptyState"] > a[href="/messages/compose"] > div,
    div[role="status"] > div[role="button"] > div > dir,
    div[role="button"][data-testid="LoginForm_Login_Button"] > div,
    section[aria-labelledby="detail-header"] > div:nth-child(2) > div > div[role="button"] > div,
    div[aria-labelledby="modal-header"][role="dialog"] > div > div:nth-child(2) > div > div > div >  div[role="button"] > div {
        color: var(--text-color) !important;
    }
    div[role="tablist"] > div > a[role="tab"] + div,
    div[role="tab"][data-testid="conversation"] + div {
        border-right-color: var(--fill-color) !important;
    }`;
    if (style.parentNode === null) {
        document.head.appendChild(style);
    }
}

window.addEventListener("load", () => {
    setInterval(() => {
        document.querySelectorAll(`input[name^=background_picker_]`).forEach(element =>  {
            if (element.getAttribute("colorChangeCheck-SimpleColors") != "true") {
                element.addEventListener("click", () => {
                    setTimeout(main, 0);
                });
                element.setAttribute("colorChangeCheck-SimpleColors", "true");
            }
        });
    }, 500);
    main()
});