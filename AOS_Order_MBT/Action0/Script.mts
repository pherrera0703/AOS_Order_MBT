RunAction "Login", oneIteration
RunAction "Search-Item", oneIteration
RunAction "Add-To-Cart", oneIteration
RunAction "Checkout", oneIteration
RunAction "OrderPayment", oneIteration
RunAction "VerifyOrder", oneIteration, Parameter("OrderPayment", "aOrderNumberOut")
RunAction "RemoveOrder", oneIteration
RunAction "SignOut", oneIteration
