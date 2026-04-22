AIUtil.SetContext Browser("creationtime:=3")
OrderNumber = Parameter ("aOrderNumber")
AIUtil("profile", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("My orders").Click
AIUtil.Table(micFromLeft, 1).Cell(1, 0).FindTextBlock(OrderNumber).CheckExists True

