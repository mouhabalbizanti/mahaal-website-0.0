<%@ Page Language="VB" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Hello World! - My first Jelastic app</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="favicon.ico?v=1" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico?v=1" type="image/x-icon" />
        <link href="optimum/css/bc7fb6a384f8852ce77ea39d8ddce842.out.css" rel="stylesheet" type="text/css" />
        <link href="optimum/css/28f20baf9e864b89984ad68e3efedba1.addon.b64.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
        <div class="wrapper">
            <div class="hw-back-header">
                <div class="hw-back hw-back-1"></div>
                <div class="hw-back hw-back-2"></div>
            </div>
            <div class="page">
                <div class="header">
                    <div class="logodiv">
                        <div class="logo"> </div>
                        <div class="helloworld"></div>
                    </div>
                    <h2>You did it!</h2>
                    <h3 class="blue">Your application is now running in the Cloud!</h3>
                    <div class="nodename">
                        <%= System.Environment.MachineName %>
                    </div> <noscript>
                        <div class="helloworld"></div>
                    </noscript>
                </div>
                <div class="hw-separator"></div>
                <div class="links-block-title blue">Useful links</div>
                <div class="links-block">
                    <ul class="links">
                        <li><a target="_blank" href="http://docs.jelastic.com/jelastic-dashboard-guide">Dashboard
                                Guide</a></li>
                        <li><a target="_blank" href="http://docs.jelastic.com/deploy-dotnet-archive-url">Upload your own
                                .NET application</a></li>
                        <li><a target="_blank" href="http://docs.jelastic.com/dotnet-git-svn">Deploy .NET Projects via
                                GIT or SVN</a></li>
                        <li><a target="_blank" href="http://docs.jelastic.com/application-configuration">Application
                                Configuration</a></li>
                    </ul>
                    <ul class="links">
                        <li><a target="_blank" href="http://docs.jelastic.com/ssh-access">SSH Access</a></li>
                        <li><a target="_blank" href="http://docs.jelastic.com/ftp-ftps-support">FTP/FTPS Support</a>
                        </li>
                        <li><a target="_blank" href="http://docs.jelastic.com/charged-resources">Charged Resources</a>
                        </li>
                        <li><a target="_blank" href="http://docs.jelastic.com/pricing-model">Pricing Model</a></li>
                    </ul>
                </div>
                <div class="hw-separator"></div>
                <div class="share">
                    <div class="social"> <a target="_blank" name="twitter"
                            href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fjelastic.com%2F&source=tweetbutton&text=I've%20just%20deployed%20my%20first%20cloud%20app%20into%20Jelastic.%20Best%20.NET%20PaaS%20ever!&url=http%3A%2F%2Fjelastic.com%2F&via=jelastic"
                            class="twitter"></a> <a target="_blank" name="facebook"
                            href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fjelastic.com%2F&t=I've%20just%20deployed%20my%20first%20cloud%20app%20into%20Jelastic.%20Best%20.NET%20PaaS%20ever!"
                            class="facebook"></a> <a target="_blank" name="google-plus"
                            href="https://plus.google.com/share?url=http%3A%2F%2Fjelastic.com%2F&h1=en-US"
                            class="google-plus"></a> </div>
                </div>
                <div class="footer"> &copy; <a id="footer-link" href="http://jelastic.com/" target="_blank">Jelastic
                        Inc.</a>,
                    <%= DateTime.Now.ToString("yyyy") %>
                        All Rights Reserved.
                </div>
            </div>
            <div class="hw-back-footer">
                <div class="hw-back hw-back-3"></div>
                <div class="hw-back hw-back-4"></div>
            </div>
        </div>
        <script>(function (e, a, f) { var c, b = e.getElementsByTagName(a)[0]; if (e.getElementById(f)) { return } c = e.createElement(a); c.id = f; c.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; b.parentNode.insertBefore(c, b) }(document, "script", "facebook-jssdk")); var _gaq = _gaq || []; _gaq.push(["_setAccount", "UA-24049059-10"]); _gaq.push(["_setDomainName", "example.com"]); _gaq.push(["_setAllowLinker", true]); _gaq.push(["_trackPageview"]); (function () { var b = document.createElement("script"); b.type = "text/javascript"; b.async = true; b.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(b, a) })();</script>
        <script src="optimum/js/3f86f20d03fb70778d71baa0658ad452.out.js" type="text/javascript"></script>
    </body>

    </html>