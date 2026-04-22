AIUtil.SetContext Browser("creationtime:=3")
AIUtil("profile", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("My orders").Click
AIUtil.Table(micFromLeft, 1).Cell(1, 0).FindTextBlock("2349390564").CheckExists True

