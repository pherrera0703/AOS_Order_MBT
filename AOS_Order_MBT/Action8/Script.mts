AIUtil.SetContext Browser("creationtime:=3")
AIUtil.FindTextBlock("REMOVE").Click
AIUtil("button", "YES CANCEL").Click
AIUtil.FindTextBlock("No orders").CheckExists True
AIUtil("button", "CONTINUE SHOPPING").Click
