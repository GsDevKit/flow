other
flowDelegate
  ^ FWDelegate new
    addHandler: FWRESTAPIv10Handler new;
    addHandler:
        (FWFilesHandler
            for:
              (GsFile _expandEnvVariable: 'GEMSTONE_STONE_DIR' isClient: false) , '/service'
            base: 'service');
    addHandler: FWWebSocketsAPIHandler new;
    yourself