AIUtil.SetContext Browser("creationtime:=0")

AIUtil("button", "NEXT").Click
If not AIUtil.FindTextBlock("MasterCredit *kkk kkk*").Exist (2) Then
	'AIUtil("radio_button", "").SetState "On"
	AIUtil("radio_button", "", micWithAnchorOnLeft, AIUtil.FindTextBlock("SafePay")).SetState "On"
End If

' If NO payment  has been configured, then the code below should be executed
	'AIUtil("input", "Card number").Type "123412341234"
	'AIUtil("input", "CVV number").SetText "123"
	'AIUtil("check_box", "Save changes in profile for future use").SetState "Off"
	'AIUtil("input", "Cardholder name").SetText "AOS Demo"

AIUtil("button", "PAY NOW").Click
AIUtil.SetContext Browser("creationtime:=0")
OrderNumber = Split (AIUtil.FindTextBlock(micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Order Summary")).GetText, " ")(4)
' OrderNumber = Split (AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("button", "Thank you for buying with Advantage")).GetText, " ")(4)
aOrderNumberOut = OrderNumber
print OrderNumber

