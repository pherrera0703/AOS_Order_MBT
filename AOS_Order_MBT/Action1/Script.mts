SystemUtil.Run "Chrome.exe","","","",3
Set oContext = Browser("creationtime:=0")
wait 2
oContext.ClearCache
oContext.Navigate "https://advantageonlineshopping.com/#/"
oContext.Sync
oContext.Maximize
wait 5

AIUtil.SetContext Browser("creationtime:=0")

AIUtil("profile").Click
AIUtil("input", "Username").SetText "AOS_Demo123"
AIUtil("input", "Password").SetText "AOS_Demo123"
AIUtil("button", "SIGN IN").Click
