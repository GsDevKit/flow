other
createGemServer
  | gemServer |
  gemServer := (ZnNewGemServer
    register: self flowApplicationServerName
    on: #(3333))
    logToObjectLog;
    logEverything;
    delegate: self flowDelegate;
    yourself