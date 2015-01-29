actions
startFlowAppDo: aBlock
  [ 
  GemstoneApp start.
  (Delay forSeconds: 5) wait.
  aBlock value ]
    ensure: [ 
      GemstoneApp stop.
      (Delay forSeconds: 5) wait ]