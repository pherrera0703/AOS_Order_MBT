AIUtil.SetContext Browser("creationtime:=3")
AIUtil("profile").Click
AIUtil("input", "Username").SetText "AOS_Demo123"
AIUtil("input", "Password").SetText "AOS_Demo123"
AIUtil("button", "SIGN IN").Click
