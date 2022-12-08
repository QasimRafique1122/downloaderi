

    function collapse(id) {
    let collapse = document.getElementById(id);
    if (collapse.classList.contains("show")) collapse.classList.remove("show");
    else collapse.classList.add("show");
}


    function runGet() {
    $('#fieldRequired').text("");
    var videoUrl = document.getElementById("url").value;
    if (videoUrl == "") {
    $('#fieldRequired').text('Please Enter Tiktok url!');
    return;
}
    const progress = document.querySelector(".progress-box");
    clearProgressBar()
    progress.classList.add("active");
    runProgressBar()
    setTimeout(redirectToDownload(), 150);
}
    function redirectToDownload() {
    var videoUrl = document.getElementById("url").value;
    $.ajax({
    url: "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index'",
    type: "GET",
    data: {
    'url': videoUrl
},
    headers: {
    'X-RapidAPI-Key': '3d204a970emshd8658b3f3e32d6dp138ebcjsn7a898b2a7b31',
    'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
},
    success: function (data) {
    if (data.status === 'failed') {
    (document.querySelector(".progress-box")).classList.remove("active");
    $('#fieldRequired').text('Error: Url is not supported!');
} else {
    var thumbnail = data.cover
    var withOutMark = data.video;
    var sound = data.music;
    var author = data.author;
    document.getElementById('video_image').src = thumbnail;
    document.getElementById('author').innerHTML = author;
    document.getElementById('video_title').innerHTML = data.description;
    document.getElementsByClassName('btn-download-video')[0].href=`download-tik.php?token=${window.btoa(withOutMark)}&media=video/mp4`
    document.getElementsByClassName('btn-download-sound')[0].href=`download-tik.php?token=${window.btoa(sound)}&media=audio/mp3`
    goDownloadPage()
    // window.open('download.php?v=' + sv, '_self');
}
}
});
}
    function goDownloadPage() {
    document.getElementsByClassName("without-video-url")[0].style.display = "none";
    document.getElementsByClassName("without-video-url")[1].style.display = "none";
    document.getElementsByClassName("with-video-url")[0].style.display = "block";
}
    function runProgressBar() {
    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.animation = 'progressing 9s linear';
}
    function clearProgressBar() {
    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = '0%';
}


    const lang = {currentLang: "el", paste: "Paste", clear: "Clear", linkEmpty: "Link is empty."};


    function insertAndExecute(e, t) {
    domelement = document.getElementById(e), domelement.innerHTML = t;
    var n = [];
    ret = domelement.childNodes;
    for (var o = 0; ret[o]; o++) !n || !nodeName(ret[o], "script") || ret[o].type && "text/javascript" !== ret[o].type.toLowerCase() || n.push(ret[o].parentNode ? ret[o].parentNode.removeChild(ret[o]) : ret[o]);
    for (script in n) evalScript(n[script])
}
    function nodeName(e, t) {
    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
}
    function evalScript(e) {
    data = e.text || e.textContent || e.innerHTML || "";
    var t = document.getElementsByTagName("head")[0] || document.documentElement,
    n = document.createElement("script");
    n.type = "text/javascript", n.appendChild(document.createTextNode(data)), t.insertBefore(n, t.firstChild), t.removeChild(n), e.parentNode && e.parentNode.removeChild(e)
}
    function runProgress() {
    if (0 == j) {
    j = 1;
    var e = document.querySelector(".progress-bar");
    e.style.width = 0;
    var t = 1,
    n = setInterval(function () {
    t >= 99 ? (clearInterval(n), j = 0) : (t++, e.ariaValueNow = t, e.style.width = t + "%")
}, 140)
}
}
    function iOS() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
}
    function isAndroid() {
    var e = navigator.userAgent.toLowerCase();
    return e.indexOf("android") > -1
}
    function openModal(e) {
    e.classList.add("is-active"), document.getElementById("body").style.overflow = "hidden"
}
    function closeModal(e) {
    e.classList.remove("is-active"), document.getElementById("body").style.overflow = "auto"
}
    function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(e => {
        closeModal(e)
    })
}
    function showAd(e, t) {
    let n = document.querySelectorAll('ins[data-vignette-loaded="true"]');
    0 == n.length && iOS() && t.preventDefault(), t.stopPropagation(), openModal(document.getElementById("ad-modal")), document.getElementById("ads-content").innerHTML = '<ins class="adsbygoogle" style="display:block; margin: 0 auto;" data-ad-client="ca-pub-2496545456108734" data-ad-slot="8422982901" data-ad-format="auto" data-full-width-responsive="true"></ins>', (adsbygoogle = window.adsbygoogle || []).push({}), 0 == n.length && iOS() && setTimeout(function () {
    null != e.getAttribute("href") ? window.location.href = e.getAttribute("href") : sendEvent("Error_Link_Null")
}, 1e3)
}
    function showBtnClear() {
    btnPaste.classList.add("active"), document.querySelector(".btn-paste span").innerHTML = lang.clear
}
    function showAlert(e) {
    alertEL.classList.add("active"), alertEL.innerHTML = e
}
    function hideAlert(e) {
    alertEL.classList.remove("active"), alertEL.innerHTML = ""
}
    function toggleLang() {
    document.querySelectorAll(".navbar-lang")[0].classList.toggle("show"), document.querySelector(".dropdown-lang").classList.toggle("show")
}
    const toggleSwitch = document.querySelector(".btn-darkmode");
    toggleSwitch.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    var e = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", e)
});
    const btnPaste = document.querySelector(".btn-paste"),
    inputUrl = document.getElementById("url");
    btnPaste.addEventListener("click", function () {
    btnPaste.classList.contains("active") ? (inputUrl.value = "", navigator.clipboard && (btnPaste.classList.remove("active"), document.querySelector(".btn-paste span").innerHTML = lang.paste)) : navigator.clipboard.readText().then(function (e) {
        "" != e ? (inputUrl.value = e, showBtnClear()) : showAlert(lang.linkEmpty)
    })
}), navigator.clipboard && (btnPaste.style.display = "flex"), inputUrl.addEventListener("keyup", function (e) {
    inputUrl.value.length > 0 && showBtnClear(), hideAlert()
});
    const alertEL = document.getElementById("alert"),
    shareButton = document.querySelector(".share-button");
    shareButton.addEventListener("click", e => {
    navigator.share ? navigator.share({
        title: "Share Downloaderi",
        url: "https://downloaderi.com"
    }).then(() => {
        sendEvent("Share_sucs_by_webapi")
    }).catch(console.error) : sendEvent("Share_webapi_not_support"), sendEvent("share_click_btnShare")
});


    (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-136242323-1', 'auto');
    ga('send', 'pageview');
    function sendEvent(e, n = "") {
    "" == n ? ga("send", "event", "home", e) : ga("send", "event", "home", e, n)
}
