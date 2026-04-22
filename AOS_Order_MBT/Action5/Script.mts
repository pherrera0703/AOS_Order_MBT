AIUtil.SetContext Browser("creationtime:=0")
AIUtil("shopping_cart").Click
'AIUtil("button", "CHECKOUT ($1,699.98)").Click
AIUtil("button", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("FOLLOW US")).Click
